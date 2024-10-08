import React from 'react';
import "./Services.css";


export default function Servicesfunction(){
    return(
        <div className='servicesClass'>
            <h3>Explore all services</h3>
            <div className='servicesContainer'>
                <div className='serCon'>
                <div className='ser'>
                    {/* <img src='src/assets/homepage_assets/ac.jpg' width="90px" height="50px"></img> */}
                </div>
                <p>AC Repair &</p>
                <p>Service</p>
                </div>


                <div className='serCon'>
                <div className='ser'>
                {/* <img src='src/assets/homepage_assets/plumber.jpg' width="90px" height="90px"></img> */}
                </div>
                <p>Plumber</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                {/* <img src='src/assets/homepage_assets/electrician.jpg' width="90px" height="90px"></img> */}
                </div>
                <p>Electrician</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                {/* <img src='src/assets/homepage_assets/cleaning.jpg' width="90px" height="90px"></img> */}
                </div>
                <p>Full Home</p>
                <p>Deep Cleaning</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                {/* <img src='src/assets/homepage_assets/boyshair.jpg' width="90px" height="90px"></img> */}
                </div>
                <p>Men's </p>
                <p>Salons</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                {/* <img src='src/assets/homepage_assets/girlstwo.jpg' width="90px" height="90px"></img> */}
                </div>
                <p>Women </p>
                <p>Salons</p>
                </div>
            </div>
        </div>
    )
}