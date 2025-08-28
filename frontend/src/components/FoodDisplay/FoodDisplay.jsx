import { useContext } from "react"
import "./FoodDisplay.css"
import { foodContext } from "../../context/foodContext"
import FoodItem from "../FoodItem/FoodItem"

const FoodDisplay = () => {
    const { food_list } = useContext(foodContext)
    

    return (
      
      <div className="food-display">
          <h2>Top dishes near you</h2>
          <div className="food-display-list">
              {
                  food_list.map((item,index) => {
                    return  <FoodItem key={index}
                          id={item._id}
                          name={item.name}
                          image={item.image}
                          price={item.price}
                          description = {item.description}
                      />
                  })
              }
          </div>
          
     
    </div>
  )
}

export default FoodDisplay
