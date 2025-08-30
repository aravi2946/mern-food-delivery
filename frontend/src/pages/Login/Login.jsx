import "./Login.css"
import { assets } from "../../assets/assets"
import { useState } from "react"

const Login = ({ setShowLogin }) => {
    const [currState,setCurrState] = useState("Login")
    return (
        <div className="login">

            <form className="form-container">
                <div className="form-title">
                    <p>{currState}</p>
                    <img onClick={() => setShowLogin(prev => !prev)} src={assets.cross_icon} alt="" />
                </div>
                <div className="form-inputs">
                    {
                        currState == "Sign up" ? <input type="text" placeholder="Enter your name" name="name" />:""
                    }
                   
                    <input type="email" placeholder="Enter your email" name="email" />
                    <input type="password" placeholder="Enter your password" name="password" />
                </div>

                <button type="submit">{currState=="Login"?"Login":"Create Account"}</button>
                <div className="terms">
                    <input type="checkbox" />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>

                <p className="end">Already have an account?<span onClick={() => setCurrState(prev => prev=="Login"?"Sign up":"Login")}>{currState=="Login"?"Sign up":"Login here"}</span></p>

            </form>
        </div>
    )
}

export default Login
