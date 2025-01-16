import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";



function ContactUs() {
    const socialInfo= [
        {
            icon: MdEmail,
            title: 'Email Us',
            description: 'emmanuelvictor1305@gmail.com',
        },
        {
            icon: AiFillPhone,
            title: 'Call Us',
            description: 'phone: +234 '

        },
    ]
    return (
        <div className="contact__us__main container"id= 'Contact'>
            <div className="contact__us__main__title">
                <h2 className='head__contact__us'>Contact us</h2>
                <p className="sub__head__contact__us" >Gen-Z Accoutant is ready to provide the right solution according to your needs</p>
            </div>
            <div className='contact__us__info__main'>
                <div className="contact__us-info">
                    <div className="contact__us__social">
                        <h2 className="contact__us__social__head" style={{color: '#333', fontSize:'32px'}}>
                            Get in touch
                        </h2>
                        <p className="contact__us__social__sub-text">
                            ...
                        </p>
                        <br />
                        {socialInfo.map((info, index) => (
                            <div key={index} className="contact__us__social__info">
                                <div className='social__icon'>
                                    {/* <img src= {info.icon} className='contact__icon' alt= 'icon'/> */}
                                    <info.icon size={50} color='#0048ff'/>
                                </div>
                                <div className='social__contact'>
                                    <p className='social__head'>{info.title}</p>
                                    <p className= 'social__description'>{info.description}</p>
                                    <br />
                                </div>                              
                            </div>
                        ))}
                        <hr />
                        <div className="contact__social__media">
                            <h3 className="con-head">Follow our social media</h3>
                            <div className="social__media__icons">
                                <Link to='' target='_blank' rel="noopener noreferrer">
                                    <FaFacebook  size={30} color='#0048ff'/>                                
                                </Link>
                                <Link to='' target='_blank' rel="noopener noreferrer">
                                    <FaInstagram  size={30} color='#0048ff'/>                                
                                </Link>
                                <Link to='' target='_blank' rel="noopener noreferrer">
                                    <FaLinkedin  size={30} color='#0048ff'/>                                
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="contact__us__subscribe">
                        <div className="contact__us__sub">
                            <h2 className="contact__us__social__head" style={{color: '#333', fontSize:'32px'}}>
                                Send us a message
                            </h2>
                            <p className="contact__us__social__sub-text">
                            ...
                            </p>
                            <div className="subscribe__form">
                                {/* <div className="subscribe__form__one">
                                    <label htmlFor="name">Name</label>
                                    <p>
                                        <input type="text" name="Name" placeholder='Name' id="name" />
                                    </p>
                                  
                                    <label htmlFor="name">Phone</label>
                                    <p>
                                        <input type="tel" name="Phone" placeholder='Phone' id="phone" />
                                    </p>
                                </div> */}

                                {/* <div className="subscribe__form__two">
                                    <label htmlFor="name">Company</label>
                                    <p>
                                        <input type="text" name="company" placeholder='Company' id="company" />
                                    </p>
                                 
                                    <label htmlFor="name">Email</label>
                                    <p>
                                        <input type="email" name="email" placeholder='Email' id="email" />
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default ContactUs
