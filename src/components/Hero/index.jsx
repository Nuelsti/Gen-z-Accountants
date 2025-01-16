import React from 'react'
import './style.css'
// import Swipper from './Swipper/index.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import {Link} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/pagination';
import Img1 from '../../assets/img/main-back1.jpg'
import Img2 from '../../assets/img/main-back2.jpg'
import Img3 from '../../assets/img/main-back3.jpg'
import Img4 from '../../assets/img/main-back4.jpg'

function Hero() {
    const styles = [
        {
          backgroundImage: `url(${Img1})`, 
 
        },  
        {
          backgroundImage: `url(${Img2})`,
        },
        {
          backgroundImage:`url(${Img3})`,
        },
        {
          backgroundImage:`url(${Img4})`,
        },
      ]
    
      const heroInfo = [
        {
          id: 1,
          title: 'Become a Corporate Partnership',
          styletitle:  '(Finance Team Building)',
          description: 'To help provide the allowance to the interns assigned from Gen-Z Accounts',
          button: 'Join Here',
          link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oHgFFhURENNWEg5SEdUTkVBUDdZV09RVjI0VFNZMi4u',
          style : styles[0],
        },
        {
          id: 2,
          title: 'Join as A ',
          styletitle: 'Volunteer',
          description: 'To build skills, mentorship connections, and career opportunities.',
          button: 'Become a Volunteer',
          link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oHgFFhUQUhGMkZORzFYMEQ4SDNGUUlMUVRQTUxBUi4u',
          style : styles[1],
        },
        {
          id: 3,
          title: 'Become a ',
          styletitle: 'Fellow',
          description: 'Join our 6-year fellowship to gain mentorship, professional skills, and career opportunities.',
          button: 'Join Us',
          link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oHgFFhUNkcwSTNJV1FGUDdNMUNRU1M4SFlIVVpNUS4u',
          style : styles[2],
        },
        {
          id: 4,
          title: 'Become a Corporate Partner ',
          styletitle: '(C.S.R Projects)',
          description: 'To provide scholarships and impactful internship opportunities.',
          button: 'Partner Here',
          link:'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oHgFFhUREZTREk5U0RON0dETzEzVFkyNVVVTko3Vy4u',
          style : styles[3],
        },
      ];

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-slide every 5 seconds
            onSlideChange={() => console.log('Slide changed')}
            onSwiper={(swiper) => console.log('Swiper initialized', swiper)}
        >
            {heroInfo.map((item) => (
                 <SwiperSlide key={item.id}>
                    <div className="header__main container" id='Hero' style={item.style}>
                        <div className="header__main__left">
                            <div className="header__main__display">
                                <div className="header__main-text">
                                    <div className="slider-text-content">
                                        <p className="slider-text-head">
                                            {item.title} <p className="style-head">{item.styletitle}</p>
                                        </p>
                                        <p className="slider-sub-text">{item.description}</p>
                                        <div className="slider-sub-btn" >
                                            <Link 
                                              to= {item.link} 
                                              target= '_blank' 
                                              className="slider-button"
                                            >
                                            {item.button}
                                            </Link>
                                        </div>
                                    </div>                                                            
                                </div>
                            </div>
                        </div>
                        <div className="line_bar">
                        </div>
                    </div>
                 </SwiperSlide>
            ))}
        </Swiper>

        
    )
}

export default Hero
