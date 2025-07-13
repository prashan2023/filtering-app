import Navigation from "./Navigation/Nav";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./Products/Products";
import Recommended from "./Recommened/Recommended";
import {MockData} from "./utils/MockData";
import { useState } from "react";
import Card from "./components/Card/Card";
 
 
const App =()=>{
  console.log(MockData)
  const [inputfiltered,setInputfiltered] = useState(null);
  const [selectfiltered,setSelectfiltered] = useState("");

  // input filtered products
  const handleInputChange =(e)=>{
    setInputfiltered(e.target.value);
  };

  // selected ratio input filtered products
  const hanldeRadioClick =(e)=>{
    setSelectfiltered(e.target.value);
  };

  // selected button input filtered products
  const handleButtonClick =(e)=>{
    setSelectfiltered(e.target.value);
  }
  
  // create a function for it
  const filteredProduct =(selectfiltered,inputfiltered,MockData)=>{
     let filterdProducts = MockData;

     if(inputfiltered){
        filterdProducts = MockData.filter((product) => 
        product.title.toLowerCase().includes(inputfiltered.toLowerCase()) );
     }
     if(selectfiltered){
        filterdProducts = MockData.filter(({category,color,title,company,prevPrice,newPrice}) =>
        category===selectfiltered ||
        color===selectfiltered ||
        title===selectfiltered ||
        company===selectfiltered ||
        prevPrice===selectfiltered||
        newPrice===selectfiltered);
     }

    return(
        <div className="product-container">
            {filterdProducts.map(({img,title,newPrice,prevPrice},index) =>(
                <Card img={img} title={title} newPrice={newPrice} prevPrice={prevPrice} key={index}/>
            ))}
        </div>
     )
  };

  const result = filteredProduct(selectfiltered,inputfiltered,MockData);
  
  return(
    <div>
       <Sidebar hanldeRadioClick={hanldeRadioClick}/>
       <Navigation handleInputChange={handleInputChange}/>
       <Recommended handleButtonClick={handleButtonClick}/>
       <Products result={result}/>
    </div>
  )
}

export default App;

 