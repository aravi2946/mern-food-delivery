import { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css"
import { foodContext } from "../../context/foodContext"

const Navbar = ({setShowLogin}) => {
    const [state, setState] = useState("home")
    const { cartItems } = useContext(foodContext)
    let len = Object.keys(cartItems).length;
    const navigate = useNavigate()
    
  return (
      <div className="navbar">
          
              <img src={assets.logo} alt="" className="logo" />
         
          <ul className="navbar-list">
              <Link to={"/"} onClick={() => setState("home")} className={state=="home"?"active":""}>Home</Link>
              <a href="#explore" onClick={() => setState("menu")} className={state == "menu" ? "active" : ""}>Menu</a>
              <a href="#app-img" onClick={() => setState("mobile")} className={state == "mobile" ? "active" : ""}>Mobile App</a>
              <a href="#footer" onClick={() => setState("contact")} className={state == "contact" ? "active" : ""}>Contact Us</a>
              
          </ul>
          <div className="navbar-right">
              <img src={assets.search_icon} alt="" className="search"/>
              <div className="navbar-right-cart">
                  <img onClick={()=>navigate('/cart') } src={assets.basket_icon} alt="" />
                  <div className={len>0?"dot":""}>{len>0?len:""}</div>
              </div>

                  <button onClick={() => setShowLogin(prev => !prev)}>Sign in</button>
            
          </div>
          
          
     </div>
  )
}

export default Navbar
