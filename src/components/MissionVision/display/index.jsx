import React, { useState, useEffect }from 'react';
import './style.css';

export const Display= ({style, title, description}) => {    
    // const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

    // const stylesArray = [
    //     {background: "#DBE5FF", color: "#0049FF"},
    //     {background: "#F5DBDB", color: "#B80000"},
    //     {background: "#DBF2F1", color: "#00A69B"},
    // ]

    // const handleStyleChange = () =>{
    //     // setColor(e.target.value)
    //     setCurrentStyle((prevstyle) => (prevstyle + 1) %styleArray.length);
    // };
    // console.log('icon:', Icon)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setCurrentStyleIndex((prevIndex) => (prevIndex + 1) % stylesArray.length);
    //     }, 2000); // Change style every 2 seconds
    //     return () => clearInterval(interval); // Cleanup on unmount
    //   }, []);

    return (
        <div className="display" style={style}>

            <div className="display__main">
                {/* <Icon style={{fontSize: '40px', color: '#4CAF50' }}/> */}
                {/* <img src={Icon} alt="icon__img" className="icon__img" /> */}

                <div className="display__content">
                    <h2 className='display__head__content'>{title}</h2>
                    <p className='display__sub__content'>{description}</p>
                </div>
            </div>
        </div>
        
    );
};

