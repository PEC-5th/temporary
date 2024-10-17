'use client';

import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { app } from '../../../firebaseApp';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isInitialized: false,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsAuthenticated(!!firebaseUser);
      setIsInitialized(true);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isInitialized }}>
      {isInitialized ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
