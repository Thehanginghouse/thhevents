export const msalConfig = {
  auth: {
    clientId: '28c1e25b-164c-4f81-b9ab-b8c10cf54e2a',
    // Single-tenant configuration - replace YOUR_TENANT_ID with your actual Azure AD Tenant ID
    authority: 'https://login.microsoftonline.com/3d42da73-4e47-438f-85a0-6c256915e7d5',
    // Alternative: Use your tenant domain name instead of ID
    // authority: 'https://login.microsoftonline.com/yourdomain.onmicrosoft.com',
    redirectUri: window.location.origin, // Automatically uses current URL
  },
}; 