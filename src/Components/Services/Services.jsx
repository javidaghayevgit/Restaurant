import './Services.css'
import { FaCakeCandles } from "react-icons/fa6";
import { SiGotomeeting } from "react-icons/si";
import { GiMeal } from "react-icons/gi";
const Services=()=>{
    return(
        <div className="services section">
            <div className="services_heading">
            <span>Services</span>
            <h2>Catering Services</h2>
            </div>
            <div className="catering_services container">
                <div className="birthday_party">
                    <div className="sticker">
                    <FaCakeCandles />
                    </div>
                </div>
                <div className="business_meetings">
                    <div className="sticker">
                    <SiGotomeeting />
                    </div>
                </div>
                <div className="weding_party">
                    <div className="sticker">
                    <GiMeal />
                    </div>
                </div>
            </div>
            </div>
    )
}
export default Services;