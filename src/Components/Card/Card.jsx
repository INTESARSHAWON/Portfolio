import React from 'react';
import './Card.css';
// import image from '../../assets/image.jpg';


const Card = ({projectThumb, title}) => {
  return (
    <div className='card-container'>
        <img src={projectThumb} alt='projectThumb'/>
        <div className='explore-button'>Explore {title}</div>
    </div>
  )
}

export default Card
