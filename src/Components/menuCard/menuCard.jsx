import './menuCard.css'
const menuCard=({categories})=>{
    return(
        <div className='menuCard'>
            {categories.map((category)=>{
                console.log(category);
            })
            }
        </div>
    )
}
export default menuCard;