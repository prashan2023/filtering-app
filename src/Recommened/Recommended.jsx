import "./Recommended.css";

const Recommended =()=>{
    return(
        <div className="recommended-container">
            <h2 className="recommended-title">Recommended</h2>
            <div>
                <button className="recommended-btn">All Products</button>
                <button className="recommended-btn">Nike</button>
                <button className="recommended-btn">Addidas</button>
                <button className="recommended-btn">Pumas</button>
                <button className="recommended-btn">Heels</button>
            </div>
        </div>
    )
}

export default Recommended;