import '../Chefs/style.css'
import RestaurantOwner from '../../assets/images/menu/chef-4.jpg.webp'
import HeadChef from '../../assets/images/menu/chef-3.jpg.webp'
import ChefAssistant from '../../assets/images/menu/chef-2.jpg.webp'
import Chef from '../../assets/images/menu/chef-1.jpg.webp'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom'
const Chefs=()=>{
    return(
        <div className="chefs">
                <div className="chefs_heading">
            <span>Chef</span>
            <h2>Our Master Chef</h2>
            </div>
            <div className="about_chefs container">
                <div className="chef">
                    <div className="chef_image">
                    <img src={RestaurantOwner} alt="" />
                    </div>
                    <h3>John Smooth</h3>
                    <span>Restaurant Owner</span>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="chef_media">
                        <Link to={"#"} className='icon'>
                    <TiSocialTwitter />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <TiSocialFacebook />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <FaGooglePlusG />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <FaInstagram />
                        </Link>
                    </div>
                </div>
                <div className="chef">
                    <div className="chef_image">
                    <img src={HeadChef} alt="" />
                    </div>
                    <h3>Rebeca Welson</h3>
                    <span>Head Chef</span>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="chef_media">
                    <Link to={"#"} className='icon'>
                    <TiSocialTwitter />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <TiSocialFacebook />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <FaGooglePlusG />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <FaInstagram />
                        </Link>
                    </div>
                </div>
                <div className="chef">
                    <div className="chef_image">
                    <img src={ChefAssistant} alt="" />
                    </div>
                    <h3>Kharl Branyt</h3>
                    <span>Chef</span>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="chef_media">
                    <Link to={"#"} className='icon'>
                    <TiSocialTwitter />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <TiSocialFacebook />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <FaGooglePlusG />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <FaInstagram />
                        </Link>
                    </div>
                </div>
                <div className="chef">
                    <div className="chef_image">
                    <img src={Chef} alt="" />
                    </div>
                    <h3>Luke Simon</h3>
                    <span>Chef</span>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="chef_media">
                    <Link to={"#"} className='icon'>
                    <TiSocialTwitter />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <TiSocialFacebook />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <FaGooglePlusG />
                        </Link>
                        <Link to={"#"} className='icon'>
                    <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chefs;