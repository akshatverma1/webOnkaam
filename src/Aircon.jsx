import React from 'react';
export default function Airfunction(){
    return (
        <div className='servicesClass'>
            <h3 style={{fontSize:"larger",opacity:0.8}}>Repair & Maintenances</h3>
            <div className='servicesContainer'>
                <div className='serCon'>
                <div className='ser'>
                    <img src='src/assets/airconn.svg' width="90px" height="50px"></img>
                </div>
                <p>AC Repair &</p>
                <p>Service</p>
                </div>

                <div className='serCon'>
                <div className='ser'>
                    <img src='src/assets/painterthird.svg' width="90px" height="50px"></img>
                </div>
                <p>Painter</p>
                <p></p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                <img src='src/assets/plumber_third.svg' width="90px" height="50px"></img>
                </div>
                <p>Plumber</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                <img src='src/assets/electrician_s.svg' width="90px" height="50px"></img>
                </div>
                <p>Electrician</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                <img src='src/assets/cleaning.svg' width="90px" height="50px"></img>
                </div>
                <p>Full Home</p>
                <p>Deep Cleaning</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                <img src='src/assets/manhair.svg' width="90px" height="50px"></img>
                </div>
                <p>Men's </p>
                <p>Salons</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                <img src='src/assets/womenhair.svg' width="90px" height="50px"></img>
                </div>
                <p>Women </p>
                <p>Salons</p>
                </div>
            </div>
        </div>
    )
}