import '../Footer/style.css'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import Button from '../Button';
import Instagram_1 from '../../assets/images/about/insta-1.jpg.webp'
import Instagram_2 from '../../assets/images/about/insta-2.jpg.webp'
import Instagram_3 from '../../assets/images/about/insta-3.jpg.webp'
import Instagram_4 from '../../assets/images/about/insta-4.jpg.webp'
import Instagram_5 from '../../assets/images/about/insta-5.jpg.webp'
import Instagram_6 from '../../assets/images/about/insta-6.jpg.webp'
const Footer=()=>{
    return(
        <footer>
            <div className="footer_brand">
                <h3>Aggetizer</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="footer_brand_media">
                <TiSocialTwitter />
                    <TiSocialFacebook />
                    <FaInstagram />
                </div>
            </div>
            <div className="footer_open_hours">
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

            </div>
        </footer>
    )
}
export default Footer;