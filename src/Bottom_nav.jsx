import React from 'react';
import { Link } from 'react-router-dom';
export default function bnav(){
    return(
        <div className="footerClass">
            <Link to="/ar" className='Icons'><i className="fas fa-vr-cardboard fa-lg"></i>
            <p>AR</p>
            </Link>
            <div className='Icons'><i className="fas fa-clipboard-list fa-lg"></i>
            <p>Booking</p></div>
            <Link to="/" className='Icons'>
                <i className="fas fa-house-user fa-lg"></i>
            <p>Home</p></Link>
            <div className='Icons'><i className="fas fa-comment-dots fa-lg"></i>
            <p>Assistant</p></div>
            <div className='Icons'><i className="fas fa-user-tie fa-lg"></i>
            <p>Account</p></div>
            </div>
    )
}