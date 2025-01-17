import React from 'react'
import './style.css'
import { Link as RouterLink} from 'react-router-dom'
import Logo from '../../assets/img/GZ logo 00.png'
import { Link } from 'react-router-dom'

function Footer() {

    const reload = () => {
        windows.reload();
    };

    return (
        <div className="footer__main container">
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
                    {/* <div className="footer__online__contact">
                        <div className="contact__icon"></div>
                        <div className="contact__info__cont">
                            <p className="phone_number">+234 902 800 0271</p>
                            <p className="mail">genzacct@outlook.com</p>
                        </div>
                    </div> */}
                    <div className="footer__btns">
                        <Link to= 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oHgFFhUQUhGMkZORzFYMEQ4SDNGUUlMUVRQTUxBUi4u'className="btn1 main_btns">Become a Volunteer</Link>
                        <Link to= 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oHgFFhUNkcwSTNJV1FGUDdNMUNRU1M4SFlIVVpNUS4u'className="btn2 main_btns">Become a member</Link>
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
