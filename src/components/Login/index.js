import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import thhlogo from '../Z_stuff/thhlogo.png';
import '../Z_stuff/All.css';

const Login = ({ msalInstance }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (msalInstance) {
      checkAuthenticationStatus();
    }
  }, [msalInstance, checkAuthenticationStatus]);

  const checkAuthenticationStatus = async () => {
    try {
      await msalInstance.handleRedirectPromise();
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        // Log current user information
        console.log('Current User Account:', accounts[0]);
        console.log('Username:', accounts[0].username);
        console.log('Name:', accounts[0].name);
        console.log('Account ID:', accounts[0].homeAccountId);
        console.log('Tenant ID:', accounts[0].tenantId);
        // Redirect to home page if already authenticated
        navigate('/home');
      }
    } catch (error) {
      console.error('Error checking authentication status:', error);
      setError('Failed to initialize authentication. Please refresh the page.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await msalInstance.loginPopup({
        scopes: ['User.Read'], // Only request basic profile - no admin consent needed
        prompt: 'select_account'
      });
      
      if (response) {
        // Log successful sign-in information
        console.log('Sign-in successful!');
        console.log('Response:', response);
        console.log('Account:', response.account);
        console.log('User signed in as:', response.account.username);
        console.log('Tenant:', response.account.tenantId);
        navigate('/home');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      if (error.errorCode === 'user_cancelled') {
        setError('Sign-in was cancelled. Please try again.');
      } else {
        setError('Failed to sign in. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex', 
        flexDirection: 'column', 
        width: '100vw', 
        height: '100vh',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#000'
      }}>
        <img style={{width: '150px', marginBottom: '20px'}} src={thhlogo} alt="THH Logo"/>
        <p style={{color: 'white', fontSize: '18px'}}>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      width: '100vw', 
      height: '100vh',
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#000'
    }}>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#111',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        maxWidth: '400px',
        width: '90%'
      }}>
        <img style={{width: '120px', marginBottom: '30px'}} src={thhlogo} alt="THH Logo"/>
        
        <h1 style={{
          color: 'white', 
          marginBottom: '10px', 
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          Welcome to THH Events
        </h1>
        
        <p style={{
          color: '#00f526', 
          textAlign: 'center', 
          marginBottom: '30px',
          fontSize: '16px'
        }}>
          Please sign in with your Microsoft account to continue
        </p>

        {error && (
          <div style={{
            color: '#ff4444',
            backgroundColor: '#ffeeee',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '20px',
            textAlign: 'center',
            width: '100%',
            fontSize: '14px'
          }}>
            {error}
          </div>
        )}

        <button
          onClick={handleSignIn}
          disabled={isLoading}
          style={{
            backgroundColor: '#0078d4',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            width: '100%',
            opacity: isLoading ? 0.6 : 1,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = '#106ebe';
            }
          }}
          onMouseOut={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = '#0078d4';
            }
          }}
        >
          {isLoading ? 'Signing in...' : 'Sign in with Microsoft'}
        </button>

        <p style={{
          color: '#888',
          fontSize: '12px',
          marginTop: '20px',
          textAlign: 'center'
        }}>
          You'll be redirected to Microsoft's secure login page
        </p>
      </div>
    </div>
  );
};

export default Login; 