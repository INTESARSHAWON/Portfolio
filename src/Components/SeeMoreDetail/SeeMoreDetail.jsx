import React, { useEffect } from 'react'
import './SeeMoreDetail.css';
import Footer from '../Footer/Footer';
import StickyButton from '../StickyButton/StickyButton';
import Card from '../Card/Card';
import project_1 from '../../assets/project_1.jpg';
import project_2 from '../../assets/project_2.jpg';
import project_3 from '../../assets/project_3.jpg';
import project_4 from '../../assets/project_4.jpg';
import project_5 from '../../assets/project_5.jpg';
import project_6 from '../../assets/project_6.jpg';
import project_11 from '../../assets/project_11.jpg';
import project_12 from '../../assets/project_12.jpg';
import project_13 from '../../assets/project_13.jpg';
import project_16 from '../../assets/project_16.jpg';
import project_17 from '../../assets/project_17.jpg';
import project_18 from '../../assets/project_18.jpg';
import project_19 from '../../assets/project_19.jpg';
import project_20 from '../../assets/project_20.jpg';


const SeeMoreDetail = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
      },[])

  return (
    <div>
        <StickyButton/>
        <div className='mywork-container'>
            <Card id={1} projectThumb={project_1} title="React Auth Dashboard"/>
            <Card id={2} projectThumb={project_2} title="Dice Games (React)"/>
            <Card id={3} projectThumb={project_3} title="React Foody Zone"/>
            <Card id={4} projectThumb={project_4} title="E-Commerce (JS)"/>
            <Card id={5} projectThumb={project_5} title="Amazon Clone"/>
            <Card id={6} projectThumb={project_6} title="Sliding Album (JS)"/>
            <Card id={11} projectThumb={project_11} title="Double Landing Page (JS)" location="/seemoredetail" />
            <Card id={12} projectThumb={project_12} title="Backgound Image Scroll Effect (JS)"/>
            <Card id={13} projectThumb={project_13} title="Mouse Position (JS)"/>
            <Card id={16} projectThumb={project_16} title="Profile Statictics (JS)"/>
            <Card id={17} projectThumb={project_17} title="Countdown To New Year (JS)"/>
            <Card id={18} projectThumb={project_18} title="Pomodoro Timer (JS)"/>
            <Card id={19} projectThumb={project_19} title="Digital Clock (JS)"/>
            <Card id={20} projectThumb={project_20} title="Mini Calendar (JS)"/>
        </div>
        <Footer/>      
    </div>
  )
}

export default SeeMoreDetail
