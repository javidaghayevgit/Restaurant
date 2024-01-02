import '../Blog/style.css'
import Background from '../../components/Background/index'
import Footer from '../../components/Footer/index'
const Blog=()=>{
    return(
        <div className=" blog">
            <Background
            children={"Our Blog"}
            />
            <Footer/>
        </div>
    )
}

export default Blog;