import React, { useEffect } from 'react'
import './style.css'
import Info from './info';
// aos
import AOS from "aos";
import "aos/dist/aos.css";

function Impact() {
       useEffect(() => {
            AOS.init();
            AOS.refresh();
        },[]);

    return (
        <div className="impact__main" id='Impact'>
            <div className="impact__container">
                <div className="impact__head">
                    <p className="impact__header">Our Impact</p>
                    <p className="subhead">Our students, fellows and alumni have a huge impact.</p>
                </div>
                <div className="impact__content">
                    <div className="content__header__first_layer">
                        <div className="content__firstlayer"></div>
                            <div className="impact__content__header">   
                                <p className="content__head">Through the Power of</p>
                                <p className="content__main_head">Our Movement</p>
                            </div>
                        </div>
                    <div className="impact__sub_content">
                        <div 
                            className="line one"
                            data-aos="fade-right"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="2500"
                         >
                         </div>

                        <div 
                            className="line two"
                            data-aos="fade-right"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="2500">
                        </div>
                        <div 
                            className="line three"
                            data-aos="fade-right"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="2500">
                        </div>
                        <div 
                            className="impact__sub_content1"
                            data-aos="fade-right"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="2500"
                        >
                            <Info
                                number='3'
                                title='states in Nigeria'
                            />
                        </div>
                        <div 
                            className="impact__sub_content2"
                            data-aos="fade-right"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="2500"
                        >
                            <Info
                                number='20+'
                                title='schools'
                            />
                        </div>
                        <div 
                            className="impact__sub_content3"
                            data-aos="fade-right"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="2500"
                        >
                            <Info
                                number='1000+'
                                title='Finance students'
                            />
                        </div>

                    </div>                    
                </div>
            </div>
        </div>
        
    )
}

export default Impact
