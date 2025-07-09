import React, { useState } from 'react';

const UserDebugInfo = ({ msalInstance }) => {
  const [showDebug, setShowDebug] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const getUserInfo = () => {
    if (!msalInstance) return;
    
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      setUserInfo(accounts[0]);
      setShowDebug(!showDebug);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <button
        onClick={getUserInfo}
        style={{
          backgroundColor: '#0078d4',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        {showDebug ? 'Hide' : 'Show'} User Info
      </button>

      {showDebug && userInfo && (
        <div style={{
          position: 'absolute',
          bottom: '50px',
          right: '0',
          backgroundColor: '#222',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          minWidth: '300px',
          maxWidth: '400px',
          fontSize: '11px',
          border: '1px solid #444',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#00f526' }}>Current User Account</h4>
          
          <div style={{ marginBottom: '8px' }}>
            <strong>Display Name:</strong> {userInfo.name || 'N/A'}
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <strong>Username/Email:</strong> {userInfo.username}
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <strong>Account ID:</strong> 
            <div style={{ fontSize: '9px', wordBreak: 'break-all', marginTop: '2px' }}>
              {userInfo.homeAccountId}
            </div>
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <strong>Tenant ID:</strong>
            <div style={{ fontSize: '9px', wordBreak: 'break-all', marginTop: '2px' }}>
              {userInfo.tenantId}
            </div>
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <strong>Environment:</strong> {userInfo.environment}
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <strong>Local Account ID:</strong>
            <div style={{ fontSize: '9px', wordBreak: 'break-all', marginTop: '2px' }}>
              {userInfo.localAccountId}
            </div>
          </div>

          <button
            onClick={() => console.log('Full User Object:', userInfo)}
            style={{
              backgroundColor: '#00f526',
              color: 'black',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '10px',
              marginTop: '10px'
            }}
          >
            Log Full Object to Console
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDebugInfo; 