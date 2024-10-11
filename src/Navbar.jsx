import React from 'react';
import { useEffect } from "react";
import { useState } from 'react';
import "./Navbar.css"
import BreakLO from './BreakLine';
export default function Navbarfunction() {

    let[apii,setapii] = useState("");
    // let {city} = apii.data.address;
    console.log(apii);
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(pos=>{
            const {latitude, longitude} = pos.coords;
            console.log(latitude, longitude);
            let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            async function apies(){
                try{
                    let appp = await axios.get(url);
                    setapii(appp.data.address);
                    
                }catch(err){
                    console.log(err);
                }
            }
            apies();
        })
    },[])

    return (
        <>
            <div className='location'>
                <div className='headingLocation'>
                <h1>{apii.city_district},{apii.state},{apii.postcode}</h1>
                </div>
                <div className='searchClass'>
                    <input placeholder='  🔍  Search Anything'></input>
                </div>
            </div>
            </>
    )
}