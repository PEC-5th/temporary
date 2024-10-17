import { useEffect, useState } from 'react';
import { fetchRealtimeThreads } from '../api/fetchRealTimeThreads';
import { Thread } from '../model/types';

export const useRealtimeThreads = () => {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const eventSource = fetchRealtimeThreads();

    eventSource.onmessage = (event) => {
      const newThreads = JSON.parse(event.data);
      setThreads(newThreads);
    };

    eventSource.onerror = (error) => {
      console.error('SSE error:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return { threads };
};
