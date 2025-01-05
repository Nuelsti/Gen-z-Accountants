import React from 'react'
import './style.css'
// import Swipper from './Swipper/index.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import {Link} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/pagination';
import Img1 from '../../assets/img/ima2.jpg'
import Img2 from '../../assets/img/back2.jpg'
import Img3 from '../../assets/img/baks (2).jpg'

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
      ]
    
      const heroInfo = [
        {
          id: 1,
          title: 'Become a ',
          styletitle: 'Partner',
          description: 'Collaborate on training programs to foster a sustainable workforce',
          button: 'Join Here',
          link: '',
          style : styles[0],
        },
        {
          id: 2,
          title: 'Become A ',
          styletitle: 'Volunteer',
          description: 'To build skills, mentorship connections, and career opportunities.',
          button: 'Become a Fellow',
          link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oHgFFhUQUhGMkZORzFYMEQ4SDNGUUlMUVRQTUxBUi4u',
          style : styles[1],
        },
        {
          id: 3,
          title: 'Become a ',
          styletitle: 'Corporate Partner',
          description: 'To provide scholarships and impactful internship opportunities.',
          button: 'Donate',
          link:'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oHgFFhURENNWEg5SEdUTkVBUDdZV09RVjI0VFNZMi4u',
          style : styles[2],
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
                    <div className="header__main" id='Hero' style={item.style}>
                        <div className="header__main__left">
                            <div className="header__main__display">
                                <div className="header__main-text">
                                    <div className="slider-text-content">
                                        <p className="slider-text-head">
                                            {item.title} <span className="style-head">{item.styletitle}</span>
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
