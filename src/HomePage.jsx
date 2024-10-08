import React from 'react';
import Navbarfunction from './Navbar';
import Footerfunction from './Footer';
import Bottomnavfunction from './Bottom_navigation';
import Servicesfunction from './Services';
import BreakLO from './BreakLine';



export default function homepageFunction(){
    return(
        <div>
            <Navbarfunction></Navbarfunction>
            <Servicesfunction></Servicesfunction>
            <Bottomnavfunction></Bottomnavfunction>
            <BreakLO></BreakLO>
        </div>
    )
}
