import { assets } from "../../assets/assets"
import "./AppImage.css"
const AppImage = () => {
    return (
        <div className="app-img"  id="app-img">
            <p>For Better Experience Download <br />Tomato App</p>
            <div className="app-img-container">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppImage
