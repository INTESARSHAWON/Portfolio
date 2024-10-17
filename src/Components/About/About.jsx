import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Intesar_Alam_Shawon from '../../assets/Intesar_Alam_Shawon.jpg';


const About = () => {
  return (
    <div id='about' className='about'>
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
                    <p>As a teenager at school and college, I was the kid other students approached about issues with their phones or laptop. I was the go-to guy for fixing resolving any technical problems. </p>
                    <p>Today, not much has changed. I’m still the first point of call for technical issues. The difference is I now also keen to develop innovative software to solve the problems.I have completed my bachelor's degree in Computer Science at United International University. Currently I am a Frontend Developer based on React JS. Soon I will complete Next JS as well. I have speciality on Raw CSS and vanila JS as well. I am a good C programmer as well.</p>
                    <p>If you want to know more about me, send me a message or reach out to me at intesarshawon@gmail.com or call me at +880 1676331312</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'>
                        <p>
                            React
                        </p>
                        <hr style={{width: "68%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>
                            JavaScript
                        </p>
                        <hr style={{width: "70%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>
                            CSS
                        </p>
                        <hr style={{width: "80%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>
                            HTML
                        </p>
                        <hr style={{width: "80%"}}/>
                    </div>
                </div>
            </div>

        </div>

        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>2+</h1>
                <p>Years of Experience in Vanila JavaScript</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>8</h1>
                <p>Months of Experience in React</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>30+</h1>
                <p>Projects Completed</p>
            </div>
            
        </div>

    </div>
  )
}

export default About
