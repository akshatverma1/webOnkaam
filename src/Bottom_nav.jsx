import React from 'react';
import { Link } from 'react-router-dom';
import "./Bottom_nav.css"
import "./Bottom_navigation.css"
export default function bnav(){
    return(
        <div className="footerClass">
            <Link to="/ar" className='Icons'><i className="fas fa-vr-cardboard fa-lg"></i>
            <p>AR</p>
            </Link>
            <Link to="/booking" className='Icons'><i className="fas fa-clipboard-list fa-lg"></i>
            <p>Booking</p></Link>
            <Link to="/" className='Icons'>
            <i className="fa-solid fa-house fa-lg"></i>
            <p>Home</p></Link>
            <Link to="/assistant" className='Icons'><i className="fas fa-comment-dots fa-lg"></i>
            <p>Assistant</p></Link>
            <Link to="/account" className='Icons'><i className="fas fa-user-tie fa-lg"></i>
            <p>Account</p></Link>
            </div>
    )
}