import React from 'react'
import './style.css'

function Hero() {
    return (
        <div className="header__main" id='Hero'>
            <div className="header__main__display">
                <div className="header__main-text">
                    <h1 className="header__main__head">
                        Shaping the Next Generation of Finance Leaders in Nigeria
                    </h1>
                    <p className="header__subtext">
                        Join our 6-year Career Fellowship and unlock opportuinities for skills, ethics and jobs.
                    </p>
                    <button className="call__to__action__btn">Learn More</button>
                </div>
            </div>
        </div>

        
    )
}

export default Hero
