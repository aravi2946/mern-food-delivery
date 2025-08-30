import { createContext, useState } from "react";
import { food_list } from "../assets/assets";


export const foodContext = createContext(null)


function FoodContextState({ children }) {
   const [cartItems,setCartItems] = useState({})
     
  
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({...prev,[itemId]:1}))
    } else {
      setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  
  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
  }
  
  const getTotalFromCart = () => {
    let totalAmount = 0;

    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find(product => product._id == item)
        totalAmount+= itemInfo.price*cartItems[item]

      }
    }
    return totalAmount;
  }
  

  
    const food_module = {
      food_list,
      addToCart,
      removeFromCart,
      cartItems,
      setCartItems,
      getTotalFromCart
    }
    return (
        <foodContext.Provider value={food_module}>{children}</foodContext.Provider>
       
    )
}
export default FoodContextState;