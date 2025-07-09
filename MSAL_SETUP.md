# Microsoft Authentication Setup Guide

## Prerequisites
Before using the Microsoft login functionality, you need to set up an Azure AD app registration.

## Step 1: Create Azure AD App Registration

1. Go to the [Azure Portal](https://portal.azure.com/)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **New registration**
4. Fill in the details:
   - **Name**: THH Events App (or your preferred name)
   - **Supported account types**: Accounts in this organizational directory only (single tenant)
   - **Redirect URI**: 
     - Platform: Single-page application (SPA)
     - URL: `http://localhost:3000` (for development)

## Step 2: Configure Authentication

1. In your app registration, go to **Authentication**
2. Under **Single-page application**, add these redirect URIs:
   - `http://localhost:3000` (for development)
   - Your production URL (when deploying)
3. Under **Implicit grant and hybrid flows**, check:
   - ✅ Access tokens (used for implicit flows)
   - ✅ ID tokens (used for implicit and hybrid flows)

## Step 3: Configure API Permissions

1. Go to **API permissions**
2. Click **Add a permission**
3. Select **Microsoft Graph**
4. Choose **Delegated permissions**
5. Add these permissions:
   - `User.Read` (basic profile information)
   - `Calendars.Read` (if you need calendar access)
6. Click **Grant admin consent** (if you're an admin)

## Step 4: Update Configuration

1. Copy your **Application (client) ID** from the app registration overview
2. Copy your **Directory (tenant) ID** from the app registration overview
3. Update `src/msalConfig.js`:

```javascript
const msalConfig = {
  auth: {
    clientId: 'YOUR_CLIENT_ID', // Replace with your Application (client) ID
    authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID', // Replace with your Directory (tenant) ID
    redirectUri: window.location.origin,
  },
  // ... rest of config
};
```

## Step 5: Test the Application

1. Run `npm start`
2. Navigate to `http://localhost:3000`
3. You should see the login page
4. Click "Sign in with Microsoft"
5. Complete the Microsoft authentication flow
6. You should be redirected to the home page

## Troubleshooting

### Common Issues:

1. **AADSTS50011**: The reply URL specified in the request does not match the reply URLs configured for the application.
   - **Solution**: Make sure the redirect URI in Azure matches your application URL exactly.

2. **AADSTS700051**: The response_type 'token' is not enabled for the application.
   - **Solution**: Enable "Access tokens" in the Authentication section of your app registration.

3. **AADSTS65001**: The user or administrator has not consented to use the application.
   - **Solution**: Grant admin consent for the required permissions in the API permissions section.

## Production Deployment

When deploying to production:

1. Add your production URL to the redirect URIs in Azure
2. Update the `redirectUri` in `msalConfig.js` if needed (or keep `window.location.origin` for automatic detection)
3. Ensure your production domain is properly configured in Azure AD

## Security Notes

- Never commit your actual client ID and tenant ID to public repositories
- Consider using environment variables for sensitive configuration
- Review and minimize the required API permissions
- Regularly rotate your client secrets if using client credentials flow (not needed for SPA) 