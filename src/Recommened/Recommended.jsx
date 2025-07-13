import Button from "../components/Button/Button";
import "./Recommended.css";

const Recommended =({handleButtonClick})=>{
    return(
        <div className="recommended-container">
            <h2 className="recommended-title">Recommended</h2>
            <div>
                <button className="recommended-btn" onClick={handleButtonClick} value="">All Products</button>
                <Button value="Nike" handleButtonClick={handleButtonClick} title="Nike"/>
                <Button value="Adidas" handleButtonClick={handleButtonClick} title="Adidas"/>
                <Button value="Puma" handleButtonClick={handleButtonClick} title="Puma"/>
                <Button value="Vans" handleButtonClick={handleButtonClick} title="Vans"/>
            </div>
        </div>
    )
}

export default Recommended;