import '../Book/style.css'
import Background from '../../components/Background';
import MakeReservation from '../../components/MakeReservation';
import Footer from '../../components/Footer';
const BookPage=()=>{
    return(
        <div className="book">
            <Background
            children={"Reservation"}
            />
            <MakeReservation/>
            <Footer/>
        </div>
    )
}
export default BookPage;