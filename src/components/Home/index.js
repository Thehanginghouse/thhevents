
import thhlogo from '../Z_stuff/thhlogo.png'
import React from 'react';
import '../Z_stuff/All.css'
import adminicon from '../Z_stuff/adminicon.png'
import stafficon from '../Z_stuff/stafficon.png'
import demoicon from '../Z_stuff/demoicon.png'
import { useNavigate } from 'react-router-dom';


const Home = () => { 

    const navigate = useNavigate();


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
        </>
    )
}

export default Home