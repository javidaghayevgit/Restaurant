import '../Menu/style.css'
import Background from '../../components/Background';
import MakeReservation from '../../components/MakeReservation/index';
import MenuSpecialties from '../../components/MenuSpecialties/index';
import Footer from '../../components/Footer/index'
const MenuPage=()=>{
    return(
        <div className='menu'>
          <Background
            children={"Our Specialties"}
            />
            <MenuSpecialties/>
                  <MakeReservation/>
                  <Footer/>
        </div>
    )
}
export default MenuPage;