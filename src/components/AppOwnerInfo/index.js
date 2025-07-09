import React from 'react';
import { msalConfig } from '../../msalConfig';

const AppOwnerInfo = () => {
  // Extract tenant ID from authority URL
  const getTenantInfo = () => {
    const authority = msalConfig.auth.authority;
    const clientId = msalConfig.auth.clientId;
    
    // Extract tenant ID if it's not 'common'
    let tenantId = 'Multi-tenant (common)';
    if (authority.includes('/') && !authority.includes('/common')) {
      const parts = authority.split('/');
      tenantId = parts[parts.length - 1];
    }
    
    return {
      clientId,
      tenantId,
      authority,
      redirectUri: msalConfig.auth.redirectUri
    };
  };

  const appInfo = getTenantInfo();

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      backgroundColor: '#222',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '11px',
      border: '1px solid #444',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      maxWidth: '350px',
      zIndex: 1000
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#00f526' }}>Azure AD App Registration Info</h4>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>Client ID:</strong>
        <div style={{ fontSize: '9px', wordBreak: 'break-all', marginTop: '2px', fontFamily: 'monospace' }}>
          {appInfo.clientId}
        </div>
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>Tenant ID:</strong>
        <div style={{ fontSize: '9px', wordBreak: 'break-all', marginTop: '2px', fontFamily: 'monospace' }}>
          {appInfo.tenantId}
        </div>
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>Authority:</strong>
        <div style={{ fontSize: '9px', wordBreak: 'break-all', marginTop: '2px', fontFamily: 'monospace' }}>
          {appInfo.authority}
        </div>
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>Redirect URI:</strong>
        <div style={{ fontSize: '9px', wordBreak: 'break-all', marginTop: '2px', fontFamily: 'monospace' }}>
          {appInfo.redirectUri}
        </div>
      </div>

      <div style={{ 
        marginTop: '12px', 
        padding: '8px', 
        backgroundColor: '#333', 
        borderRadius: '4px',
        fontSize: '10px'
      }}>
        <strong>📝 To find the owner:</strong>
        <br />
        1. Go to <a href="https://portal.azure.com" target="_blank" rel="noreferrer" style={{color: '#00f526'}}>Azure Portal</a>
        <br />
        2. Search for this Client ID in App registrations
        <br />
        3. The owner will be the Azure AD tenant where it's registered
      </div>

      <div style={{ 
        marginTop: '8px', 
        padding: '8px', 
        backgroundColor: '#2d4a22', 
        borderRadius: '4px',
        fontSize: '10px'
      }}>
        <strong>🏢 Organization:</strong> "The Hanging House"
        <br />
        <strong>📧 Owner Account:</strong> Whoever created this app registration
      </div>
    </div>
  );
};

export default AppOwnerInfo; 