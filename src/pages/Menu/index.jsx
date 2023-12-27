import '../Menu/style.css'
import menu from '../../data/MenuBase';
import MenuCard from '../../components/MenuCategory'
const MenuPage=()=>{
    return(
        <div className='menu'>
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
    )
}
export default MenuPage;