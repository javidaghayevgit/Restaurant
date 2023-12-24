import './Menu.css'
import menu from '../../MenuBase';
const Menu=()=>{
    return(
        <div className='menu section'>
            <div className="menu_heading">
            <span>Specialties</span>
            <h2>Catering Services</h2>
            </div>
            {
                menu.map((categories)=>{
                  return  (
                    <menuCard/>
                  )
                })
            }
        </div>
    )
}
export default Menu;