import { useGoogleSignIn } from '../hooks/useGoogleSignIn';

const GoogleSignInButton = () => {
  const { signIn, isLoading, error, user } = useGoogleSignIn();

  return (
    <div>
      <button
        onClick={signIn}
        disabled={isLoading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {isLoading ? 'Signing in...' : 'Sign in with Google'}
      </button>
      {error && <p className="text-red-500 mt-2">{error.message}</p>}
      {user && <p className="text-green-500 mt-2">Signed in successfully!</p>}
    </div>
  );
};

export { GoogleSignInButton };
