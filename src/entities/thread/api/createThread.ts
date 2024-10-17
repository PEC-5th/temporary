import { Thread } from '../model/types';

export const createThread = async (
  threadData: Omit<Thread, 'id' | 'createdAt'>,
): Promise<Thread> => {
  const response = await fetch('/api/threads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(threadData),
  });
  if (!response.ok) {
    throw new Error('Failed to create thread');
  }
  return response.json();
};
