import React from 'react';
import '../Z_stuff/All.css';
import thhlogo from '../Z_stuff/thhlogo.png'


const AdminLinks = () => { 

    return (
        <>
            <div className='main' style={{display:'flex', flexDirection: 'column', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{width: '300px'}} src={thhlogo} alt="THHLogo"/>
            <h1 style={{color: 'white', fontSize: '40px' }}>Admin Links</h1>    

                <div className='holder' style={{display: 'flex', gap: '20px', padding: '20px'}}>
                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://admin.microsoft.com/">
                        <div className="ButtonDiv2">
                            <p>MS Admin Portal</p>
                        </div>
                    </a> 
                       
                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://www.mysonicwall.com/muir/login">
                        <div className="ButtonDiv2">
                            <p>Sonic Wall </p>
                        </div>
                    </a>

                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://accounts.autodesk.com/">
                        <div className="ButtonDiv2">
                            <p>Autodesk </p>
                        </div>
                    </a>
                </div>

                <div className='holder' style={{display: 'flex', gap: '20px', padding: '20px'}}>

                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://books.zoho.com/">
                        <div className="ButtonDiv2">
                            <p>ZOHO</p>
                        </div>
                    </a>    

                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://eservices.tax.gov.ae/en-us/login">
                        <div className="ButtonDiv2">
                            <p>Tax</p>
                        </div>
                    </a>

                    <a target="_blank" href="https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2Fhomepage_milo%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.adobe.com%252Fhome%2523old_hash%253D%2526from_ims%253Dtrue%253Fclient_id%253Dhomepage_milo%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Cpps.read%252Cfirefly_api%26state%3D%257B%2522jslibver%2522%253A%2522v2-v0.40.0-17-g241fb07%2522%252C%2522nonce%2522%253A%25223905192359174690%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=homepage_milo&scope=AdobeID%2Copenid%2Cgnav%2Cpps.read%2Cfirefly_api&state=%7B%22jslibver%22%3A%22v2-v0.40.0-17-g241fb07%22%2C%22nonce%22%3A%223905192359174690%22%7D&relay=13c2082a-5eed-488e-810e-4a4298944aa0&locale=en_US&flow_type=token&idp_flow_type=login&s_p=google%2Cfacebook%2Capple&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.adobe.com%2Fhome%23old_hash%3D%26from_ims%3Dtrue%3Fclient_id%3Dhomepage_milo%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Cgnav%2Cpps.read%2Cfirefly_api&use_ms_for_expiry=true#/">
                        <div className="ButtonDiv2">
                            <p>Adobe</p>
                        </div>
                    </a>
                </div>

                
                
                
            </div>
        </>
    )
}

export default AdminLinks