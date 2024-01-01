import Background from '../../components/Background';
import AboutRestaurant from '../../components/AboutRestaurant/index'
import Services from '../../components/Services/index'
import Chefs from '../../components/Chefs/index'
import Customers from '../../components/Customers/index'
import Footer from '../../components/Footer/index'
import '../About/style.css'
const AboutPage=()=>{
    return(
        <div className='about'>
            <Background
            children={"About"}
            />
            <AboutRestaurant/>
            <Services/>
            <Chefs/>
            <Customers/>
            <Footer/>
        </div>
    )
}
export default AboutPage;