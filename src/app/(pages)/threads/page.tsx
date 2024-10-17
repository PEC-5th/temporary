'use client';

import { useContext } from 'react';
import { AuthContext } from '@/app/providers/AuthProvider';
import ThreadComponent from '@/entities/thread/ui/Thread';

const ThreadPage: React.FC = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <ThreadComponent user={user} isAuthenticated={isAuthenticated} />
    </>
  );
};

export default ThreadPage;
