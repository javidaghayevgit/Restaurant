import '../MakeReservation/style.css'
import Button from '../Button';
import { AiOutlineExclamation } from "react-icons/ai";
const MakeReservation=()=>{
    return(
        <div className="make_reservation">
            <div className="reservation_form">
                <div className="form_heading">
                <span>Book a table</span>
            <h2>Make Reservation</h2>
                </div>
                <form>
                    <div className="form_group">
                        <label>Name</label>
                        <input type="text" placeholder='Your Name'/>
                    </div>
                    <div className="form_group">
                        <label>Email</label>
                        <input type="text" placeholder='Email'/>
                    </div>
                    <div className="form_group">
                        <label>Phone</label>
                        <input type="text" placeholder='Phone'/>
                    </div>
                    <div className="form_group">
                        <label>Date</label>
                        <input type="text" placeholder='Date'/>
                    </div>
                    <div className="form_group">
                        <label>Time</label>
                        <input type="text" placeholder='Time'/>
                    </div>
                    <div className="form_group">
                        <label>Person</label>
                        <input type="text" placeholder='Person'/>
                    </div>
                </form>
                <div className="form_btn">
                <Button
                color={"orange"}
                size={"lg"}
                >
                    {"Make a Reservation"}
                </Button>
                </div>
            </div>
            <div className="restaurant_place">
                <div className="restaurant_place_icon">
            <AiOutlineExclamation />
                </div>
                <span>Oops! Something went wrong.</span>
                <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
            </div>
        </div>
    )
}
export default MakeReservation;