import React from 'react';
import '../Z_stuff/All.css';
import thhlogo from '../Z_stuff/thhlogo.png'

const Registration = () => { 
    return (
        <>
            <div className='main' style={{display:'flex', flexDirection: 'column', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>

            <img style={{width: '300px'}} src={thhlogo} alt="THHLogo"/>
            
            {/* <div style = {{display: 'flex', width: '100%', height: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}> */}
                <h1 style={{color: 'white', fontSize: '20px' }}>WEB APPS - REGISTRATION APPS</h1>    
            {/* </div> */}

                <div className='green' style={{display: 'flex', gap: '20px', padding: '20px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <div className='holder' style={{display: 'flex', gap: '20px'}}>
                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://sailgp.vercel.app/">
                            <div className="ButtonDiv2" style={{width: '200px'}}>
                                <p>SailGP</p>
                            </div>
                        </a> 
                    </div>

                    <div className='holder' style={{display: 'flex', gap: '20px'}}>
                        
                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://www.nissanaftersalesconference.org/registration/639ab3bd9c5476e1f47700d8">
                            <div className="ButtonDiv2" style={{width: '200px'}}>
                                <p>Nissan Aftersales</p>
                            </div>
                        </a>
                    </div>
                    
                    <div className='holder' style={{display: 'flex', gap: '20px'}}>
                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://feedback-kohl.vercel.app/">
                            <div className="ButtonDiv2" style={{width: '200px'}}>
                                <p>Nissan Feedback</p>
                            </div>
                        </a>
                    </div>

                    {/* <div className='holder' style={{display: 'flex', gap: '20px', padding: '20px'}}>
                        eslint-disable-next-line
                        <a target="_blank" href="https://thh-internal.web.app/">
                            <div className="ButtonDiv2">
                                <p>Puzzle Game</p>
                            </div>
                        </a>

                        eslint-disable-next-line
                        <a target="_blank" href="https://thehanginghouse.com/">
                            <div className="ButtonDiv2">
                                <p>Web Builder</p>
                            </div>
                        </a>

                        eslint-disable-next-line
                        <a target="_blank" href="https://thehanginghouse.com/">
                            <div className="ButtonDiv2">
                                <p>Photo Mosaic</p>
                            </div>
                        </a>

                    </div> */}
                </div>
                
            </div>
        </>
    )
}

export default Registration