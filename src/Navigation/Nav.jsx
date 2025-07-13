import "./Nav.css";
import { CiHeart,CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navigation =({handleInputChange})=>{
    console.log(handleInputChange)
    return(
        <div className="nav-container">
            <div>
                <input
                 className="search-input"
                 type="text"
                 placeholder="Enter the search shoes."
                 onChange={handleInputChange}/>
            </div>
            <div>
                <a href="#">
                    <CiHeart className="nav-icons"/>
                </a>
                <a href="#">
                    <CiShoppingCart  className="nav-icons" />
                </a>
                <a href="#">
                    <CiUser  className="nav-icons"/>
                </a>
            </div>
        </div>
    )
}

export default Navigation;