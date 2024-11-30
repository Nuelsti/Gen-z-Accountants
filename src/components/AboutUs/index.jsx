import React from 'react'
import Image1 from '../../assets/img/IMG_2250.jpg'
import './style.css'

function About() {
    return (
        <div className="about__main" id="About">
            <div className="about__main__content">
                <div className="about__main__img">
                    <div className="about__background"></div>
                    <img src={Image1} alt="" className="main__img" />
                    <img src={Image1} alt="" className="main__img2" />

                </div>
                <div className="about__main_text">
                    {/* <h1 className="about__us__head" style={{fontSize: "4rem", color: '#003366'}}>About Us</h1> */}
                    <div className="about__content">
                        {/* <p className="about__us__sub_head">Our Mission</p> */}
                        <p className="about__us__content">
                            <span className='about__sub__conent'>Gen-Z Accountants </span>, is a Not-for-Profit Organization dedicated 
                            to guiding young finance aspirants in Nigeria. 
                            Our mission is to address career mismatches and the scarcity of skilled finance 
                            professionals in the country.
                        </p>

                        <p className="about__us__content">
                            We achieve this through a <span className="about__sub__conent"> <i>6-year Career Fellowship</i> </span>  that nurtures 
                            Senior Secondary School students, equipping them with essential skills,
                            ethical training, and a strong professional network.
                        </p>
                        <p className="about__us__content">
                            Our work goes beyond career guidance; we aim to alleviate unemployment, reduce societal challenges like cultism, 
                            and create a future where every aspiring finance professional in Nigeria has the
                            resources and support to succeed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default About
