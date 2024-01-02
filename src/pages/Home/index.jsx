import '../Home/style.css'
import Button from '../../components/Button'
import AboutRestaurant from '../../components/AboutRestaurant';
import Services from '../../components/Services'
import MenuSpecialties from '../../components/MenuSpecialties/index'
import MakeReservation from '../../components/MakeReservation';
import Footer from '../../components/Footer';
import Chefs from '../../components/Chefs';
import Customers from '../../components/Customers/index';
const HomePage=()=>{
    return(
        <div id="home">
            <div className="slider">
                    <div className="overlay"></div>
                    <div className="slider_text-center">
                <h1>The Best Place To Kick <br /> Of Your Day</h1>
                <div className='slider_btn'>
                <Button
                color={"orange"}
                size={"lg"}
                >
                    {"Order Now"}
                </Button>
                <Button
                color={"tranparent"}
                size={"lg"}
                >
                    {"View Menu"}
                </Button>
                </div>
            </div>
                </div>
                <AboutRestaurant/>
                <Services/>
                <MenuSpecialties/>
                <MakeReservation/>
                <Chefs/>
                <Customers/>
                <Footer/>
        </div>
    )
}
export default HomePage;