import React from 'react';
import "./Error.css"

import 'bootstrap/dist/css/bootstrap.css';

export default function Errorr(){
    return (
        <div className='errror'>
            <div className='fourerr'>
            <h1>404</h1>
            </div>
           
            <h1>OOPS! PAGE NOT FOUND</h1>
            <p>Sorry,the page you're looking for does not exist. if you think something 
                is broken,report a problem.
            </p>
            <button class="btn btn-primary btn-lg">Report</button>
        </div>
    )
}