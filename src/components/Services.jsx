import React from 'react'

import family from './image/guest.svg'
import large from './image/large.jpg'
import facebook from './image/facebook.svg'


const Services = () => {
  return (
    <section className="categories" id="categories">

    <h1 className="heading"> Our <span>Services</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={family} alt=""/>
            <h3>Family & Friends</h3>
            <p>We make our sweets for any type of gathering. We put care and effort so your guests can enjoy their time.</p>
            <a href="#order" className="btn">Order now</a>
        </div>

        <div className="box">
            <img src={large} alt=""/>
            <h3>Large Events</h3>
            <p>We have had great succeses at large events like weddings and parties. Give us a call and leave a message or sent a text if you're interested.
                 We'll make sure that your event has a sweet ending!</p>
            <a href="#order" className="btn">Contact us</a>
        </div>

        <div className="box">
            <img src={facebook} alt=""/>
            <h3>Offers and Videos</h3>
            <p>We update our followers on facebook about new sweets and upload cooking tutorial videos. Give us a follow!</p>
            <a href="https://www.facebook.com/khanamskitchen" target='_blank' className="btn">Visit our page</a>
        </div>

        

    </div>
    

</section>
  )
}

export default Services