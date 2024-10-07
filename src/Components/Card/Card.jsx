import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({projectThumb, title, id}) => {
  return (
    <div className='card-container'>
        <Link to={`/detail/${id}`}> <img src={projectThumb} alt='projectThumb'/> </Link>
        {/* <div className='explore-button' >Explore {title}</div> */}
        <div className='details-button'>
          <Link to={`/detail/${id}`} >Details about {title}</Link>
        </div>  
    </div>
  )
}

export default Card
