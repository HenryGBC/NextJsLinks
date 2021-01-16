import React, { createContext, useState, useContext, useEffect } from 'react';
import Router, { useRouter } from 'next/router';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    !token && router.push('/auth/login');
  }, [token]);

  const isLogged = () => {
    return localStorage.getItem('token');
    // AuthContext.isLogged = localStorage.getItem('token');
  };

  const login = (email, password) => {
    const token = '231231123';
    localStorage.setItem('token', token);
    setToken(token);
  };
  const logout = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
  };
  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
