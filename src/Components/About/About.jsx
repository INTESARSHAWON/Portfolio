import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Intesar_Alam_Shawon from '../../assets/Intesar_Alam_Shawon.jpg';


const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt='theme_pattern'/>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={Intesar_Alam_Shawon} alt='Intesar Alam Shawon'/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh</p>
                    <p>I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh I am Intesar Shawon, Frontend Developer based in Bangladesh</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'>
                        <p>
                            HTML
                        </p>
                        <hr style={{width: "80%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>
                            CSS
                        </p>
                        <hr style={{width: "80%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>
                            JavaScript
                        </p>
                        <hr style={{width: "70%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>
                            React
                        </p>
                        <hr style={{width: "68%"}}/>
                    </div>
                </div>
            </div>

        </div>

        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>2</h1>
                <p>Years of Experience in Vanila JavaScript</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>8</h1>
                <p>Months of Experience in React</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>50+</h1>
                <p>Projects Completed</p>
            </div>
            
        </div>

    </div>
  )
}

export default About
