import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from "./components/Login";
import Home from "./components/Home";
import StaffLinks from "./components/StaffLinks";
import AdminLinks from "./components/AdminLinks";
import DemoLinks from "./components/DemoLinks";
import RegistrationApps from "./components/Registration";
import ActivationApps from "./components/Activation";
import BookingApps from "./components/Booking";
import AuthGuard from "./components/AuthGuard";
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './msalConfig';

function App() {
  const [msalInstance, setMsalInstance] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initMsal = async () => {
      try {
        const msal = new PublicClientApplication(msalConfig);
        await msal.initialize();
        setMsalInstance(msal);
        setIsInitialized(true);
      } catch (error) {
        console.error('Error initializing MSAL:', error);
      }
    };

    initMsal();
  }, []);

  return (
    <div className="App">
      {isInitialized && (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login msalInstance={msalInstance} />} />
            <Route path="/home" element={
              <AuthGuard msalInstance={msalInstance}>
                <Home msalInstance={msalInstance} />
              </AuthGuard>
            } />
            <Route path="/stafflinks" element={
              <AuthGuard msalInstance={msalInstance}>
                <StaffLinks msalInstance={msalInstance} />
              </AuthGuard>
            } />
            <Route path="/adminlinks" element={
              <AuthGuard msalInstance={msalInstance}>
                <AdminLinks msalInstance={msalInstance} />
              </AuthGuard>
            } />
            <Route path="/demolinks" element={
              <AuthGuard msalInstance={msalInstance}>
                <DemoLinks msalInstance={msalInstance} />
              </AuthGuard>
            } />
            <Route path="/registrationapps" element={
              <AuthGuard msalInstance={msalInstance}>
                <RegistrationApps msalInstance={msalInstance} />
              </AuthGuard>
            } />
            <Route path="/activationapps" element={
              <AuthGuard msalInstance={msalInstance}>
                <ActivationApps msalInstance={msalInstance} />
              </AuthGuard>
            } />
            <Route path="/bookingapps" element={
              <AuthGuard msalInstance={msalInstance}>
                <BookingApps msalInstance={msalInstance} />
              </AuthGuard>
            } />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;