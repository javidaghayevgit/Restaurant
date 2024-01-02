import '../Contact/style.css'
import Button from '../../components/Button/index';
import { AiOutlineExclamation } from "react-icons/ai";
import Background from '../../components/Background/index'
import Footer from '../../components/Footer/index'
const Contact=()=>{
    return(
        <div className='contact'>
            <Background
            children={"Contact Us"}
            />
            <div className="contact_info">
            <div className="contact_place">
                <div className="contact_icon">
            <AiOutlineExclamation />
                </div>
                <span>Oops! Something went wrong.</span>
                <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
            </div>
            <div className="contact_form">
                <div className="contact_form_heading">
            <h2>Contact Us</h2>
                </div>
                <form>
                    <div className="form_group">
                        <input type="text" placeholder='Your Name'/>
                    </div>
                    <div className="form_group">
                        <input type="text" placeholder='Email'/>
                    </div>
                    <div className="form_group">
                        <input type="text" placeholder='Subject'/>
                    </div>
                    <div className="form_group">
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    </div>
                </form>
                <div className="form_btn">
                <Button
                color={"orange"}
                size={"lg"}
                >
                    {"Send Message"}
                </Button>
                </div>
            </div>
                </div>
                 <Footer/>
        </div>
    )
}
export default Contact;