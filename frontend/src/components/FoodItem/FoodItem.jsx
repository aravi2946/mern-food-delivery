import { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import "./FoodItem.css"
import { foodContext } from "../../context/foodContext"

const FoodItem = ({ id, name, image, price, description }) => {
  const { addToCart,
    removeFromCart,
    cartItems,
    setCartItems } = useContext(foodContext)
  return (
    <div className="food-item">
      <div className="food-item-img-container">

        <img src={image} alt="" className="food-item-img" />

        {
          !cartItems[id] ? 
            <img src={assets.add_icon_white} alt="" className="add" onClick={() => addToCart(id)}/>
            : <div className="food-item-counter">
              <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)} />
              <p>{cartItems[id]}</p>
              <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)} />
            </div>
         }
        

      </div>

      <div className="food-item-info">

        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <div className="food-item-description-price">

          <p>{description}</p>
          <p className="price">${price}</p>
        </div>
      </div>

    </div>
  )
}

export default FoodItem
