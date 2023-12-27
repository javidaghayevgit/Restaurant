import '../Customers/style.css'
import { useState } from 'react';
import Customer_1 from '../../images/person_1.jpg.webp'
import Customer_2 from '../../images/person_2.jpg.webp'
import Customer_3 from '../../images/person_3.jpg.webp'
const Customers=()=>{
    const [customers, setCustomers] = useState([Customer_1, Customer_2, Customer_3]);
    return(
        <div className='customers'>
            <div className="customers_heading">
            <span>Testimony</span>
            <h2>Happy Customer</h2>
            </div>
            <div className="carousel_customers">
                {
                    
                }
            </div>
        </div>
    )
}
export default Customers;