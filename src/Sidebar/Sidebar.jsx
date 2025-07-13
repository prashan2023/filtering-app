import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";


const Sidebar =({hanldeRadioClick})=>{
    return(
        <div className="sidebar-container">
            <h2>🛒</h2>
            <div>
                <Category hanldeRadioClick={hanldeRadioClick}/>
                <Price hanldeRadioClick={hanldeRadioClick}/>
                <Colors hanldeRadioClick={hanldeRadioClick}/>
            </div>
        </div>
    )
}

export default Sidebar;