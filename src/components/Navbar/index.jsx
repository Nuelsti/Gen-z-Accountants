import React, { useState } from "react";
import "./style.css";
import { Link as ScrollLink} from "react-scroll";
import { Link as RouterLink } from "react-router-dom";




const Navbar = () => {
  const [open, setopen] = useState(false);

  const togglehambuger = () => {
    setopen(!open);
    console.log(open);
  };
  const reload = () => {
    window.reload();
  }
  return (
    <div className="fixed_Navbar">
        <div className="Navbar">
            <div className='Navbar__logo'>  
                <div className="Navbar__logo__main">
                    <RouterLink to="/" onClick={reload}> <img className='Navbar__logo__img'src={''} alt="Gen-z logo"/> </RouterLink>
                    <h1 className='logo__head'>Gen-Z Accountants</h1>
                    <p className='logo__head__sub'>Empowering Future Finance Leaders in Nigeria</p>                
                </div>  

            </div>
            <div className="Navbar_flex">
                <div className={`Navbar_link ${open && `open`}`} id="Nav_link">
                    <ul id="navlink">
                        <ScrollLink 
                            to="Hero" 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className="link"
                        >
                            Home
                        </ScrollLink>              
                        <ScrollLink                
                            to="About"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className="link">
                            About Us
                        </ScrollLink>
                        <ScrollLink 
                            to="Programs" 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className="link">
                            Programs 
                        </ScrollLink>

                        <ScrollLink 
                            to="Mission" 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className="link">
                            Mission & Vision                       
                        </ScrollLink>
                        <ScrollLink 
                            to="Impact" 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className="link">
                            Impact
                        </ScrollLink>
                        <ScrollLink 
                            to="Get" 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className="link">
                            Get Involved
                        </ScrollLink>
                        <ScrollLink 
                            to="Contact" 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className="link">
                            Contact Us
                        </ScrollLink>
                    </ul>
                   
                </div>              
            </div>
        </div>

        <div className="nav_btn">                                                            
            {/* hamburger */}
            <div className="hambuger">
                <label className={`hamburger ${open && `open`}`}>
                    <input type="checkbox" onClick={togglehambuger} />
                    <svg viewBox="0 0 32 32">
                    <path
                        className={`line line_top_bottom`}
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>
        </div>
    </div>

  );
};

export default Navbar;
