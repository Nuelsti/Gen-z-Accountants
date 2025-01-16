import React, {useEffect} from 'react'
import './style.css'
import { Display } from './display'
import image1 from '../../assets/img/IMG_2318.jpg'
import image2 from '../../assets/img/VISION.jpg'
import image3 from '../../assets/img/IMG_2256.jpg'
import image04 from '../../assets/img/mission.jpg'
import icon001 from '../../assets/img/closeup-shot-waving-flag-nigeria-with-interesting-textures.jpg'
// aos
import AOS from "aos";
import "aos/dist/aos.css";



function MissionVision() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[]);

    const stylesArray = [
        {
            background: "#DBE5FF", 
            color: "#ffff", 
            fontWeight: '600',
            backgroundImage: `url(${image04})`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: "inset 0px -150px 250px 5px rgb(1, 1, 18)",

        },
        {
            background: "#DBE5FF", 
            color: "#ffff", 
            fontWeight: '600',
            backgroundImage: `url(${image2})`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: "inset 0px -150px 250px 5px rgb(1, 1, 18)",

        },
        {
            background: "#F5DBDB", 
            color: "#ffff",
            backgroundImage: `url(${image1})`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: "inset 0px -150px 200px 5px  rgb(1, 1, 18)",
            fontWeight: '600',
        },
        {
            background: "#DBF2F1", 
            color: "#ffff",
            backgroundImage: `url(${image3})`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: "inset 0px -150px 200px 5px  rgb(1, 1, 18)",
            fontWeight: '600',
        },
    ]

    const style1 = stylesArray[0];
    const style2 = stylesArray[1];
    const style3 = stylesArray[2];
    const style4 = stylesArray[3];

    return (
        <div className="mission__vision__main">
            <div className="mission__vision__main__left">
                <div 
                className="mission___content"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                >
                    <div className="mission__content-one">
                    <h2 className='text__content-con'>Our Mission</h2>
                        <Display 
                            Icon={icon001}
                            style={style1}
                            title="Guiding Finance Aspirants"
                            description="To guide and support young aspiring finance professionals in Nigeria through skill development, ethical training, and job placement opportunities."
                        />
                    </div>
                    <div className="mission__content-two" style={{marginTop:'20px'}}>
                    <h2 className='text__content-con'>Our Vision</h2>
                        <Display 
                            // iconImg={}
                            style={style2}
                            title="Gen-Z Finance Club"
                            description="To create a future where every Network of Professional finance aspirants has the support and resources needed to build a successful career."
                        />
                    </div>
                </div>
            </div>

        
        </div>
        
    )
}

export default MissionVision
