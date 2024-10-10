import React from 'react';
import "./Services.css";


export default function Servicesfunction() {
    return (
        <div className='servicesClass'>
            <h3>Explore all services</h3>
            <div className='servicesContainer'>
                <div className='serCon'>
                    <div className='ser'>
                        <img src='src/assets/acweb.webp' width="90px" height="50px"></img>
                    </div>
                    <p className='para'>AC Repair &</p>
                    <p className='para'>Service</p>
                </div>

                <div className='serCon'>
                    <div className='ser'>
                        <img src='src/assets/painterrweb.webp' width="90px" height="50px"></img>
                    </div>
                    <p className='para'>Painter</p>
                    <p></p>
                </div>
                <div className='serCon'>
                    <div className='ser'>
                        <img src='src/assets/plumberrweb.webp' width="90px" height="50px"></img>
                    </div>
                    <p className='para'>Plumber</p>
                </div>
                <div className='serCon'>
                    <div className='ser'>
                        <img src='src/assets/electricianweb.webp' width="90px" height="50px"></img>
                    </div>
                    <p className='para'>Electrician</p>
                </div>
                <div className='serCon'>
                    <div className='ser'>
                        <img src='src/assets/cleaningweb.webp' width="90px" height="50px"></img>
                    </div>
                    <p className='para'>Full Home</p>
                    <p className='para'>Deep Cleaning</p>
                </div>
                <div className='serCon'>
                    <div className='ser'>
                        <img src='src/assets/hair.apng' width="90px" height="50px"></img>
                    </div>
                    <p className='para'>Men & Women </p>
                    <p className='para'>Salons</p>
                </div>
            </div>
        </div>
    )
}