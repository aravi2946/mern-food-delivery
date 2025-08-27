import { useState } from "react"
import { assets } from "../../assets/assets"
import "./Navbar.css"

const Navbar = () => {
    const [state,setState] = useState("home")
  return (
      <div className="navbar">
          
              <img src={assets.logo} alt="" className="logo" />
         
          <ul className="navbar-list">
              <li onClick={() => setState("home")} className={state=="home"?"active":""}>Home</li>
              <li onClick={() => setState("about")} className={state == "about" ? "active" : ""}>About</li>
              <li onClick={() => setState("mobile")} className={state == "mobile" ? "active" : ""}>Mobile App</li>
              <li onClick={() => setState("contact")} className={state == "contact" ? "active" : ""}>Contact Us</li>
              
          </ul>
          <div className="navbar-right">
              <img src={assets.search_icon} alt="" className="search"/>
              <div className="navbar-right-cart">
                  <img src={assets.basket_icon} alt="" />
                  <div className="dot"></div>
              </div>

                  <button>Sign in</button>
            
          </div>
          
          
     </div>
  )
}

export default Navbar
