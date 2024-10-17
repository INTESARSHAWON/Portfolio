import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Card from '../Card/Card';
import project_1 from '../../assets/project_1.jpg';
import project_2 from '../../assets/project_2.jpg';
import project_3 from '../../assets/project_3.jpg';
import project_4 from '../../assets/project_4.jpg';
import project_5 from '../../assets/project_5.jpg';
import project_6 from '../../assets/project_6.jpg';
import arrow_icon from '../../assets/arrow_icon.svg';
import { Link } from 'react-router-dom';


const MyWork = ({projectThumb, title}) => {
  return (
    <div id='mywork' className='mywork'>
        <div className='mywork-title'>
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt='theme_pattern'/>
        </div>
        <div className='mywork-container'>
            <div className='mywork-container2'>
              <Card id={1} projectThumb={project_1} title="React Auth Dashboard"/>
              <Card id={2} projectThumb={project_2} title="Dice Games (React)"/>
              <Card id={3} projectThumb={project_3} title="React Foody Zone"/>
              <Card id={4} projectThumb={project_4} title="E-Commerce (JS)"/>
              <Card id={5} projectThumb={project_5} title="Amazon Clone"/>
              <Card id={6} projectThumb={project_6} title="Sliding Album (JS)"/>
            </div>
        </div>
        <Link to="/seemoredetail" className='mywork-showmore'> 
            <div className='mywork-showmore-slide'>
              <p> Show More  </p>
              <img src={arrow_icon} alt='arrow_icon'/>
            </div>
        </Link>
    </div>
  )
}

export default MyWork
