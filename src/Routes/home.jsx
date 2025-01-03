import React from 'react'
import Navbar from '../components/Navbar'
// import { useTheme } from './themeprovider'
import Hero from '../components/Hero';
import About from '../components/AboutUs';
import MissionVision from '../components/MissionVision';
// import FellowshipStructure from '../components/FellowshipStructure';
import Programs from '../components/Programs';
import Team from '../components/OurTeam'
import Footer from '../components/footer';
import Impact from '../components/Impact';
import Getinvolved from '../components/Geninvolved';
const Home = () => {
    // const { isDarkMode } = useTheme();
  return (
    <div className="main-container">
        <Navbar/>
        <Hero />
        <About />
        <Programs />
        <MissionVision />
        <Team />
        <Impact />
        <Getinvolved />
        <div className='join-footer'>
        <Footer/>
        </div>   
      
    </div>
  )
}

export default Home
