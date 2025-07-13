import "./products.css";
import {MockData} from "../utils/MockData";
import Card from "../components/Card/Card";
const Products =({result})=>{
    return(
        <div className="product-container">
            {result}
        </div>
    )
}

export default Products;