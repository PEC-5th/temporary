import { useQuery } from '@tanstack/react-query';
import { request } from '@/shared/api/request';
import { User } from '../type';

export default function useGetUserInformation<T = User>({
  userId,
}: {
  userId: number;
}) {
  return useQuery<User, T>({
    queryKey: ['get-user', userId],
    queryFn: () =>
      request({
        url: `/user/${userId}`,
        method: 'GET',
      }),
  });
}
