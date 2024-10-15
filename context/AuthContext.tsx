'use client';

import { createContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => { },
  logout: () => { },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha iniciado sesión
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Simula una autenticación exitosa.
   *
   * @param {string} username
   * @param {string} password
   */
  /******  d75aea35-5585-4892-9eb1-3c97360f5fbb  *******/
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = (username: string, password: string) => {
    // Simular autenticación exitosa
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', username);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}