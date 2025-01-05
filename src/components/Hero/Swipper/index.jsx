import React, {useState} from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Img1 from '../../../assets/img/ima2.jpg'
// import Img2 from '../../assets/img/'

function Swipper() {
  const styles = [
    {
      backgroundImage: `url(${Img1})`, 
      position: 'relative',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',    
      zIndex: '-1000',
      color: 'white',  
    },  
    {
      backgroundImage: `url(${Img1})`,
      position: 'relative',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      zIndex: '-1000',
    },
    {
      backgroundImage:`url(${Img1})`,
      position: 'relative',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      zIndex: '-1000',
      },
  ]

  const heroInfo = [
    {
      id: 1,
      title: 'Become a ',
      styletitle: 'Partner',
      description: 'Collaborate on training programs to foster a sustainable workforce',
      button: 'Join Here',
      style : styles[0],
    },
    {
      id: 2,
      title: 'Join our ',
      styletitle: 'Fellowship',
      description: 'To build skills, mentorship connections, and career opportunities.',
      button: 'Become a Fellow',
      style : styles[1],
    },
    {
      id: 3,
      title: 'Become a ',
      styletitle: 'Sponsor',
      description: 'To provide scholarships and impactful internship opportunities.',
      button: 'Donate',
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
          <div className="slider-main-head"style={item.style}>
            
            <div className="slider-text-content">
              <p className="slider-text-head">
                {item.title} <span className="style-head">{item.styletitle}</span>
              </p>
              <p className="slider-sub-text">{item.description}</p>
              <div className="slider-sub-btn" onClick={handleToggle}>
                <p className="slider-button">{item.button}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Swipper;
