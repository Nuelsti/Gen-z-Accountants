import React, {useState} from 'react'
import './style.css'
import Image1 from '../../assets/img/image1 (2).jpg'
import Image2 from '../../assets/img/image2.jpg'
import Image3 from '../../assets/img/newwork1.jpg'
// import SponsorPopUp from './sponsorpopup';


function Getinvolved() {
    const[isOpen, setIsOpen] = useState(false);
    // const[sponsorName, setSponsorName] = useState('')

    // const handleInputChange = (e) =>{
    //     setSponsorName(e.target.value)
    // }

    const togglePopUp = ()=>{
        setIsOpen(!isOpen);
    };

    return (
        <div className="getinvolved__main" id="Get">
            <div className="get__involved_title">
                <p className='getinvolved__title'>Get Involved</p>
                <p className="getinvolved__subtitle">Make a Difference Today</p>
                <div className="get-involved-sub">
                    <p className="get-involved-submain">Your Support Can Shape Futures</p>
                    <p className="get-involvved-subcomp">Join hands with us to nurture the next generation of skilled finance professionals in Nigeria. Whether you’re a student, mentor, sponsor, or volunteer, there’s a role for everyone!</p>
                </div>
            </div>
            <div className="getinvolved__content">
                    <div className="getinvolved__one-content first">
                        <div className="getinvolved_text">
                            <h2 className="getinvolved_name">For Student</h2>
                            <p className="getinvolved__sub-title">Start Your Journey:</p>
                            <p className="getinvolved__para">Join our 6-year fellowship to gain mentorship, professional skills, and career opportunities.</p>
                            <p className="getinvolved_sec_para">Access exclusive workshops, internships, and guidance from industry leaders.</p>
                            <button className="call__to__action stud">Apply Now</button>
                        </div>
                        <div className="getinvolved-img">
                            {/* insert an image1 */}
                            <img className="image_get" src ={Image1} alt='img' />
                        </div>
                    </div>
                    <div className="getinvolved__one-content third">
                    <div className="getinvolved-img">
                            {/* insert an image1 */}
                            <img className="image_get" src ={Image2} alt='img' />
                        </div>
                        <div className="getinvolved_text">
                            <h2 className="getinvolved_name"> For Sponsors and Donors</h2>
                            <p className="getinvolved__sub-title">Empower Young Minds:</p>
                            <p className="getinvolved__para">Fund impactful initiatives like inter-school campaigns and annual conferences.</p>
                            <p className="getinvolved_sec_para">Partner with us to create scholarships and internship opportunities.</p>
                            <button className="call__to__action spons" onClick={togglePopUp}>Sponsor a Program</button>
                            {isOpen && (
                                <>
                                    <div className="sponsorpopup_main_head">
                                        <div className="popup_box">
                                            <h2>Sponsorship Details</h2>
                                            {/* <p>
                                                Enter your name below to view the account details for supporting
                                                our programs.
                                            </p> */}

                                            {/* Input Field */}
                                            {/* <input
                                                type="text"
                                                placeholder="Enter your name"
                                                value={sponsorName}
                                                onChange={handleInputChange}
                                                className="input-field"
                                            /> */}
{/* 
                                            {sponsorName && ( */}
                                            <div className="account-details">
                                                {/* <p>Thank you, <strong>{sponsorName}</strong>!</p> */}
                                                <p>
                                                <strong>Bank Name:</strong> XYZ Bank<br />
                                                <strong>Account Number:</strong> 1234567890<br />
                                                <strong>Account Name:</strong> Gen-Z Accountants NGO
                                                </p>
                                            </div>
                                        {/* )} */}
                                        <button onClick={togglePopUp} className="close-button">
                                        Close
                                    </button>   
                                    </div>
                                    </div>                                                                 
                                </>
                            )}
                            
                        </div>
                    </div>
                    <div className="getinvolved__one-content fourt">
                        <div className="getinvolved_text">
                            <h2 className="getinvolved_name">For Volunteers</h2>
                            <p className="getinvolved__sub-title">Share Your Expertise:</p>
                            <p className="getinvolved__para">Mentor aspiring accountants and share your knowledge.                            </p>
                            <p className="getinvolved_sec_para">Host workshops or contribute to skill-building programs.                           </p>
                            <button className="call__to__action volu">Become a Mentor</button>
                        </div> 
                        <div className="getinvolved-img">                            
                            <img className="image_get" src ={Image3} alt='img' /> 
                        </div>
                    </div>
                    <div className="getinvolved__one-content fourt">
                        <div className="getinvolved-img">                            
                            <img className="image_get" src ={Image2} alt='img' /> 
                        </div>
                        <div className="getinvolved_text">
                            <h2 className="getinvolved_name">Corporate Partnerships</h2>
                            <p className="getinvolved__sub-title">Join Us in Building Careers:</p>
                            <p className="getinvolved__para">Recruit from our pool of skilled fellows trained in professional ethics and finance.                            </p>
                            <p className="getinvolved_sec_para">Collaborate on training programs to foster a sustainable workforce.                           </p>
                            <button className="call__to__action corp">Partner with Us</button>
                        </div> 
                    </div>                    
            </div>
            <div className="get-involved__conclude">
                <p className="conclude-head"><span className="little">Together,</span> We Can Make a Difference</p>
                <p className="conclude-sub_text">Every contribution, big or small, helps us empower Nigeria’s youth and create a brighter future. Let’s shape lives, build careers, and transform communities.</p>
            </div>
        </div>
        
    )
}

export default Getinvolved
