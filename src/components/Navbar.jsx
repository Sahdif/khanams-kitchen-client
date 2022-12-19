import React, { useState } from 'react';

import backgroundImage from './image/cover-pic-2.jpg'
import logo from './image/logo.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }


  return (
    <div>

<header className="header">

<a href="#" className="logo"> Khanam's Kithcen </a>

<nav className={isOpen ? 'navbar open' : 'navbar closed'}>
    <a href="#home">home</a>
    <a href="#features">About Us</a>
    <a href="#menu">Menu</a>
    <a href="#categories">Services</a>
    <a href="#review">Reviews</a>
    <a href="#order">Order</a>
</nav>

<div onClick={toggleMenu} className="icons">
    <div className="fas fa-bars" id="menu-btn"></div>
   
</div>

</header>


<section style={{ backgroundImage: `url(${backgroundImage})` }} className="home background-img" id="home">

<div className="content">
    <h3>Welcome to the <span>home</span> of South Asian sweets</h3>
    <p>
        Traditional sweets that will make you feel like you're home. Made with care and love, we can guarantee that you
        have never tasted anything better.
    </p>
    <img className="logo-pic" src={logo} alt=""/>
</div>

</section>

    </div>
  )
}

export default Navbar