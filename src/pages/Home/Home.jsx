import './Home.css'
import Button from '../../Components/Button/Button'
import AboutRestaurant from '../../Components/AboutRestaurant/AboutRestaurant'
import Services from '../../Components/Services/Services'
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
        </div>
    )
}


export default Home;