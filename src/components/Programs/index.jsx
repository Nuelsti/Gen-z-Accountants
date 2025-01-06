import React, {useState, useEffect}from 'react'
import './style.css'
import Content from './content'
import Icon1 from '../../assets/img/handshake.svg'
import Icon2 from '../../assets/img/compassicon.svg'
// aos
import AOS from "aos";
import "aos/dist/aos.css";
function Programs() {
       useEffect(() => {
            AOS.init();
            AOS.refresh();
        },[]);
    
    return (
        <div className="program-container" id='Programs'>
            <div className="program__header">
                <p className="program-header__content">Programs</p>
                <p className="program__subtop">Designed to spark interest and provide direction, these campaigns target students, parents, and educators.</p>
                {/* <hr className='program__line'/>  */}
                <div className="program__main__conent">
                    <div 
                    className="program-content1"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    >
                    {/* <hr /> */}
                        <Content 
                            icon={Icon1}
                            title= 'Year 1'    
                            description='Onboarding and Introduction to Finance'
                        />
                         <hr />
                        <Content 
                            icon={Icon2}
                            title= 'Year 2'    
                            description='Enhanced Learning Partnerships'
                        />
                         <hr />
                        <Content 
                            icon={Icon2}
                            title= 'Year 3'    
                            description='Exam Preparation and Guidance'
                        />
                         <hr />
                    </div>

                    <div 
                    className="program-content2"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    >
                    {/* <hr /> */}
                        <Content 
                            icon={Icon1}
                            title= 'Year 4'    
                            description='Professional Certification Training'
                        />
                         <hr />
                        <Content 
                            icon={Icon2}
                            title= 'Year 5'    
                            description=' Internships and Job Preparation'
                        />
                         <hr />
                        <Content 
                            icon={Icon2}
                            title= 'Year 6'   
                            description='Further Education Opportunities'
                        />
                         <hr />
                    </div>


                </div>

            </div>
        </div>

        
    )
}

export default Programs
