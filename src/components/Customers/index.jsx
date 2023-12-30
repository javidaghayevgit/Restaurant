import '../Customers/style.css'
import customer_1 from '../../assets/images/about/person_1.jpg.webp'
import customer_2 from '../../assets/images/about/person_2.jpg.webp'
import customer_3 from '../../assets/images/about/person_3.jpg.webp'
const Customers=()=>{
    return(
        <div className='customers'>
            <div className="customers_overlay "></div>
            <div className="customers_heading">
            <span>Testimony</span>
            <h2>Happy Customer</h2>
            </div>
            <div className="carousel_customers container">
                <div className="customer">
                    <img src={customer_1} alt="" />
                    <p>Far far away, behind the word mountains, far from the counties Vokalia and Consonantia, there live the blind texts.</p>
                    <h3>Ian Boner</h3>
                    <span>Customer</span>
                </div>
                <div className="customer">
                    <img src={customer_2} alt="" />
                    <p>Far far away, behind the word mountains, far from the counties Vokalia and Consonantia, there live the blind texts.</p>
                    <h3>Jason McClean</h3>
                    <span>Customer</span>
                </div>
                <div className="customer">
                    <img src={customer_3} alt="" />
                    <p>Far far away, behind the word mountains, far from the counties Vokalia and Consonantia, there live the blind texts.</p>
                    <h3>Mark Stevenson</h3>
                    <span>Customer</span>
                </div>
            </div>
        </div>
    )
}
export default Customers;