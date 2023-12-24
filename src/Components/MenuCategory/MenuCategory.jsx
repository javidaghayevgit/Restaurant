import './MenuCategory.css'
const MenuCategory=({category,meals})=>{
    return(
        <div className='menu_category'>
            <div className="category_name">
                <h3>{category}</h3>
                </div>
            <div className='category_cards'>
                {meals.map((meal)=>{
                    console.log(meal);
                    return    <div className='card'>
                            <img src={meal.image} alt="" />
                            <div className="meal_name_and_ingredients">
                                <h3>{meal.name}</h3>
                                <span>{meal.ingredients}</span>
                                </div>
                                <div className="meal_price">
                                    <span>{`$${meal.price}`}</span>
                                    </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default MenuCategory;