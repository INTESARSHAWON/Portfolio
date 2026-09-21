import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';


const Services = () => {
  return (
    <div id='services' className='services'>
        <div className='services-title'>
            {/* <h1>My Services</h1> */}
            <h1>Skills</h1>
            <img src={theme_pattern} alt='theme_pattern' />
        </div>
        <div className='services-container'>
              {/* <p>Before my graduation, I worked for Cricfrenzy.com as a part-time contributor, writing content about sports. After my graduation , In 2020 I developed an interest in learning frontend development. Since then, I have gradually learned about html, CSS, and JavaScript. I also worked with our backend developer as an instructor to improve our site. During this time, I was working as a content creator by writing sports article and also a frontend developer, implementing necessary changes to the site on a weekly basis as the design evolved. In 2024, I began focusing on learning React JS while I have no professional experience as a React developer, but my solid foundation in html, CSS, and vanilla JavaScript gives me the confidence to build extensively with React. I am also aiming to complete my learning of Next.js in the near future.</p> */}
              <p>Corporate & Strategic Communications</p>
              <p>Content Strategy , News & Feature Writing</p>
              <p>Editing, Proofreading & Documentation</p>
              <p>Research, Analysis, Storytelling & Digital Communications</p>
              <p>Team Lead & Deadline Management</p>
              <p>Project Management & Media Coverage</p>
              <p>Video Content & Digital Marketing</p>
              <p>Web Development, React.js, Next.js & JavaScript</p>

        </div>
    </div>
  )
}

export default Services
