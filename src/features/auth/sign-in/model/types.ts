import { User } from 'firebase/auth';

export interface SignInResponse {
  customToken: string;
  user: User;
}

export interface AuthError {
  code: string;
  message: string;
}
