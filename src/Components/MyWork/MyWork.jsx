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

import Intesar_Alam_Shawon from '../../assets/Intesar_Alam_Shawon.jpg';


const MyWork = ({projectThumb, title}) => {
  return (
    <div className='mywork'>
        <div className='mywork-title'>
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt='theme_pattern'/>
        </div>
        <div className='mywork-container'>
            <Card projectThumb={project_1} title="React Crypto Dashboard"/>
            <Card projectThumb={project_2} title="React Foody Zone"/>
            <Card projectThumb={project_3} title="E-Commerce (JS)"/>
            <Card projectThumb={project_4} title="Sliding Album (JS)"/>
            <Card projectThumb={project_5} title="Amazon Clone"/>
            <Card projectThumb={project_6} title="Dice Games (JS)"/>
        </div>
    </div>
  )
}

export default MyWork
