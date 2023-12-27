import '../MakeReservation/style.css'
import Button from '../Button';
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380.67506517814167!2d-74.00283794365154!3d40.7342093763366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259944267a79f%3A0xbccc191d636273a9!2sBobo!5e0!3m2!1saz!2saz!4v1703513967511!5m2!1saz!2saz"></iframe>
            </div>
        </div>
    )
}
export default MakeReservation;