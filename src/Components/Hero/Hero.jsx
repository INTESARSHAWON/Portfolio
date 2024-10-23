import React from 'react';
import './Hero.css';
import Intesar_Alam_Shawon from '../../assets/Intesar_Alam_Shawon.jpg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={Intesar_Alam_Shawon} alt='Intesar_Alam_Shawon' />
        <h1><span>I am Intesar Shawon</span>, <b> Frontend Developer based in Bangladesh </b></h1>
        
        <div className= 'hero-action'>
            <div className= 'hero-resume'>
                My Resume
            </div>
            <Link className= 'hero-github' to="https://github.com/INTESARSHAWON" target='_blank'> <div> <FaGithub/> Github </div> </Link>
            <Link className= 'hero-linkedin' to="https://www.linkedin.com/in/intesar-shawon-292752179/" target='_blank'> <div> Linked<FaLinkedin/> </div> </Link>
        </div>
    </div>
  )
}

export default Hero
