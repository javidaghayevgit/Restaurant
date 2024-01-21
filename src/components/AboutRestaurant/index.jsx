import '../AboutRestaurant/style.css'
import { useState, useEffect } from 'react'
const AboutRestaurant=()=>{
    let [experienced, setExperienced] = useState(18);
    let [menus,setMenus] = useState(100);
    let [staffs,setStaffs] = useState(20)
    let [customers, setCustomers] = useState(15000);
    return(
        <div className="about_restaurant">
            <div className="about_restaurant_heading container">
            <span>About</span>
            <h2>Cafeen Restaurant</h2>
            <p>
            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            </div>
            <div className="about_restaurant_table">
                <div className="table-statistics container">
                    <div className="experienced">
                        <span>{experienced}</span>
                        <p>Years of Experienced</p>
                    </div>
                    <div className='statistics_customers'>
                        <span>{customers}</span>
                        <p>Happy Customers</p>
                    </div>
                    <div className='menus'>
                        <span>{menus}</span>
                        <p>Menus</p>
                    </div>
                    <div className='staffs'>
                        <span>{staffs}</span>
                        <p>Staffs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutRestaurant;

