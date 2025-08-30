import { useContext } from "react"
import "./PlaceOrder.css"
import { foodContext } from "../../context/foodContext"

const PlaceOrder = () => {
    const {getTotalFromCart} = useContext(foodContext)
  return (
      <div className="place-order">
          <div className="place-order-left">
              <h2>Delivery Information</h2>
              <div className="input">
                  <input type="text" name="first" placeholder="First Name" />
                  <input type="text" name="last" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email address" name="email" />
              <input type="text" name="street" placeholder="Street"  />
             
              <div className="input">
                  <input type="text" placeholder="City" name="city" />
                  <input type="text" placeholder="State" name="state" />
              </div>
              <div className="input">
                  <input type="text" placeholder="Zip code" name="zipcode" />
                  <input type="text" placeholder="Country" name="country" />
              </div>

              <input type="text" name="phone" placeholder="Phone" />
          </div>

          <div className="cart-bottom">
              <div className="cart-total">
                  <h2>Cart Totals</h2>
                  <div>
                      
                  <div className="cart-total-details">
                      <p>Subtotal</p>
                      <p>${getTotalFromCart() == 0 ? 0 : getTotalFromCart()}</p>
                  </div>
                    <hr />
                  <div className="cart-total-details">

                      <p>Delivery Fee</p>
                      <p>${getTotalFromCart() == 0 ? 0 : 2}</p>
                  </div>
                    <hr />
                  <div className="cart-total-details">

                      <b>Total</b>
                      <b>${getTotalFromCart() == 0 ? 0 : getTotalFromCart() + 2}</b>
                  </div>
                  </div>
                  <button>PROCEED TO PAYMENT</button>
              </div>
             

          </div>
      
    </div>
  )
}

export default PlaceOrder
