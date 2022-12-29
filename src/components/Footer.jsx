import React from 'react'

const Footer = () => {
  return (
    <section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>Khanam's Kitchen</h3>
            <p>The home of south east asian sweets</p>
            <div className="share">
                <a href="https://www.facebook.com/khanamskitchen" className="fab fa-facebook-f"></a>
            </div>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#" className="links"> <i className="fas fa-phone"></i> 0450680199</a>
            <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> Glenfield, Sydney </a>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <a href="#" className="links"> <i className="fas fa-arrow-right"></i> Home </a>
            <a href="#features" className="links"> <i className="fas fa-arrow-right"></i> About Us </a>
            <a href="#menu" className="links"> <i className="fas fa-arrow-right"></i> Menu </a>
            <a href="#services" className="links"> <i className="fas fa-arrow-right"></i> Services </a>
            <a href="#review" className="links"> <i className="fas fa-arrow-right"></i> Reviews </a>
            <a href="#blogs" className="links"> <i className="fas fa-arrow-right"></i> Order </a>
        </div>

    </div>

    <div className="credit"> created by <span><a href='http://www.webprofessor.com.au/'>The Web Professor</a></span> | all rights reserved </div>

</section>
  )
}

export default Footer