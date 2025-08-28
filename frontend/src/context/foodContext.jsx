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
  
  

  
    const food_module = {
      food_list,
      addToCart,
      removeFromCart,
      cartItems,
      setCartItems
    }
    return (
        <foodContext.Provider value={food_module}>{children}</foodContext.Provider>
       
    )
}
export default FoodContextState;