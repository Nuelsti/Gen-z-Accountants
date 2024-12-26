import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer__main">
            <div className="footer__content">
                <div className="footer__contact">
                    <div className="main_logo">

                    </div>
                    <div className="footer__online__contact">
                        <div className="contact__icon"></div>
                        <div className="contact__info__cont">
                            <p className="phone_number">+234 810 738 928</p>
                            <p className="mail">gen-x@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer__btns">
                        <span className="btn1 main_btns">Donate Now</span>
                        <span className="btn2 main_btns">Become A member</span>
                    </div>
                </div>
                <hr />
                <div className="social__info">
                    <div className="fb">
                        <Link className="fb_link" to='/fb'><img src="" alt="" /></Link>

                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Footer
