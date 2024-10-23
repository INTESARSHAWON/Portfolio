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
                    <p>During my academic years, I was the go-to person whenever classmates had issues with their phones or laptops. I was known for resolving any technical challenges that came my way.</p>
                    <p>Today, not much has changed, I'm still the first point of contact for technical issues. However, now my focus has expanded to developing innovative software solutions. I hold a Bachelor's degree in Computer Science from United International University and currently working as a Frontend Developer with a specialization in React.js. I am also expanding my expertise in Next.js. Additionally, I have strong skills in raw CSS, vanilla JavaScript, and C programming as well.</p>
                    <p>For further inquiries feel free to reach out via mail at intesarshawon@gmail.com or contact me at +880-1676 331312</p>
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
