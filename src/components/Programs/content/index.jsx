import React from 'react'   
import './style.css'

function Content({icon, title, description}) {
    return (
        <div className="content__container">
            <div className="content__icon">
                <img src={icon} alt="icon_img"/>
            </div>
            <div className="content__text">
                <p className="text__title">{title}</p>
                <p className="text__description">{description}</p>
            </div>
        </div>
        
    )
}

export default Content
