import { User } from 'firebase/auth';
import React, { useRef } from 'react';
import { useCreateThread } from '../hooks/useCreateThread';
import { useRealtimeThreads } from '../hooks/useRealTimeThreads';
import { useThreads } from '../hooks/useThreads';

interface ThreadComponentProps {
  user: User | null;
  isAuthenticated: boolean;
}

const ThreadComponent: React.FC<ThreadComponentProps> = ({
  user,
  isAuthenticated,
}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const { isLoading, isError } = useThreads();
  const { threads: realtimeThreads } = useRealtimeThreads();
  const createThreadMutation = useCreateThread();

  const handleCreateThread = () => {
    if (!isAuthenticated || !user) {
      alert('You must be logged in to create a thread');
      return;
    }

    const title = titleRef.current?.value;
    const content = contentRef.current?.value;

    if (!title || !content) {
      alert('Please fill in both title and content');
      return;
    }

    createThreadMutation.mutate({
      title,
      content,
      authorId: user.uid,
    });

    if (titleRef.current) titleRef.current.value = '';
    if (contentRef.current) contentRef.current.value = '';
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading threads</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Realtime Threads</h2>
      <ul>
        {realtimeThreads.map((thread) => (
          <li key={thread.id} className="mb-2 p-2 border rounded">
            <h3 className="font-bold">{thread.title}</h3>
            <p>{thread.content}</p>
          </li>
        ))}
      </ul>
      <h1 className="text-2xl font-bold mb-4">Threads</h1>

      <div className="mb-4">
        <input
          ref={titleRef}
          type="text"
          placeholder="Thread Title"
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          ref={contentRef}
          placeholder="Thread Content"
          className="w-full p-2 mb-2 border rounded"
        />
        <button
          onClick={handleCreateThread}
          className="bg-blue-500 text-white p-2 rounded"
          disabled={createThreadMutation.isPending || !isAuthenticated}
        >
          {createThreadMutation.isPending ? 'Creating...' : 'Create Thread'}
        </button>
      </div>
    </div>
  );
};

export default ThreadComponent;
