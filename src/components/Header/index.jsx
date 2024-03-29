import '../Header/style.css'
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react'
const Header=()=>{
    const [menuBox,setMenuBox] = useState(false)
    function menuIcon(){
        setMenuBox((prevMenuBox) => !prevMenuBox);
    }
    return(
        <div className="header">
            <div className="header_contact">
                <div className='contact-number'>
                <FaPhoneAlt />
                    <span>+ 1235 2355 98</span>
                </div>
                <div className='contact-email'>
                    <IoIosSend />
                    <span>youremail@email.com</span>
                </div>
                <div className='open_hours'>
                    <p>Open hours: Monday-Sunday 8:00AM-9:00PM</p>
                </div>
            </div>
            <div className="navbar">
                <div className="navbar-brand">
                    <a href='/'>Cafeen</a>
                </div>
                <div className="navbar-collapse">
                    <ul>
                        <li>
                <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Home
                </NavLink>
                        </li>
                        <li>
                <NavLink to='/about' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    About
                </NavLink>
                        </li>
                        <li>
                <NavLink to='/menu' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Menu
                </NavLink>
                        </li>
                        <li>
                <NavLink to='/blog' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Blog
                </NavLink>
                        </li>
                        <li>
                <NavLink to='/contact' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Contact
                </NavLink>
                        </li>
                        <li className='book'>
                        <NavLink to='book' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "default" : "default"}>
                    Book a table
                </NavLink>
                        </li>
                    </ul>
                </div>
                    <div onClick={()=>menuIcon()} className='menu_icon'>
                        <IoIosMenu />
                    </div>
            </div>
           {
              menuBox? <div className={`menu_box ${menuBox ? 'active' : ''}`}></div> : null
           }
        </div>
    )
}
export default Header;