// import { useState } from "react";
// import { LOGO_URL } from "../utils/constants";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";


// export const Header = () => {
//     const [btnName, setBtnName] = useState('Login');
//     // const arr =  useState('Login');
//     // const btnName = arr[0];
//     // const setBtnName = arr[1]
//     const onlineStatus = useOnlineStatus();
//     return (
//         <div className="flex justify-between bg-[#201f1f]">
//             <div className="logo-container">
//                 <Link to="/"><img className="w-40" src={LOGO_URL} /></Link>
//             </div>
//             <div className="flex items-center justify-center">
//                 <ul className="flex items-center justify-center p-4 m-4 text-lg text-white">
//                     <li className="px-4" >Online Status : {onlineStatus === false ? '🔴' : '🟢'}</li>
//                     <li className="px-4"><Link to="/">Home</Link></li>
//                     <li className="px-4"><Link to="/about">About Us</Link></li>
//                     <li className="px-4"><Link to="/contact">Contact Us</Link></li>
//                     <li className="px-4"><Link to="/cart">Cart</Link></li>
//                     <button className="login-btn px-8 bg-[#ff8300] rounded-md py-2 text-black font-medium"
//                         onClick={() => {
//                             btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
//                         }}
//                     >{btnName}</button>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Header;  

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-[#201f1f] p-4">
            <div className="logo-container">
                <Link to="/">
                    <img className="w-40" src={LOGO_URL} alt="Logo" />
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex items-center justify-center p-4 m-4 text-lg text-white">
                    <li className="px-4">Online Status: {onlineStatus === false ? '🔴' : '🟢'}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/cart">Cart</Link></li>
                    <button
                        className={`login-btn px-8 ${btnName === 'Login' ? 'bg-[#ff8300]' : 'bg-red-500'} rounded-md py-2 text-white font-medium`}
                        onClick={() => setBtnName((prev) => (prev === 'Login' ? 'Logout' : 'Login'))}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
