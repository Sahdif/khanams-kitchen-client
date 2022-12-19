import React from 'react'

import {menu} from './constants';


const Menu = () => {
  return (

<section className="features" id="menu">

<h1 className="heading"> our <span>Menu</span> </h1>

<div className="box-container">

    {menu.map((item) => ((
         <div key={item.id} className="box">
            
         <img src={item.img} alt="f"/>
         
         <h3>{item.name}</h3>
         <h3 className='item-price'>{item.price}</h3>
         <p>{item.description}</p>
         <a href="#order" className="btn">Order Now</a>
     </div> 
    )))}


</div>

</section>

  )
}

export default Menu