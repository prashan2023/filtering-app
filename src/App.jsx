import Navigation from "./Navigation/Nav";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./Products/Products";
import Recommended from "./Recommened/Recommended";

const App =()=>{
  return(
    <div>
       <Navigation/>
       <Sidebar/>
       <Recommended/>
       <Products/>
    </div>
  )
}

export default App;