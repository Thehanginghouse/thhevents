import React from 'react';
import '../Z_stuff/All.css';
import thhlogo from '../Z_stuff/thhlogo.png'

const Booking = () => { 
    return (
        <>
            <div className='main' style={{display:'flex', flexDirection: 'column', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>

            <img style={{width: '300px'}} src={thhlogo} alt="THHLogo"/>
            
            {/* <div style = {{display: 'flex', width: '100%', height: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}> */}
                <h1 style={{color: 'white', fontSize: '20px' }}>WEB APPS - ACTIVATIONS</h1>    
            {/* </div> */}

                <div className='green' style={{display: 'flex', gap: '20px', padding: '20px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <div className='holder' style={{display: 'flex', gap: '20px', padding: '10px'}}>
                        {/* eslint-disable-next-line */}
                        <a target="_blank" rel="noreferrer" href="https://carbookingapp.vercel.app/">
                            <div className="ButtonDiv2" style={{width: '280px'}}>
                                <p>Nissan Car Booking App</p>
                            </div>
                        </a>
                    </div>

                    <div className='holder' style={{display: 'flex', gap: '20px', padding: '10px'}}>
                        {/* eslint-disable-next-line */}
                        <a target="_blank" rel="noreferrer" href="https://kite-festival-app.vercel.app/">
                            <div className="ButtonDiv2" style={{width: '280px'}}>
                                <p>Kite Festival Booking App</p>
                                <p style={{fontSize: '12px', marginTop: '-17px', color: 'grey'}}>name: admin </p>
                                <p style={{fontSize: '12px', marginTop: '-17px', color: 'grey'}}>password: admin123</p>
                            </div>
                        </a>
                    </div>

                    <div className='holder' style={{display: 'flex', gap: '20px', padding: '10px'}}>
                        {/* eslint-disable-next-line */}
                        <a target="_blank" rel="noreferrer" href="https://www.nissanaftersalesconference.org/">
                            <div className="ButtonDiv2" style={{width: '280px'}}>
                                <p>Nissan RSVP App</p>
                            </div>
                        </a>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Booking