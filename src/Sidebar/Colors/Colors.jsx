import React from 'react'
import Input from '../../components/Input/Input';

const Colors = ({hanldeRadioClick}) => {
  return (
      <div>
            <h2 className="sidebar-title">Colors</h2>
            <div className="sidebar-radio-container">
                <Input handleRadioClick={hanldeRadioClick} value="" title="All" name="test3"/>
                <Input handleRadioClick={hanldeRadioClick} value="black" title="Black" color="black" title="Black" name="test3"/>
                <Input handleRadioClick={hanldeRadioClick} value="blue" title="Blue"  color="blue" name="test3"/>
                <Input handleRadioClick={hanldeRadioClick} value="red" title="Red"  color="red" name="test3"/>
                <Input handleRadioClick={hanldeRadioClick} value="green" title="Green" color="green" name="test3"/>
                <Input handleRadioClick={hanldeRadioClick} value="white" title="White"  color="white" name="test3"/>
            </div>
        </div>
  )
}

export default Colors;