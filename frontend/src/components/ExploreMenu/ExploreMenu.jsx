import { menu_list } from "../../assets/assets"
import "./ExploreMenu.css"

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="explore-menu" id="explore">
            <div className="explore-menu-content">
                <h2>Explore our menu</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience,one delicious meal at a time.</p>
            </div>

            <div className="explore-menu-list">
                {
                    menu_list.map((item, index) => (
                        <div key={index} className="explore-menu-items"  onClick={() => setCategory(prev => prev == item.menu_name?"All":item.menu_name) }>
                            <img src={item.menu_image} alt="" className={category==item.menu_name?"active":""} />
                            <p>{item.menu_name}</p>
                        </div>

                    ))
                }
            </div>

            <hr />
        </div>
    )
}

export default ExploreMenu
