import React, {useState}from 'react'
import './style.css'
import Content from './content'
import Icon1 from '../../assets/img/handshake.svg'
import Icon2 from '../../assets/img/compassicon.svg'
// 
function Programs() {

    // const [activeIndex, setActiveIndex] = useState(null);

    // const toggleLearnMore = (index) => {
    //     setActiveIndex(activeIndex === index ? null : index);
    // };

    // const moreContent = [
    //     { 
    //         head: "What is VelmozaEats?", 
    //         answer: " answer" 
    //     },
    //     { 
    //         head: "Is Velmoza available in every state?", 
    //         answer: " " 
    //     },
    //     { 
    //         head: "How much can I make monthly?", 
    //         answer: " " 
    //     },
    //     { 
    //         head: "What do I need to get started?", 
    //         answer: " " 
    //     },

    // ];
        
    return (
        <div className="program-container" id='Programs'>
            <div className="program__header">
                <p className="program-header__content">Programs</p>
                <p className="program__subtop">Designed to spark interest and provide direction, these campaigns target students, parents, and educators.</p>
                {/* <hr className='program__line'/>  */}
                <div className="program__main__conent">
                    <div className="program-content1">
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

                    <div className="program-content2">
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
