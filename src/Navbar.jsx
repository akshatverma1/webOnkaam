import React from 'react';
import "./Navbar.css"
import BreakLO from './BreakLine';
export default function Navbarfunction(){
    return(
        <>
        <div className='searchClass'>
            <input placeholder='  🔍  Search Anything'></input>
        </div>
        <BreakLO></BreakLO>
        </>
    )
}