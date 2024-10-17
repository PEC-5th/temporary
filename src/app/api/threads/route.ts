import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../firebaseApp';

export async function POST(request: NextRequest) {
  try {
    const { title, content, authorId } = await request.json();
    const docRef = await addDoc(collection(db, 'threads'), {
      title,
      content,
      authorId,
      createdAt: new Date().toISOString(),
    });
    return NextResponse.json({
      id: docRef.id,
      message: 'Thread created successfully',
    });
  } catch (error) {
    console.error('Error adding thread:', error);
    return NextResponse.json(
      { error: 'Failed to create thread' },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sse = searchParams.get('sse');

  if (sse === 'true') {
    // SSE 처리
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const threadsRef = collection(db, 'threads');
        const q = query(threadsRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
          const threads = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          const data = encoder.encode(`data: ${JSON.stringify(threads)}\n\n`);
          controller.enqueue(data);
        });

        // Clean up function
        request.signal.addEventListener('abort', () => {
          unsubscribe();
          controller.close();
        });
      },
    });

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } else {
    // 일반 GET 요청 처리
    try {
      const threadsSnapshot = await getDocs(collection(db, 'threads'));
      const threads = threadsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return NextResponse.json(threads);
    } catch (error) {
      console.error('Error fetching threads:', error);
      return NextResponse.json(
        { error: 'Failed to fetch threads' },
        { status: 500 },
      );
    }
  }
}
