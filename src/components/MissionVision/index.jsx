import React from 'react'
import './style.css'
import { Display } from './display'
import image1 from '../../assets/img/IMG_2318.jpg'
import image2 from '../../assets/img/IMG_2285.jpg'
import image3 from '../../assets/img/IMG_2256.jpg'
import image04 from '../../assets/img/imaee.jpg'
// import image4 from '../../assets/img/IMG_2345 (1).jpg'
// import { PiX } from 'react-icons/pi'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function MissionVision() {
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
        <div className="mission__vision__main" id='Mission'>
            <div className="mission__vision__main__left">
                <h2 className='text__content-con'>Our Mission</h2>
                <div className="mission___content">
                    <Display 
                        // Icon={Icon1}
                        style={style1}
                        title="Guiding Finance Aspirants"
                        description="Provide career guidance and skill development opportunities for young finance professionals in Nigeria."
                    />
                    <Display 
                        // iconImg={}
                        style={style2}
                        title="Reducing Unemployment"
                        description="Equip aspiring accountants with ethical training and job placement support to alleviate unemployment."
                    />

                </div>
            </div>

        
        </div>
        
    )
}

export default MissionVision
