export const fetchRealtimeThreads = (): EventSource => {
  return new EventSource('/api/threads?sse=true');
};
