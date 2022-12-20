import React from 'react'

import message from './image/message.svg'
import halal from './image/halal.svg'

const Order = () => {
  return (
    <section className="blogs" id="order">

    <h1 className="heading"><span>Make an order</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={message} alt=""/>
            <div className="content">
                <h3>Make an order by calling or messaging us</h3>
                <p>Give us a call and leave a voice note or send a message either by phone or on our facebook page.</p>
                <h3>0450680199</h3>
                <p>Note: Our sweets are only for pick up at our store in Glenfield.</p>
                <p>Note: Our Minimum Order Is 15 Peices Per Sweet.</p>
                <a href="https://www.facebook.com/khanamskitchen" target='_blank' className="btn">Facebook Page</a>
            </div>
        </div>

        <div className="box">
            <img src={halal} alt=""/>
            <div className="content">
                <h3>100% Halal</h3>
                <p>All our ingredients that we use are halal. Our business is run by honesty and respect.</p>
            </div>
        </div>

     

    </div>

    

</section>
  )
}

export default Order