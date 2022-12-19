import React from 'react'

import party from './image/party.svg'
import fresh from './image/clean.svg'
import medal from './image/medal.svg'

const About = () => {
  return (
    <div>

<section className="features" id="features">

<h1 className="heading"> What makes us the<span>Best</span> </h1>

<div className="box-container">

    <div className="box">
        <img src={party} alt=""/>
        <h3>Large events</h3>
        <p>We make our sweets for large events and normal gatherings and the quality is always the best.</p>
        <a href="#menu" className="btn">Menu</a>
    </div>

    <div className="box">
        <img src={fresh} alt=""/>
        <h3>Made Fresh</h3>
        <p>Your order will never be left in the fridge over night. Our sweets are always made with fresh ingredients and correct hygiene.
        </p>
        <a href="#menu" className="btn">Menu</a>
    </div>

    <div className="box">
    <img src={medal} alt=""/>
        <h3>Best in Sydney</h3>
        <p>We guarantee that we sell the best sweets in all of Sydney. Our quality and taste is what makes them the best.</p>
        <a href="#menu" className="btn">Menu</a>
    </div>


</div>

</section>

    </div>
  )
}

export default About