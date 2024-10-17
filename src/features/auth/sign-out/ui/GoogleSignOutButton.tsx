import React from 'react';
import { useGoogleSignOut } from '../hooks/useGoogleSignOut';

const GoogleSignOutButton: React.FC = () => {
  const { signOut, isLoading, error, data } = useGoogleSignOut();

  return (
    <div>
      <button
        onClick={signOut}
        disabled={isLoading}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {isLoading ? 'Signing out...' : 'Sign out'}
      </button>
      {error && <p className="text-red-500 mt-2">{error.message}</p>}
      {data && <p className="text-green-500 mt-2">{data.message}</p>}
    </div>
  );
};

export { GoogleSignOutButton };
