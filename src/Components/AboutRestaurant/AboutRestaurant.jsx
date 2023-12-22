import './AboutRestaurant.css'
import { useState, useEffect } from 'react'
const AboutRestaurant=()=>{
    let [experienced, setExperienced] = useState(0);
useEffect(() => {
    if (experienced >= 18) {
        return;
    }

    const interval = setInterval(() => {
        setExperienced(prevExperienced => prevExperienced + 1);
    }, 500);

    return () => clearInterval(interval);
}, [experienced]);
    let [menus,setMenus] = useState(0);
    useEffect(()=>{
        if(menus>=100){
            return;
        }
        const interval = setInterval(()=>{
            setMenus(prevMenus => prevMenus + 1)
        },90)
        return () => clearInterval(interval);
    },[menus])

    let [staffs,setStaffs] = useState(0)
    useEffect(()=>{
        if(staffs>=20){
            return;
        }
        const interval = setInterval(()=>{
            setStaffs(prevStaffs => prevStaffs + 1)
        },450)
        return () => clearInterval(interval)
    },[staffs])

    let [customers, setCustomers] = useState(0);
    useEffect(()=>{
        if(customers>=15000){
            return;
        }
        const interval = setInterval(()=>{
            setCustomers(prevCustomers => prevCustomers + 15)
        },)
        return () => clearInterval(interval)
    },[customers])
    return(
        <div className="about_restaurant">
            <div className="about_restaurant_heading container">
            <span>About</span>
            <h2>Aggetizer Restaurant</h2>
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
                    <div className='customers'>
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

