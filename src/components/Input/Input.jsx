import "./Input.css";
const Input =({handleRadioClick,value,name,title,color})=>{
    console.log(value);
    return(
        <div>
            <label className="sidebar-label-container">
                <input onChange={handleRadioClick} value={value} type="radio" name={name} />
                <span  className="checkmark" style={{backgroundColor:color,border:"solid 1px black" }}></span>{title}
            </label>
        </div>
    )
}

export default Input;