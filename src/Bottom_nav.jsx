
import { Link } from 'react-router-dom';
import "./Bottom_nav.css"
import "./Bottom_navigation.css"


let r = false;
function change() {
    r = true;
}
function classchange() {
    r = false;
}



export default function bnav() {


    return (
        <div className="footerClass">
            <Link to="/ar" onClick={change} className='Icons'><i className="fas fa-vr-cardboard fa-lg"></i>
                <p>AR</p>
            </Link>
            <Link to="/booking" onClick={change} className='Icons'><i className="fas fa-clipboard-list fa-lg"></i>
                <p>Booking</p></Link>
            <Link to="/" className='Icons' onClick={classchange}>
                {
                    r == true ? (<i className="fa-solid fa-house-circle-check fa-lg"></i>) : (<i style={{ color: "red" }} className="fa-solid fa-house-circle-check fa-lg"></i>)
                }
                <p>Home</p></Link>
            <Link to="/assistant" onClick={change} className='Icons'><i className="fas fa-comment-dots fa-lg"></i>
                <p>Assistant</p></Link>
            <Link to="/account" onClick={change} className='Icons'><i className="fas fa-user-tie fa-lg"></i>
                <p>Account</p></Link>
        </div>

    )
}