import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '../../../../../firebaseAdmin';

export async function POST(request: NextRequest) {
  try {
    const { idToken } = await request.json();

    const decodedToken = await adminAuth.verifyIdToken(idToken);
    const { uid, email, name } = decodedToken;

    const customToken = await adminAuth.createCustomToken(uid);

    return NextResponse.json({
      customToken,
      user: { uid, email, displayName: name },
    });
  } catch (error) {
    console.error('Authentication failed:', error);
    return NextResponse.json(
      { message: 'Authentication failed' },
      { status: 500 },
    );
  }
}
