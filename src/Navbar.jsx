import React from 'react';
import "./Navbar.css"
import BreakLO from './BreakLine';
export default function Navbarfunction() {
    return (
        <>
            <div className='location'>
                <div className='headingLocation'>
                <h1>📍 - Saket Nagar, Bhopal</h1>
                </div>
                <div className='searchClass'>
                    <input placeholder='  🔍  Search Anything'></input>
                </div>
            </div>
            </>
    )
}