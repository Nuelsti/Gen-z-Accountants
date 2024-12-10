import React from 'react'
import './style.css'

function TeamCat({Image, name}){
    return(
        <div className='Team__main__category'>
            <div className='main__image'>
                <img src= {Image} className='team__image' alt='image_main' />
            </div>
            <div  className= 'team__content_sub'>
                <div className="circ"></div>
                <div className="circ_two"></div>                
                <p className= 'team__name'>{name}</p>        
            </div>
        </div>

    )
}
export default TeamCat