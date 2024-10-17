import { NextResponse } from 'next/server';
import { adminAuth } from '../../../../../firebaseAdmin';

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();

    if (!idToken) {
      return NextResponse.json(
        { error: 'No ID token provided' },
        { status: 400 },
      );
    }

    if (!adminAuth) {
      throw new Error('Firebase Admin is not initialized');
    }

    const decodedToken = await adminAuth.verifyIdToken(idToken);
    // 여기에 사용자 인증 후 로직을 추가하세요

    return NextResponse.json({
      message: 'Authentication successful',
      uid: decodedToken.uid,
    });
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 401 },
    );
  }
}
