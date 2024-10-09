import React from 'react';
import Navbarfunction from './Navbar';
import Footerfunction from './Footer';
import Bottomnavfunction from './Bottom_navigation';
import Servicesfunction from './Services';
import BreakLO from './BreakLine';
import Airfunction from './Aircon';



export default function homepageFunction(){
    return(
        <div>
            <Navbarfunction></Navbarfunction>
            <Servicesfunction></Servicesfunction>
            <Bottomnavfunction></Bottomnavfunction>
            <BreakLO></BreakLO>
            <Airfunction Heading="Repair & Maintenance"></Airfunction>
            <BreakLO></BreakLO>
            <Airfunction Heading="Electrical Services"></Airfunction>
            <Footerfunction></Footerfunction>
        </div>
    )
}
