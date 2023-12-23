import './Services.css'
import { FaCakeCandles } from "react-icons/fa6";
import { SiGotomeeting } from "react-icons/si";
import { GiMeal } from "react-icons/gi";
const Services=()=>{
    return(
        <div className="services">
            <div className="services_heading">
            <span>Services</span>
            <h2>Catering Services</h2>
            </div>
            <div className="catering_services container">
                <div className="service">
                    <div className="sticker">
                    <FaCakeCandles />
                    </div>
                    <h2>Birthday Party</h2>
                    <p>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </p>
                </div>
                <div className="service">
                    <div className="sticker">
                    <SiGotomeeting />
                    </div>
                    <h2>Business Meetings</h2>
                    <p>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </p>
                </div>
                <div className="service">
                    <div className="sticker">
                    <GiMeal />
                    </div>
                    <h2>Wedding Party</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
            </div>
            </div>
    )
}
export default Services;