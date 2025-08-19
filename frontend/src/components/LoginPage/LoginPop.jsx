
import { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'
import { useEffect } from 'react'
import axios from "axios"
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
const LoginPop = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login")
    const {url,setToken} = useContext(StoreContext)
    
    const [data, setData] = useState({
        name: "",
        email: "",
        password:""
    })

   

    function handleOnchange(e) {

        const name = e.target.name;
        const value = e.target.value;
      setData(data => ({...data,[name]:value}))
    }
    
   async function handleSubmit(e) {
        e.preventDefault()
        let newUrl = url;
        if (currState == "Login") {
            newUrl+= '/api/user/login'
        } else {
            newUrl += '/api/user/register'
        }

       const response = await axios.post(newUrl, data);
       if (response.data.success) {
           setToken(response.data.token)
           localStorage.setItem("Token", response.data.token)
           setShowLogin(false)
       } else {
           alert(response.data.msg)
       }

    }
  return (
      <div className='login-popup'>
          <form className="login-popup-container" onSubmit={handleSubmit}>
              <div className="login-popup-title">
                  <h2>{currState}</h2>
                  <img onClick={() =>setShowLogin(false) } src={assets.cross_icon} alt="" />
              </div>
              <div className="login-popup-inputs">
                  {currState == "Login" ? <></> : <input type="text" name='name' value={data?.name} placeholder='Your Name' onChange={handleOnchange} required />}
                 
                  <input type="email" name='email' value={data?.email} placeholder='Your Email' onChange={handleOnchange} required/>
                  <input type="password" name='password' value={data?.password} placeholder='Password' onChange={handleOnchange}  required/>
              </div>
              <button>{currState == "Sign Up" ? "Create Account" : "Login"}</button>
              
              <div className="login-popup-condition">
                  <input type="checkbox" required />
                  <p>By continuing, i agree to the terms of use & privacy policy</p>
              </div>
              {
                  currState == "Login" ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                      : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
              }
            
              
          </form>
      
    </div>
  )
}

export default LoginPop
