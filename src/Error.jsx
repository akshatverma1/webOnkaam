import React from 'react';
import "./Error.css"
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.css';
import DeleteIcon from '@mui/icons-material/Delete';
import SvgIcon from '@mui/material/SvgIcon';
function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  

export default function Errorr(){
    return (
        <div className='errror'>
            <div className='fourerr'>
            <h1>404</h1>
            <Typography></Typography>
            </div>
           
            <h1>OOPS! PAGE NOT FOUND</h1>
            <p>Sorry,the page you're looking for does not exist. if you think something 
                is broken,report a problem.
            </p>
            <button className="btn btn-primary btn-lg">Report</button>
        </div>
    )
}