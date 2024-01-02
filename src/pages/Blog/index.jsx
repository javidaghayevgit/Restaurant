import '../Blog/style.css'
import Background from '../../components/Background/index'
import Footer from '../../components/Footer/index'
import blog_1 from '../../assets/images/blog/image_1.jpg.webp'
import blog_2 from '../../assets/images/blog/image_2.jpg.webp'
import blog_3 from '../../assets/images/blog/image_3.jpg.webp'
import blog_4 from '../../assets/images/blog/image_4.jpg.webp'
import blog_5 from '../../assets/images/blog/image_5.jpg.webp'
import blog_6 from '../../assets/images/blog/image_6.jpg.webp'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Blog=()=>{
    return(
        <div className=" blog">
            <Background
            children={"Our Blog"}
            />
            <div className="blog_photos">
                <div className="blog_photos_info">
                    <img src={blog_1} alt="" />
                    <span>June 24, 2019 Admin</span>
                    <h3>Taste the delicious foods in Asia</h3>
                    <a href='#'>Read More</a>
                </div>
                <div className="blog_photos_info">
                    <img src={blog_2} alt="" />
                    <span>June 24, 2019 Admin</span>
                    <h3>Taste the delicious foods in Asia</h3>
                    <a href='#'>Read More</a>
                </div>
                <div className="blog_photos_info">
                    <img src={blog_3} alt="" />
                    <span>June 24, 2019 Admin</span>
                    <h3>Taste the delicious foods in Asia</h3>
                    <a href='#'>Read More</a>
                </div>
                <div className="blog_photos_info">
                    <img src={blog_4} alt="" />
                    <span>June 24, 2019 Admin</span>
                    <h3>Taste the delicious foods in Asia</h3>
                    <a href='#'>Read More</a>
                </div>
                <div className="blog_photos_info">
                    <img src={blog_5} alt="" />
                    <span>June 24, 2019 Admin</span>
                    <h3>Taste the delicious foods in Asia</h3>
                    <a href='#'>Read More</a>
                </div>
                <div className="blog_photos_info">
                    <img src={blog_6} alt="" />
                    <span>June 24, 2019 Admin</span>
                    <h3>Taste the delicious foods in Asia</h3>
                    <a href='#'>Read More</a>
                </div>
                <div className="blog_photos_paginations">
                    <ul>
                        <li>
                            <span><IoIosArrowBack /></span>
                            </li>
                        <li>
                            <span>1</span>
                            </li>
                        <li>
                            <span>2</span>
                            </li>
                        <li>
                            <span>3</span>
                            </li>
                        <li>
                            <span>4</span>
                            </li>
                        <li>
                            <span>5</span>
                            </li>
                        <li>
                            <span><IoIosArrowForward /></span>
                            </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog;