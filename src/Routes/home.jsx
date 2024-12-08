import React from 'react'
import Navbar from '../components/Navbar'
import { useTheme } from './themeprovider'
import Hero from '../components/Hero';
import About from '../components/AboutUs';
import MissionVision from '../components/MissionVision';
// import FellowshipStructure from '../components/FellowshipStructure';
import Programs from '../components/Programs';

const Home = () => {
    const { isDarkMode } = useTheme();
  return (
    <div className={`main-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar/>
        <Hero />
        <About />
        <MissionVision />

        <Programs />
        <div className='join-footer'>
        {/* <Footer/> */}
        </div>   
      
    </div>
  )
}

export default Home
