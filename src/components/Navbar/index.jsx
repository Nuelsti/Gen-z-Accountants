import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../../assets/img/GZ logo 00.png';
import './style.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Check if user scrolled more than 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  // Handle the hamburger toggle
  const toggleHamburger = () => {
    setOpen(!open);
  };

  // Close the navbar and reset hamburger state
  const closeNavbar = () => {
    setOpen(false);
  };

  const reload = () => {
    window.reload();
  };

  return (
    <div className={`fixed_Navbar container${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar__main__content">
        <div className="navbar__header__logo">
          <div className="llogo">
            <RouterLink onClick={reload} to="/">
              <img className="logo__img" src={Logo} alt="logo" />
            </RouterLink>
          </div>
          <p className="logo__name">Gen-Z Accountants</p>
        </div>

        {/* Navbar menu */}
        <div className={`Navbar_link ${open && `open`}`} id="Nav_link">
          <ul id="navlink">
            {/* <ScrollLink
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="link"
              onClick={() => {
                closeNavbar(); 
              }}
            >
              Home
            </ScrollLink> */}
            <ScrollLink
              to="About"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="link"
              onClick={() => {
                closeNavbar(); // Close the menu on click
              }}
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="Programs"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="link"
              onClick={() => {
                closeNavbar(); // Close the menu on click
              }}
            >
              Programs
            </ScrollLink>
            <ScrollLink
              to="Mission"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="link"
              onClick={() => {
                closeNavbar(); // Close the menu on click
              }}
            >
              Mission & Vision
            </ScrollLink>
            <ScrollLink
              to="Impact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="link"
              onClick={() => {
                closeNavbar(); // Close the menu on click
              }}
            >
              Impact
            </ScrollLink>
            <ScrollLink
              to="Get"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="link"
              onClick={() => {
                closeNavbar(); // Close the menu on click
              }}
            >
              Get Involved
            </ScrollLink>
            <ScrollLink
              to="Contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="link"
              onClick={() => {
                closeNavbar(); // Close the menu on click
              }}
            >
              Contact Us
            </ScrollLink>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div className="hamburger">
          <label className={`hamburger ${open && `open`}`}>
            <input
              type="checkbox"
              checked={open} // Ensure this is controlled by state
              onChange={toggleHamburger} // Handle state toggling
            />
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
}

export default Navbar;
