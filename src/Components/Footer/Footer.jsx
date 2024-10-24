import React from 'react';
import './Footer.css';
import intesar from '../../assets/intesar.png';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={intesar} alt='footer_logo'/>
                <p>I am Intesar Shawon, Frontend Developer based in Bangladesh</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt='user_icon'/>
                    <input type='email' placeholder='Enter Your Email'/>
                </div>
                <div className='footer-subscribe'>
                    Subscribe
                </div>
            </div>
        </div>    
        <hr/>
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>
                © 2024 Intesar Shawon. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
