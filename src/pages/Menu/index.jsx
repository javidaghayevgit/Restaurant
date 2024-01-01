import '../Menu/style.css'
import menu from '../../data/menu';
import MenuCard from '../../components/MenuCategory'
import Background from '../../components/Background';
import MakeReservation from '../../components/MakeReservation/index';
import Footer from '../../components/Footer/index'
const MenuPage=()=>{
    return(
        <div className='menu'>
          <Background
            children={"Menu"}
            />
            <div className="menu_our">
              
            <div className="menu_heading">
            <span>Specialties</span>
            <h2>Our Menu</h2>
            </div>
            <div className='menu_section'>
            {
              menu.map((category)=>{
                return  (
                  <MenuCard
                  category={category.category}
                  meals={category.meals}
                  key={category.id}
                  />
                  )
                })
              }
              </div>
                  </div>
                  <MakeReservation/>
                  <Footer/>
        </div>
    )
}
export default MenuPage;