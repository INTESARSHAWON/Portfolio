import React from 'react'
import './StickyButton.css';
import { Link, useNavigate } from 'react-router-dom'


const StickyButton = () => {
  let navigate = useNavigate();

  return (
    <div className='sticky-button'>
        <Link className= 'back-button' onClick={() => navigate(-1)}><div> Back </div> </Link>
    </div>
  )
}

export default StickyButton
