import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
      <div className='footer' id='footer'>
          <div className="footer-content">
              <div className="footer-content-left">
                  <img src={assets.logo} alt="Tomato" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorum pariatur modi, delectus nobis voluptatibus soeum fuga magnam provident possimus </p>
                  <div className="footer-social-icons">
                      <img src={assets.facebook_icon} alt="facebook" />
                      <img src={assets.twitter_icon} alt="twitter" />
                      <img src={assets.linkedin_icon} alt="linked" />
                  </div>
                  
              </div>
              <div className="footer-content-center">
                  <h2>Company</h2>
                  <ul>
                      <li>Home</li>
                      <li>About us</li>
                      <li>Delivery </li>
                      <li>Privacy Policy</li>
                  </ul>
                  
              </div>
              <div className="footer-content-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>+91 9876543210</li>
                    <li>contact@tomato.com</li>
                  </ul>
                  
              </div>
          </div>
          
          <hr />
          <div className="footer-copyright">
              <p>Copyright 2025 © Tomato.com - All Rights Reserved.</p>
          </div>
    </div>
  )
}

export default Footer
