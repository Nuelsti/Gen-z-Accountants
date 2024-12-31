import React from 'react'
import './style.css'
import { Link as RouterLink} from 'react-router-dom'
import Logo from '../../assets/img/GZ logo 00.png'

function Footer() {

    const reload = () => {
        windows.reload();
    };

    return (
        <div className="footer__main">
            <div className="footer__content">
                <div className="footer__contact">
                    <div className="navbar__header__logo">
                              <div className="llogo">
                                <RouterLink onClick={reload} to="/">
                                  <img className="logo__img" src={Logo} alt="logo" />
                                </RouterLink>
                              </div>
                              <p className="logo__name">Gen-z Accountants</p>
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
                        <RouterLink className="ln_link" to=''><img src="" alt="" /></RouterLink>

                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Footer
