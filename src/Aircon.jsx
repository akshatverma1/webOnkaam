import React from 'react';
import "./Aircon.css";
import { Link } from 'react-router-dom';

export default function Airfunction({Heading}) {
    return (
        <div className='serviceslasstwo'>
            <div className='showClass'>
                <h3 style={{ fontSize: "larger", opacity: 0.8 }}>{Heading}</h3>
                <h4>View All</h4>
            </div>
            <div className='servicesContainertwoo '>
                <div className='objectNameee '>
                    <Link className='re' to="/error" >
                    </Link>
                    <p className='para'>AC Repair &</p>
                    <p className='para'>Service</p>
                </div>
                <div className='objectNameee'>
                <Link className='re' to="/error" >
                </Link>
                    <p className='para' >Refrigerator</p>
                    <p className='para'>Repair</p>
                </div>
                <div className='objectNameee'>
                <Link className='re' to="/error" >
                </Link>
                    <p className='para'>Gas Stove</p>
                    <p className='para'>Repair</p>
                </div>
                <div className='objectNameee'>
                <Link className='re' to="/error" >
                </Link>
                    <p className='para'>Geyser</p>
                    <p className='para'>Repair</p>
                </div>
                <div className='objectNameee'>
                <Link className='re' to="/error" >
                </Link>                    <p className='para'>Microwave</p>
                    <p className='para'>Repair</p>
                </div>
                <div className='objectNameee'>
                <Link className='re' to="/error" >
                </Link>
                    <p className='para'>RO Water</p>
                    <p className='para'>Purifier Repair</p>
                </div>
                <div className='objectNameee'>
                <Link className='re' to="/error" >
                </Link>                    <p className='para'>Washing Machine</p>
                    <p className='para'>Repair</p>
                </div>
                <div className='objectNameee'>
                <Link className='re' to="/error" >
                </Link>
                    <p className='para'>TV Repair</p>
                </div>
                <div className='objectNameee'>
                <Link className='re' to="/error" >
                </Link>
                    <p className='para'>Laptop Repair</p>
                    <p className='para'>&</p>
                    <p className='para'>Service</p>
                </div>
            </div>
        </div>
    )
}