import React from 'react'
import Navbar from '../components/Navbar'
// import { useTheme } from './themeprovider'
import Hero from '../components/Hero';
import About from '../components/AboutUs';
import MissionVision from '../components/MissionVision';
// import FellowshipStructure from '../components/FellowshipStructure';
import Programs from '../components/Programs';
import Team from '../components/OurTeam'
const Home = () => {
    // const { isDarkMode } = useTheme();
  return (
    <div className="main-container">
        <Navbar/>
        <Hero />
        <About />
        <MissionVision />
        <Programs />
        <Team />
        <div className='join-footer'>
        {/* <Footer/> */}
        </div>   
      
    </div>
  )
}

export default Home
