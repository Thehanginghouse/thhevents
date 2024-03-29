import { Link } from "react-router-dom";
import React from 'react';
import '../Z_stuff/All.css';
import thhlogo from '../Z_stuff/thhlogo.png'


const DemoLinks = () => { 

    return (
        <>
            <div className='main' style={{display:'flex', flexDirection: 'column', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{width: '300px'}} src={thhlogo} alt="THHLogo"/>
            <h1 style={{color: 'white', fontSize: '40px' }}>DEMO LINKS</h1>    

                <div className='holder' style={{display: 'flex', gap: '20px', padding: '20px'}}>
                    {/* eslint-disable-next-line */}
                    <Link to={{pathname:`/registrationapps`}}> 
                        <div className="ButtonDiv2" style ={{width: '280px'}}>
                            <p>Web Apps - Registration Apps</p>
                        </div>
                    </Link> 
                </div>
                
                <div className='holder' style={{display: 'flex', gap: '20px', padding: '20px'}}>
                    {/* eslint-disable-next-line */}
                    <Link to={{pathname:`/activationapps`}}> 
                        <div className="ButtonDiv2" style ={{width: '280px'}}>
                            <p>Web Apps - Activations</p>
                        </div>
                    </Link>
                </div>

                <div className='holder' style={{display: 'flex', gap: '20px', padding: '20px'}}>
                    {/* eslint-disable-next-line */}
                    <Link to={{pathname:`/bookingapps`}}> 
                        <div className="ButtonDiv2" style ={{width: '280px'}}> 
                            <p>Web Apps - Booking Apps</p>
                        </div>
                    </Link> 
                </div>
                
                
            </div>
        </>
    )
}

export default DemoLinks