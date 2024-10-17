import { Thread } from '../model/types';

export const fetchThreads = async (): Promise<Thread[]> => {
  const response = await fetch('/api/threads');
  if (!response.ok) {
    throw new Error('Failed to fetch threads');
  }
  return response.json();
};
