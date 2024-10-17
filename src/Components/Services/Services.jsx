import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';


const Services = () => {
  return (
    <div id='services' className='services'>
        <div className='services-title'>
            <h1>My Services</h1>
            <img src={theme_pattern} alt='theme_pattern' />
        </div>
        <div className='services-container'>
              <p>From the time when I wasn't even a graduate, I have been working is Cricfrenzy.com as a part-time contributor. I wrote content about sports. After a year of my graduation in 2020 I got some interest to learn frontend development. Then I have learnt deeply about html, CSS and Js. Then I used to give instruction for betterment about our site to our backend developer. From where I got some knowledge about backend also. By those days I work as a content creator by writing sports articles and as a frontend developer by make the necessary changes to the site together. As our site's design had to change in every week. In 2024, I got some interest to learn about React JS. I have no professional experiences as a React Developer. But with my core knowlwdge about html, raw CSS and vanila JS, I hope I can build a lot. Soon I will Complete Next JS as well.</p>
        </div>
    </div>
  )
}

export default Services
