import React from 'react';
import './Hero.css';
import Intesar_Alam_Shawon from '../../assets/Intesar_Alam_Shawon.jpg';


const Hero = () => {
  return (
    <div className='hero'>
        <img src={Intesar_Alam_Shawon} alt='Intesar_Alam_Shawon' />
        <h1><span>I am Intesar Shawon</span>, Frontend Developer based in Bangladesh</h1>
        <p>I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh</p>
        <div className='hero-action'>
            <div className='hero-connect'>
                Connect with me
            </div>
            <div className='hero-resume'>
                My Resume
            </div>
        </div>
    </div>
  )
}

export default Hero
