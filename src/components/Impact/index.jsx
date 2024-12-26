import React from 'react'
import './style.css'
import Info from './info';

function Impact() {
    // const impactInformation = [
    //     {

            
    //         title: 'states in Nigeria',
    //     },
    //     {

    //         number: '20+',
    //         title: 'schools',

    //     },
    //     {
    
    //         number: '1000+',
    //         title: 'Finance students'
    //     }
    // ];
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
                        <div className="line one"></div>
                        <div className="line two"></div>
                        <div className="line three"></div>
                        <div className="impact__sub_content1">
                            <Info
                                number='3'
                                title='states in Nigeria'
                            />
                        </div>
                        <div className="impact__sub_content2">
                            <Info
                                number='20+'
                                title='schools'
                            />
                        </div>
                        <div className="impact__sub_content3">
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
