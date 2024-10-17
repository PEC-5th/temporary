import { useQuery } from '@tanstack/react-query';
import { fetchThreads } from '../api/fetchThreads';

export const useThreads = () => {
  return useQuery({
    queryKey: ['threads'],
    queryFn: fetchThreads,
  });
};
