import './Header.css'
import { Link, NavLink } from 'react-router-dom';
const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
            </div>
            <div className="navbar container">
                <div className="navbar-brand">
                    <a>RestMet</a>
                </div>
                <div className="navbar-collapse">
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/recipes'>
                    Recipes
                </NavLink>
                <NavLink to='/services'>
                    Services
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/news'>
                    News
                </NavLink>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Header;