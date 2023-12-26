import './Home.css'
import Button from '../../Components/Button/Button'
import AboutRestaurant from '../../Components/AboutRestaurant/AboutRestaurant';
import Services from '../../Components/Services/Services'
import Menu from '../Menu/Menu';
import MakeReservation from '../../Components/MakeReservation/MakeReservation';
import Footer from '../../Components/Footer/Footer';
import Chefs from '../../Components/Chefs/Chefs';
import Customers from '../../Components/Customers/Customers';
const Home=()=>{
    return(
        <div className="home">
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
                <Menu/>
                <MakeReservation/>
                <Chefs/>
                {/* <Customers/> */}
                <Footer/>
        </div>
    )
}


export default Home;