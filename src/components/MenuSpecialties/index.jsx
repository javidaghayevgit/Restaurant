import '../MenuSpecialties/style.css'
import menu from '../../data/menu';
import MenuCard from '../../components/MenuCategory'
const MenuPage=()=>{
    return(
        <div className='menu_specialties'>
            <div className="menu_specialties_heading">
            <span>Specialties</span>
            <h2>Our Menu</h2>
            </div>
            <div className='menu_specialties_section'>
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
    )
}
export default MenuPage;