import "./Category.css";

const Category =()=>{
    return(
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div className="sidebar-radio-container">
                <label className="sidebar-label-container">
                    <input type="radio" name="test1" />
                    <span  className="checkmark"></span>All
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="test1" />
                    <span  className="checkmark"></span>Sneakers
                </label>
                 <label className="sidebar-label-container">
                    <input type="radio" name="test1" />
                    <span  className="checkmark"></span>Flats
                </label>
                 <label className="sidebar-label-container">
                    <input type="radio" name="test1" />
                    <span  className="checkmark"></span>Sandles
                </label>
                 <label className="sidebar-label-container">
                    <input type="radio" name="test1" />
                    <span className="checkmark"></span>Hells
                </label>
            </div>
        </div>
    )
}

export default Category;