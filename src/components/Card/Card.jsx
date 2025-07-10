import "./Card.css";
import { CiStar } from "react-icons/ci";
import { IoBagAdd } from "react-icons/io5";

const Card =()=>{
    return(
        <div className="product-card">
            <div>
                <img 
                 className="card-img"
                 src="https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg"/>
            </div>
            <div className="card-details">
                <h2 className="card-title">Shoe</h2>
                <div>
                    <CiStar className="star-icon"/><CiStar className="star-icon"/><CiStar className="star-icon"/><CiStar className="star-icon"/>
                    <span></span> (123reviews)
                </div>  
                <div className="card-price">
                    <div>
                        <del className="price-tag">$ 400</del> 300
                    </div>             
                    <IoBagAdd className="bag-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Card;