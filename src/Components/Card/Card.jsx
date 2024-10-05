import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({projectThumb, title, id}) => {
  return (
    <div className='card-container'>
        <img src={projectThumb} alt='projectThumb'/>
        {/* <div className='explore-button' >Explore {title}</div> */}
        <div className='details-button'>
          <Link to={`/detail/${id}`} >Details about {title}</Link>
        </div>  
    </div>
  )
}

export default Card
