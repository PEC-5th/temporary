import { useMutation } from '@tanstack/react-query';
import { googleSignIn } from '../api/googleSignIn';
import { SignInResponse } from '../model/types';

export const useGoogleSignIn = () => {
  const mutation = useMutation<SignInResponse, Error>({
    mutationFn: googleSignIn,
    onError: (error) => {
      console.error('Google sign in failed:', error);
    },
  });

  const signIn = () => {
    mutation.mutate();
  };

  return {
    signIn,
    isLoading: mutation.isPending,
    error: mutation.error,
    user: mutation.data,
  };
};
