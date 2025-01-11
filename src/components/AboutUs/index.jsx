import React, {useEffect} from 'react'
import Image1 from '../../assets/img/IMG_2250.jpg'
import './style.css'
// aos
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[]);

    return (
        <div className="about__main" id="About">
            <div className="about__main__content">
                <div 
                className="about__main__img"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                >
                    {/* <div className="about__background"></div> */}
                    <img src={Image1} alt="" className="about__main__img" />
                    {/* <img src={Image1} alt="" className="main__img2" /> */}

                </div>
                <div 
                className="about__main_text"
                data-aos="fade-up"
                data-aos-duration="3000"
                >
                    {/* <h1 className="about__us__head" style={{fontSize: "4rem", color: '#003366'}}>About Us</h1> */}
                    <div className="about__content">
                        <p className="about__us__sub_head" style={{color: '#003366'}}>Welcome to Gen-Z Accountant</p>
                        <p className="about__us__content">
                            <span className='about__sub__conent'>Gen-Z Accountants </span>, is a Not-for-Profit Organization 
                            dedicated to giving a choice to young finance aspirants to address Career Mismatch and the scarcity
                            of skilled finance professionals in Nigeria, by enlightening and guiding young aspiring finance professionals to develop their skills, professional ethics, and network, and access job opportunities to alleviate unemployment rates in Nigeria.
                            professionals in the country.
                        </p>

                        <p className="about__us__content">
                           Through a Lifelong Fellowship, we provide a <span className="about__sub__conent"> <i>6-year Career Fellowship</i> </span>   
                           Career Peering program to New Entrants in Senior Secondary schools. This would avert the possibility of having
                           Schools drop out from public schools and reduce societal challenges such as cultism and criminal activities linked to youth disenchantment.
                        </p>
                        <p className="about__us__content">
                            Our Career Fellowship is a community of a limitless network of young aspiring finance professionals who support each other for Career Excellence. The Fellowship accelerates the careers of the world’s 
                            top young professionals with a focus on Africa. This fellowship fosters a growth mindset, emphasising continuous learning and personal development.
                            This mindset will empower students to adapt to changing circumstances and confidently seize new opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default About
