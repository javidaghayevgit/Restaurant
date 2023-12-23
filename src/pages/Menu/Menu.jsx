import './Menu.css'
import menu from '../../MenuBase';
import MenuCard from '../../Components/menuCard/menuCard'

const Menu=()=>{
    return(
        <div className='menu section'>
            <div className="menu_heading">
            <span>Specialties</span>
            <h2>Catering Services</h2>
            </div>
            {
                menu.map((categories)=>{
                    console.log(categories);
                    <MenuCard/>
                })
            }
        </div>
    )
}
export default Menu;