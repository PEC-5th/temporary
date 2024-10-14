import {
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from 'firebase/auth';
import { auth } from '../../../../../firebaseApp';
import { SignInResponse } from '../model/types';

export async function googleSignIn(): Promise<SignInResponse> {
  try {
    const provider = new GoogleAuthProvider();
    const result: UserCredential = await signInWithPopup(auth, provider);

    const idToken = await result.user.getIdToken();

    const response = await fetch('/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });

    if (!response.ok) {
      throw new Error('Failed to authenticate with server');
    }

    return await response.json();
  } catch (error) {
    console.error('Google sign in failed:', error);
    throw error;
  }
}
