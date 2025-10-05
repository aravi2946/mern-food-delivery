import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'


const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home")
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
    
    const navigate = useNavigate()
    function logout() {
        localStorage.removeItem('Token')
        setToken("")
        navigate("/")
        }
    
    

    return (
        <div className='navbar'>
            <Link to='/'>
                <img src={assets.logo} alt="Tomato" className='logo' />
            </Link>

            <ul className='navbar-menu'>
                <Link to={'/'} onClick={() => setMenu("home")} className= {menu == "home"?"active":""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu == "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile")} className={menu == "mobile" ? "active" : ""}>mobile app</a>
                <a href='#footer' onClick={() => setMenu("contact")} className={menu == "contact" ? "active" : ""}>contact us</a>

            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search_icon" />

                <div className='navbar-basket-icon'>
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="add to cart" />
                        <div className={getTotalCartAmount()==0?"":"dot"}></div>
 
                    </Link> 
                </div>
                {
                    !token ? <button onClick={() => setShowLogin(true)}>Sign in</button> :
                        <div className="navbar-profile">
                            <img src={assets.profile_icon} alt="profile" />
                            <ul className="navbar-profile-dropdown">
                                <li>
                                    <img src={assets.bag_icon} alt="bag" />
                                    <Link to={"/myorders"}>
                                        <p >Orders</p>
                                    </Link>

                                </li>
                                <hr />

                                <li>
                                    <img src={assets.logout_icon} alt="bag" />
                                    <p onClick={logout}>Logout</p>

                                </li>

                            </ul>
                        </div>
                }
               

            </div>




        </div>
    )
}

export default Navbar
