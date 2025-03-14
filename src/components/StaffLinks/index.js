import React from 'react';
import '../Z_stuff/All.css';
import thhlogo from '../Z_stuff/thhlogo.png'
import CompanyProfile from './StaffLinks-assets/ComapanyProfile.pdf'
import fonts from './StaffLinks-assets/font.zip'
import { saveAs } from 'file-saver';

const Home = () => { 

    const handleDownload = () => {
        saveAs(CompanyProfile, 'CompanyProfile.pdf');
      }

      const handleDownloadZip = () => {
        saveAs(fonts, 'font.zip');
      }


    return (
        <>
            <div className='main' style={{display:'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>

            <img style={{width: '150px', marginTop: '80px'}} src={thhlogo} alt="THHLogo"/>
            <h1 style={{color: 'white', fontSize: '40px' }}>STAFF LINKS</h1>    

                <div className='green' style={{display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
                    <div className='holder' style={{display: 'flex', gap: '20px'}}>
                        {/* eslint-disable-next-line */}
                        <a rel="noreferrer" target="_blank" href="https://thehanginghouse.keka.com/">
                            <div className="ButtonDiv2">
                                <p>Keka</p>
                            </div>
                        </a> 
                        
                        {/* eslint-disable-next-line */}
                        {/* <a rel="noreferrer" onClick={handleDownloadZip}>
                            <div className="ButtonDiv2">
                                <p>Download Font</p>
                            </div>
                        </a> */}

                        {/* eslint-disable-next-line */}
                        <a rel="noreferrer" target="_blank" href="https://app.asana.com/0/home/1207156526358531">
                            <div className="ButtonDiv2">
                                <p>Asana</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a rel="noreferrer" target="_blank" href="https://thh-internal.web.app/">
                            <div className="ButtonDiv2">
                                <p>THH Internal</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */}
        
                    </div>

                    <div className='holder' style={{display: 'flex', gap: '20px', padding: '20px'}}>
                        <a rel="noreferrer" target="_blank" href="https://thehanginghouse.com/">
                            <div className="ButtonDiv2">
                                <p>THH Website</p>
                            </div>
                        </a>
                        
                        {/* eslint-disable-next-line */}
                        {/* <a rel="noreferrer" target="_blank" href="https://www.sonicwall.com/products/remote-access/vpn-clients/">
                            <div className="ButtonDiv2">
                                <p>Sonic Wall</p>
                            </div>
                        </a> */}

                        {/* eslint-disable-next-line */}
                        {/* <a rel="noreferrer" onClick={handleDownload}>
                            <div className="ButtonDiv2">
                                <p>Company Profile</p>
                            </div>
                        </a> */}

                        {/* eslint-disable-next-line */}
                        {/* <a rel="noreferrer" target="_blank" href="https://analytics.google.com/analytics/web/?authuser=1#/report-home/a138673239w199446139p193870326">
                            <div className="ButtonDiv2">
                                <p>Google Analytics</p>
                            </div>
                        </a> */}

           

                        {/* eslint-disable-next-line */}
                        <a rel="noreferrer" target="_blank" href="https://login.microsoftonline.com/">
                            <div className="ButtonDiv2">
                                <p>Microsoft</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a rel="noreferrer" target="_blank" href="https://thehanginghouse-org.myfreshworks.com/login?redirect_uri=https%3A%2F%2Fthehanginghouse-org.myfreshworks.com%2Fcrm%2Fsales%2Ffreshid%2Fauthorize_callback%3Fredirect_uri%3D%2Fmy_dashboards%3Ftab%3D353503">
                            <div className="ButtonDiv2">
                                <p>Freshworks</p>
                            </div>
                        </a>
                    </div>
                </div>


                <h1 style={{color: 'white', fontSize: '40px' }}>Downloads</h1>   

                <div className='green' style={{display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
                    <div className='holder' style={{display: 'flex', gap: '20px'}}>

                        {/* eslint-disable-next-line */}
                        <a rel="noreferrer" onClick={handleDownloadZip}>
                            <div className="ButtonDiv2">
                                <p>Download Font</p>
                            </div>
                        </a>

                        <a rel="noreferrer" target="_blank" href="https://www.sonicwall.com/products/remote-access/vpn-clients/">
                            <div className="ButtonDiv2">
                                <p>Sonic Wall</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a rel="noreferrer" onClick={handleDownload}>
                            <div className="ButtonDiv2">
                                <p>Company Profile</p>
                            </div>
                        </a>

                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default Home