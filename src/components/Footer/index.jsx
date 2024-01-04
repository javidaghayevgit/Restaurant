import '../Footer/style.css'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import Button from '../Button';
import Instagram_1 from '../../assets/images/about/insta-1.jpg.webp'
import { Link } from 'react-router-dom'
const Footer=()=>{
    return(
        <footer>
            <div className="footer_brand">
                <h3>Aggetizer</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="footer_brand_media">
                    <div>
                        <Link to={"#"} className='icon'>
                <TiSocialTwitter />
                        </Link>
                    </div>
                    <div>
                    <Link to={"#"} className='icon'>
                    <TiSocialFacebook />
                    </Link>
                    </div>
                    <div>
                    <Link to={"#"} className='icon'>
                    <FaInstagram />
                    </Link>
                    </div>
                </div>
            </div>
            <div className="footer_open_hours">
                <h3>Open Hours</h3>
                <ul>
                    <li>
                        <span>Monday</span>
                        <span>9:00 - 24:00</span>
                    </li>
                    <li>
                        <span>Tuesday</span>
                        <span>9:00 - 24:00</span>
                    </li>
                    <li>
                        <span>Wednesday</span>
                        <span>9:00 - 24:00</span>
                    </li>
                    <li>
                        <span>Thursday</span>
                        <span>9:00 - 24:00</span>
                    </li>
                    <li>
                        <span>Friday</span>
                        <span>9:00 - 02:00</span>
                    </li>
                    <li>
                        <span>Saturday</span>
                        <span>9:00 - 02:00</span>
                    </li>
                    <li>
                        <span>Sunday</span>
                        <span>9:00 - 02:00</span>
                    </li>
                </ul>
            </div>
            <div className="newsletter">
                <h3>Newsletter</h3>
                <p>Far far away, behind the word mountains, far from the countries.</p>
                    <input type="text" placeholder='Enter email address'/>
                    <Button
                    color={"orange"}
                    size={"lg"}
                    >
                        {"Subscribe"}
                    </Button>
            </div>
            <div className="instagram_photos">
                <h3>Instagram</h3>
                <img src={Instagram_1} alt="" />
            </div>
        </footer>
    )
}
export default Footer;