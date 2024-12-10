import React from 'react'
import './style.css'
import TeamCat from './Category'
import Image1 from '../../assets/img/Zipporah.png'
import Image2 from '../../assets/img/stephen.png'
import Image3 from '../../assets/img/Onyekachi.png'
import Image4 from '../../assets/img/Nathaniel (2).png'
import Image5 from '../../assets/img/Grant.png'
import Image6 from '../../assets/img/lbessin.png'


function Team() {
    return(
        <div className='team__main__container'>
            <div className='team__content__title'>
                <p className='main__title'>Our Team</p>
                <hr className='line'/>
                {/* <p className="sub__title"></p> */}
            </div>
            <div className="team__content">
                {/* <p className='team__name'> */}
                <div className="team__content_one">
                    <TeamCat 
                        Image = {Image4}
                        name = 'Mr. Nathaniel Okoukoni'
                    />
                </div>
                <div className="team__content_two">
                   <TeamCat 
                        Image = {Image2}
                        name = 'Mr. Stepen Okoukoni'
                    />
                </div>
                <div className='team__content_three'>
                   <TeamCat 
                        Image = {Image3}
                        name = 'Miss Gbaruko Onyekachi'
                    />
                </div>
                <div className= 'team__content_four'>
                    <TeamCat 
                        Image = {Image1}
                        name = 'Miss Zipporah Pam'
                    /> 
                </div>
            </div>
            <div className="team_cont">
          
                <div className='team__content_five'>
                    <TeamCat 
                        Image = {Image5}
                        name= 'Mr. Grant'
                    />

                </div>
                <div className='team__content_six'>
                    <TeamCat 
                        Image = {Image6}
                        name= 'Miss Blessing Ewemade'
                    />

                </div>
            </div>
                
            {/* </div> */}
        </div>

    )

}
export default Team