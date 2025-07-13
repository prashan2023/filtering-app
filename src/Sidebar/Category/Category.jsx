import Input from "../../components/Input/Input";
import "./Category.css";
 

 
const Category =({hanldeRadioClick})=>{
   
    return(
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div className="sidebar-radio-container">
                <Input  value="" handleRadioClick={hanldeRadioClick} title="All" name="test1" /> 
                <Input  value="sneakers" handleRadioClick={hanldeRadioClick} title="Sneakers" name="test1"/>
                <Input value="flats" handleRadioClick={hanldeRadioClick} title="Flats" name="test1" />
                <Input value="sandals" handleRadioClick={hanldeRadioClick} title="Sandles" name="test1" />
                <Input  value="heels" handleRadioClick={hanldeRadioClick} title="Heels" name="test1" />
            </div>
            
        </div>
    )
}

export default Category;