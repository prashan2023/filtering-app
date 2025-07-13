import "./Card.css";
import { CiStar } from "react-icons/ci";
import { IoBagAdd } from "react-icons/io5";

const Card =({img,title,newPrice,prevPrice})=>{
    return(
        <div className="product-card">
            <div>
                <img 
                 className="card-img"
                 src={img} 
                 alt={title}/>
            </div>
            <div className="card-details">
                <h2 className="card-title">{title}</h2>
                <div>
                    <CiStar className="star-icon"/><CiStar className="star-icon"/><CiStar className="star-icon"/><CiStar className="star-icon"/>
                    <span></span> (123reviews)
                </div>  
                <div className="card-price">
                    <div>
                        <del className="price-tag">$ {prevPrice}</del> {newPrice}
                    </div>             
                    <IoBagAdd className="bag-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Card;