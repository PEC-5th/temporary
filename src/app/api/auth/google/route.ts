import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '../../../../../firebaseAdmin';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  if (action === 'logout') {
    return handleLogout(request);
  } else {
    return handleLogin(request);
  }
}

async function handleLogin(request: NextRequest) {
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

async function handleLogout(request: NextRequest) {
  try {
    const { uid } = await request.json();

    if (!uid) {
      return NextResponse.json(
        { error: 'No user ID provided' },
        { status: 400 },
      );
    }

    if (!adminAuth) {
      throw new Error('Firebase Admin is not initialized');
    }

    // Firebase does not have a server-side logout method,
    // but we can revoke all refresh tokens for the user
    await adminAuth.revokeRefreshTokens(uid);

    return NextResponse.json({
      message: 'Logout successful',
    });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }
}
