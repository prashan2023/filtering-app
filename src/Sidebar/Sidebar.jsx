import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";


const Sidebar =()=>{
    return(
        <div className="sidebar-container">
            <h2>🛒</h2>
            <div>
                <Category/>
                <Price/>
                <Colors/>
            </div>
        </div>
    )
}

export default Sidebar;