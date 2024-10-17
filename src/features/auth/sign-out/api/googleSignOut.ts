import { auth } from '../../../../../firebaseApp';
import { SignOutResponse } from '../model/types';

export async function googleSignOut(): Promise<SignOutResponse> {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('No user is currently signed in');
    }

    const uid = user.uid;
    await auth.signOut();

    // TODO: axios로 교체
    const response = await fetch('/api/auth/google?action=logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uid }),
    });

    if (!response.ok) {
      throw new Error('Failed to sign out on server');
    }

    return await response.json();
  } catch (error) {
    console.error('Google sign out failed:', error);
    throw error;
  }
}
