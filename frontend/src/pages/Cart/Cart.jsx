import { useContext } from "react"
import { food_list } from "../../assets/assets"
import "./Cart.css"
import { foodContext } from "../../context/foodContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const { cartItems, getTotalFromCart } = useContext(foodContext)
    const navigate = useNavigate()
    return (
        <div className="cart">
            <div className="cart-container">
                <div className="cart-container-title ">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>

                </div>
                <br />
                <hr />
                {
                    food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div>

                                    <div key={index} className="cart-container-title cart-container-item">
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${cartItems[item._id] * item.price}</p>
                                        <p className="cross">X</p>
                                        <br />
                                    </div>
                                    <hr />
                                </div>

                            )
                        }
                    })
                }

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
                    <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="promocode">
                    <div>

                        <p>If you have a promo code, Enter it here</p>
                    </div>
                    <div className="promocode-inp">
                        <input type="text" placeholder="promocode here" />
                        <button>Submit</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart
