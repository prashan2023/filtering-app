 

const Button =({handleButtonClick,value,title})=>{
    console.log(value)
    return(
           <button className="recommended-btn" onClick={handleButtonClick} value={value}>{title}</button>
    )
}
export default Button;