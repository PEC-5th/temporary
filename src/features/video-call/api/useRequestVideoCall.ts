import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { request } from '@/shared/api/request';

export default function usePostRequestVideoCall({
  schedules,
  userId,
  options,
}: {
  schedules: string[];
  userId: number;
  options?: UseMutationOptions;
}) {
  return useMutation({
    mutationFn: () =>
      request({
        url: `/user/${userId}/video-call/request`,
        method: 'POST',
        data: { schedules, userId },
      }),
    ...options,
  });
}
