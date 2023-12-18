import './Header.css'
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button'
const Header=()=>{
    return(
        <div className="header">
            <div className="navbar container">
                <div className="navbar-brand">
                    <a href='/'>Aggetizer</a>
                </div>
                <div className="navbar-collapse">
                <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Home
                </NavLink>
                <NavLink to='/about' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    About
                </NavLink>
                <NavLink to='/menu' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Menu
                </NavLink>
                <NavLink to='/blog' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Blog
                </NavLink>
                <NavLink to='/contact' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Contact
                </NavLink>
                <div className='menu_btn'>
                <Button
                >
                    {"Book a Table"}
                </Button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Header;