import '../Background/style.css'
const Background=({children})=>{
    return(
        <div className='background'>
            <div className="background_overlay"></div>
            <h1>
            {children}</h1>
            </div>
    )
}
export default Background;