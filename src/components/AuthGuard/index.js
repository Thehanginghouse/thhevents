import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children, msalInstance }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const checkAuthenticationStatus = useCallback(async () => {
    try {
      await msalInstance.handleRedirectPromise();
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length === 0) {
        navigate('/');
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      navigate('/');
    } finally {
      setIsLoading(false);
    }
  }, [msalInstance, navigate]);

  useEffect(() => {
    if (msalInstance) {
      checkAuthenticationStatus();
    }
  }, [msalInstance, checkAuthenticationStatus]);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000'
      }}>
        <p style={{ color: 'white', fontSize: '18px' }}>Loading...</p>
      </div>
    );
  }

  return isAuthenticated ? children : null;
};

export default AuthGuard; 