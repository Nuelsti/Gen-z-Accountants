import React from 'react'
import './style.css'
import ImageOne from '../../assets/img/IMG_2318.jpg'
import ImageTwo from '../../assets/img/IMG_2285.jpg'
import Bulletin from '../../assets/img/compassicon.svg'

function Program() {
    return (
        <div className="program" id='Program'>
            <div className="program__header">
                <h2 className='program__header__head'>Program</h2>
                <div className="program__main__cont">
                    <div className="program__content__text">
                        <p className="program__sub__content">
                            Our Career Peering Program guides students through a structured 6-year journey:
                        </p>
                        <ul className="content-cont">
                            <li>  <img src={Bulletin} alt='icon-bulleting' className='bulletin'/> <strong>Year 1: </strong> Onboarding and Introduction to Finance.</li>
                            <li><img src={Bulletin} alt='icon-bulleting' className='bulletin'/><strong>Year 2: </strong> Enhanced Learning Partnerships.</li>
                            <li><img src={Bulletin} alt='icon-bulleting' className='bulletin'/><strong>Year 3: </strong> Exam Preparation and Guidance.</li>
                            <li><img src={Bulletin} alt='icon-bulleting' className='bulletin'/><strong>Year 4: </strong> Professional Certification Training.</li>
                            <li><img src={Bulletin} alt='icon-bulleting' className='bulletin'/><strong>Year 5: </strong> Internships and Job Preparation.</li>
                            <li><img src={Bulletin} alt='icon-bulleting' className='bulletin'/><strong>Year 6: </strong> Further Education Opportunities.</li>
                        </ul>
                    </div>
                    <div className="program__content_img">
                        <img src={ImageOne} alt="program-image" className="program-img" />
                        {/* <img src={ImageTwo} alt="" className="program-image2" /> */}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Program
