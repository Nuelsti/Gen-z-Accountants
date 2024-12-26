import React from 'react'
import './style.css'

function Info({icon, number, title}) {
    return (
        <div className="sub_content__country">
            <div className="country_icon">{icon}</div>
            <div className="amount__of_states">
                <p className="number">{number}</p>
                <p className="number__sta">{title}</p>
            </div> 
        </div>

        
    )
}

export default Info
