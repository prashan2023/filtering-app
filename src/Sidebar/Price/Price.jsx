import React from 'react';
import Input from '../../components/Input/Input';

const Price = ({hanldeRadioClick}) => {
  return (
       <div>
            <h2 className="sidebar-title">Price</h2>
            <div className="sidebar-radio-container">
                <Input handleRadioClick={hanldeRadioClick} value="" title="All" name="test2"/>
                <Input handleRadioClick={hanldeRadioClick} value={50} title="$0-50" name="test2"/>
                <Input handleRadioClick={hanldeRadioClick} value={100} title="$50-100" name="test2"/>
                <Input handleRadioClick={hanldeRadioClick} value={150} title="$100-150" name="test2"/>
                <Input handleRadioClick={hanldeRadioClick} value={200} title="Over $150" name="test2"/>
            </div>
        </div>
  )
}

export default Price;