import React from 'react';
import Navbarfunction from './Navbar';
import Footerfunction from './Footer';
import Bottomnavfunction from './Bottom_navigation';



export default function homepageFunction(){
    return(
        <div>
            <Navbarfunction></Navbarfunction>
            <Bottomnavfunction></Bottomnavfunction>
        </div>
    )
}
