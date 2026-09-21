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
                    <p>Communications and media professional with 9+ years of experience in journalism, digital content, media relations, audience engagement, and editorial work. Currently working as a Senior Correspondent at Cricfrenzy, with experience in content planning, research, interviews, storytelling, and digital communications. I also hold a BSc in Computer Science & Engineering and have hands-on experience with React.js and Next.js, giving me a strong mix of communication skills and technical knowledge. I have worked closely with editorial, production, and digital teams to create engaging content, manage projects, and meet tight deadlines. I am now looking to bring this experience into a corporate communications or public relations role, where I can build meaningful communication, manage media relationships, and contribute to a company’s brand and reputation.
</p>
                    <p>I combine professional communication experience with a technology background, holding a BSc in Computer Science & Engineering and hands-on React.js and Next.js experience. My work centers on communication, storytelling, and audience understanding, supported by technical skills for today’s digital-first environments. I have also built my own portfolio website, allowing me to put my technical skills into practice and better understand the digital side of communication.
</p>
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
                <h1>5+</h1>
                <p>Years of Experience in Vanila JavaScript</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>2+</h1>
                <p>Years of Experience in React</p>
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
