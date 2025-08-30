import { assets } from "../../assets/assets"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content1">
                    <div className="footer-content1-logo">
                        <img src={assets.logo} alt="" />

                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorum pariatur modi, delectus nobis voluptatibus soeum fuga magnam provident possimus</p>

                    <div className="footer-content1-icons">
                        
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content2">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery by</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content3">
                    <h2>GET IN TOUCH</h2>
                    <div className="contact">
                        <p>+91 9876543210</p>
                        <p>contact@tomato.com</p>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copy">Copyright 2025 © Tomato.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer
