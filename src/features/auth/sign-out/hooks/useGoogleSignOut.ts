import { useMutation } from '@tanstack/react-query';
import { googleSignOut } from '../api/googleSignOut';
import { SignOutResponse } from '../model/types';

export const useGoogleSignOut = () => {
  const mutation = useMutation<SignOutResponse, Error>({
    mutationFn: googleSignOut,
    onError: (error) => {
      console.error('Google sign out failed:', error);
    },
  });

  const signOut = () => {
    mutation.mutate();
  };

  return {
    signOut,
    isLoading: mutation.isPending,
    error: mutation.error,
    data: mutation.data,
  };
};
