'use client'; // Required for stateful React components in the App Router

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load user from local storage or cookie
    const token = localStorage.getItem('authToken');
    if (token) {
      // Replace with real user data fetching if needed
      setUser({ name: 'John Doe', email: 'john@example.com' });
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('authToken', 'fakeToken'); // Replace with real token
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
