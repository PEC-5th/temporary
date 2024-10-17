import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createThread } from '../api/createThread';

export const useCreateThread = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createThread,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['threads'] });
    },
  });
};
