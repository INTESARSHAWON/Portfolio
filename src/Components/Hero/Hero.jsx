import React from 'react';
import './Hero.css';
import Intesar_Alam_Shawon from '../../assets/Intesar_Alam_Shawon.jpg';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={Intesar_Alam_Shawon} alt='Intesar_Alam_Shawon' />
        <h1><span>I am Intesar Shawon</span>, Frontend Developer based in Bangladesh</h1>
        <p>I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh</p>
        <div className='hero-action'>
            <div className='hero-resume'>
                My Resume
            </div>
            <Link to="https://github.com/INTESARSHAWON?tab=repositories"> <div className='hero-github'> <FaGithub /> Github </div> </Link>
        </div>
    </div>
  )
}

export default Hero
