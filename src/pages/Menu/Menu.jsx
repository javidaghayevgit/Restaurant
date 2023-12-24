import './Menu.css'
import menu from '../../MenuBase';
import MenuCard from '../../Components/MenuCategory/MenuCategory';
const Menu=()=>{
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
export default Menu;