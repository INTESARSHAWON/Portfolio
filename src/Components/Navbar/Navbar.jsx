// import React from 'react';
import './Navbar.css';
import intesar1 from '../../assets/intesar.png';
import underline from '../../assets/nav_underline.svg';
import { useEffect, useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right = "0";
  }

  const closeMenu = () =>{
    menuRef.current.style.right = "-450px";
  }

  let location = useLocation()
  useEffect(()=> {
   if (location.hash) {
     let elem = document.getElementById(location.hash.slice(1))
     if(elem) {
       elem.scrollIntoView({behavior: "smooth"})
              }          
       } else {
 window.scrollTo({top:0,left:0, behavior: "smooth"})
               }
   }, [location,])


  return (
    <div className='navbar'>
          <img src={intesar1} alt='logo' onClick={()=> setMenu('home')} />
          <img className='nav-mob-open' src={menu_open} alt='menu_open' onClick={openMenu}/>
        <ul ref={menuRef} className='nav-menu'>

            <img className='nav-mob-close' src={menu_close} alt='menu_close' onClick={closeMenu} />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=> setMenu('home')}>Home</p></AnchorLink>{menu==='home' ? <img src={underline} alt='underline'/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> setMenu('about')}>About Me</p></AnchorLink>{menu === 'about' ? <img src={underline} alt='underline'/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=> setMenu('services')}>Services</p></AnchorLink>{menu === 'services' ? <img src={underline} alt='underline'/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#mywork'><p onClick={()=> setMenu('work')}>Portfolio</p></AnchorLink>{menu === 'work' ? <img src={underline} alt='underline'/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact' ? <img src={underline} alt='underline'/> : <></>}</li>
        </ul>
        <div className='nav-connect'><Link to="https://www.linkedin.com/in/intesar-shawon-292752179/" className='anchor-link' offset={50} target='_blank'>Connect With Me</Link></div>
    </div>
  )
}

export default Navbar
