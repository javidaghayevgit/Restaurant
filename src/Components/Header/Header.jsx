import './Header.css'
import { NavLink } from 'react-router-dom';
const Header=()=>{
    return(
        <div className="header">
            <div className="navbar container">
                <div className="navbar-brand">
                    <a href='/'>RestMet</a>
                </div>
                <div className="navbar-collapse">
                <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Home
                </NavLink>
                <NavLink to='/recipes' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Recipes
                </NavLink>
                <NavLink to='/services' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Services
                </NavLink>
                <NavLink to='/about' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    About
                </NavLink>
                <NavLink to='/news' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    News
                </NavLink>
                <NavLink to='/contact' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default"}>
                    Contact
                </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Header;