import React from 'react'
import './style.css'
import { Display } from './display'
import Icon1 from '../../../src/assets/img/compassicon.svg'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function MissionVision() {
    const stylesArray = [
        {background: "#DBE5FF", color: "#0049FF"},
        {background: "#F5DBDB", color: "#B80000"},
        {background: "#DBF2F1", color: "#00A69B"},
    ]

    const style1 = stylesArray[0];
    const style2 = stylesArray[1];
    const style3 = stylesArray[2];

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

            {/* vision */}
            <div className="mission__vision__main__left">
                <h2 className='text__content-con'>Our Vision</h2>
                <div className="mission___content">
                    <Display 
                    //    icon={} 
                        style={style3}
                        title="Empowering Future Leaders" 
                        description="Creating a community where aspiring professionals thrive."                     />
                    
                    <Display                     
                        style={style1}
                        title="Building Inclusive Opportunities" 
                        description="Ensuring equal opportunities for diverse groups in finance careers." 
                    />
                   
                </div>
            </div>
        </div>
        
    )
}

export default MissionVision
