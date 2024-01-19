import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    // const arr =  useState('Login');
    // const btnName = arr[0];
    // const setBtnName = arr[1]
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login-btn"
                        onClick={() => {
                            btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                        }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;  