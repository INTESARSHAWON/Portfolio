import React from 'react'
import './StickyButton.css';
import { Link } from 'react-router-dom'

const StickyButton = () => {
  return (
    <div className='sticky-button'>
        <Link className= 'back-button' to="/#mywork"> <div> Back </div> </Link>
    </div>
  )
}

export default StickyButton
