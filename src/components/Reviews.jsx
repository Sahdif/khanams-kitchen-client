import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

import {menu, review} from './constants';

import customer from './image/customer.svg'


const Reviews = () => {

    const settings = {
        dots: false,
        autoplay: true,
      autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
        
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 840,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }    


        ]
      };

  return (
    <section className="review" id="review">

    <h1 className="heading"> Customer's <span>Review</span> </h1>

    <div className="review-slider">

        <div className="">

<Slider {...settings}>
        {review.map((item) => ((
<div key={item.id} className="box review-box">
                <img src={customer} alt=""/>
                <p>{item.comment}</p>
                <h3>{item.name}</h3> 
                <div className="stars">
                {item.stars === 5 ?  
                <div>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i> 
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i> 
               <i className="fas fa-star"></i>
               </div>
                
                : <p>Another satisfied customer!</p> } 
                    
                </div> 
</div> 
)))} 
</Slider>


        </div>

    </div>

</section>
  )
}

export default Reviews