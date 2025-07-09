
import thhlogo from '../Z_stuff/thhlogo.png'
import React, { useState, useEffect } from 'react';
import '../Z_stuff/All.css'
import adminicon from '../Z_stuff/adminicon.png'
import stafficon from '../Z_stuff/stafficon.png'
import demoicon from '../Z_stuff/demoicon.png'
import { useNavigate } from 'react-router-dom';
import UserDebugInfo from '../UserDebugInfo';
// import AppOwnerInfo from '../AppOwnerInfo';


const Home = ({ msalInstance }) => { 

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (msalInstance) {
            checkAuthenticationStatus();
        }
    }, [msalInstance]);

    const checkAuthenticationStatus = async () => {
        try {
            await msalInstance.handleRedirectPromise();
            const accounts = msalInstance.getAllAccounts();
            if (accounts.length === 0) {
                // No authenticated users, redirect to login
                navigate('/');
            } else {
                setUser(accounts[0]);
                // Log detailed user information
                console.log('=== Current User Details ===');
                console.log('Full Account Object:', accounts[0]);
                console.log('Username (Email):', accounts[0].username);
                console.log('Display Name:', accounts[0].name);
                console.log('Account ID:', accounts[0].homeAccountId);
                console.log('Tenant ID:', accounts[0].tenantId);
                console.log('Environment:', accounts[0].environment);
                console.log('Local Account ID:', accounts[0].localAccountId);
            }
        } catch (error) {
            console.error('Error checking authentication:', error);
            navigate('/');
        }
    };

    const handleSignOut = async () => {
        try {
            await msalInstance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/"
            });
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };


    function admin() {
        navigate('/adminlinks');
    }

    function staff() {
        navigate('/stafflinks');
    }

    function demo() {
        navigate('/demolinks');
    }
    return (
        <>
            {/* Header with user info and logout */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                padding: '15px 20px',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
            }}>
                {user && (
                    <div style={{color: 'white', fontSize: '12px', textAlign: 'right'}}>
                        <div style={{fontWeight: 'bold', marginBottom: '2px'}}>
                            Welcome, {user.name || user.username}
                        </div>
                        <div style={{fontSize: '10px', opacity: 0.8}}>
                            {user.username}
                        </div>
                        <div style={{fontSize: '10px', opacity: 0.6}}>
                            Tenant: {user.tenantId?.substring(0, 8)}...
                        </div>
                    </div>
                )}
                <button
                    onClick={handleSignOut}
                    style={{
                        backgroundColor: '#ff4444',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#cc3333'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#ff4444'}
                >
                    Sign Out
                </button>
            </div>

            <div style={{display:'flex', flexDirection: 'column', width: '100vw', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width: '150px', marginTop: '80px'}} src={thhlogo} alt="THHLogo"/>
                <h1 className="implinks" style={{color: 'white', marginBottom: '-40px', textAlign: 'center'}}>IMPORTANT LINKS</h1>
                <p className="welcome" style={{color: '#00f526', textAlign: 'center', padding: '20px'}}>Welcome! Explore the links to our frequently visited websites below.</p> 

                <div className="homediv" style={{display: 'flex', gap: '20px', padding: '20px', paddingTop: '5px', marginBottom: '100px'}}>
                    <div className="ButtonDiv" onClick={admin}>
                        <img id='head' style={{width: '50px', paddingTop: '20px'}} src={adminicon} alt="AdminIcon"/>
                        <p>ADMIN LINKS</p>
                    </div>

                    <div className="ButtonDiv" onClick={staff}>  
                        <img id='head' style={{width: '50px', paddingTop: '20px'}} src={stafficon} alt="AdminIcon"/>
                        <p>STAFF LINKS</p>
                    </div>

                    <div className="ButtonDiv" onClick={demo}>
                        <img id='head' style={{width: '50px', paddingTop: '20px'}} src={demoicon} alt="AdminIcon"/>
                        <p>DEMO LINKS</p>
                    </div>
                </div>
                
                
            </div>
            
            {/* Debug component for user info */}
            <UserDebugInfo msalInstance={msalInstance} />
            
            {/* App registration owner info */}
            {/* <AppOwnerInfo /> */}
        </>
    )
}

export default Home