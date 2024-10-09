import React from 'react';
import "./Services.css";


export default function Servicesfunction(){
    return(
        <div className='servicesClass'>
            <h3>Explore all services</h3>
            <div className='servicesContainer'>
                <div className='serCon'>
                <div className='ser'>
                    <img src='src/assets/airconn.svg' width="90px" height="50px"></img>
                </div>
                <p className='para'>AC Repair &</p>
                <p className='para'>Service</p>
                </div>

                <div className='serCon'>
                <div className='ser'>
                    <img src='src/assets/painterthird.svg' width="90px" height="50px"></img>
                </div>
                <p className='para'>Painter</p>
                <p></p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                <img src='src/assets/plumber_third.svg' width="90px" height="50px"></img>
                </div>
                <p className='para'>Plumber</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                <img src='src/assets/electrician_s.svg' width="90px" height="50px"></img>
                </div>
                <p className='para'>Electrician</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                <img src='src/assets/cleaning.svg' width="90px" height="50px"></img>
                </div>
                <p className='para'>Full Home</p>
                <p className='para'>Deep Cleaning</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                <img src='src/assets/manhair.svg' width="90px" height="50px"></img>
                </div>
                <p className='para'>Men's </p>
                <p className='para'>Salons</p>
                </div>
                <div className='serCon'>
                <div className='ser'>
                <img src='src/assets/womenhair.svg' width="90px" height="50px"></img>
                </div>
                <p className='para'>Women </p>
                <p className='para'>Salons</p>
                </div>
            </div>
        </div>
    )
}