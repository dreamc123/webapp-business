import { useState, useEffect } from 'react';

export interface AuthState {
  isAuthenticated: boolean;
  user: null | { email: string };
  error: string | null;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    error: null
  });

  const login = async (email: string, password: string) => {
    try {
      // For demo purposes, accept any email/password combination
      if (email && password) {
        setAuthState({
          isAuthenticated: true,
          user: { email },
          error: null
        });
        localStorage.setItem('user', JSON.stringify({ email }));
        return true;
      }
      throw new Error('Invalid credentials');
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        error: 'Invalid email or password'
      }));
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setAuthState({
      isAuthenticated: false,
      user: null,
      error: null
    });
  };

  // Check for existing session
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setAuthState({
        isAuthenticated: true,
        user,
        error: null
      });
    }
  }, []);

  return { ...authState, login, logout };
}