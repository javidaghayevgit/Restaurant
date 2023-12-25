import './Chefs.css'
import RestaurantOwner from '../../images/chef-4.jpg.webp'
import HeadChef from '../../images/chef-3.jpg.webp'
import ChefAssistant from '../../images/chef-2.jpg.webp'
import Chef from '../../images/chef-1.jpg.webp'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Chefs=()=>{
    return(
        <div className="chefs">
            <div className="chefs_heading">
            <span>Chef</span>
            <h2>Our Master Chef</h2>
            </div>
            <div className="about_chefs container">
                <div className="chef">
                    <img src={RestaurantOwner} alt="" />
                    <h3>John Smooth</h3>
                    <span>Restaurant Owner</span>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="chef_media">
                    <TiSocialTwitter />
                    <TiSocialFacebook />
                    <FaGooglePlusG />
                    <FaInstagram />
                    </div>
                </div>
                <div className="chef">
                    <img src={HeadChef} alt="" />
                    <h3>Rebeca Welson</h3>
                    <span>Head Chef</span>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="chef_media">
                    <TiSocialTwitter />
                    <TiSocialFacebook />
                    <FaGooglePlusG />
                    <FaInstagram />
                    </div>
                </div>
                <div className="chef">
                    <img src={ChefAssistant} alt="" />
                    <h3>Kharl Branyt</h3>
                    <span>Chef</span>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="chef_media">
                    <TiSocialTwitter />
                    <TiSocialFacebook />
                    <FaGooglePlusG />
                    <FaInstagram />
                    </div>
                </div>
                <div className="chef">
                    <img src={Chef} alt="" />
                    <h3>Luke Simon</h3>
                    <span>Chef</span>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="chef_media">
                    <TiSocialTwitter />
                    <TiSocialFacebook />
                    <FaGooglePlusG />
                    <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chefs;