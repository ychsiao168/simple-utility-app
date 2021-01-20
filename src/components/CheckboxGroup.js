import React from 'react'
import Checkbox from './Checkbox'

const CheckboxGroup = ({ checkedArr, handler }) => {
  const checkboxArr = checkedArr.map((checked, index) => {
    return <Checkbox
      label={index.toString(10).padStart(2, "0")}
      isSelected={checked}
      onCheckboxChange={handler}
      key={index.toString(10).padStart(2, "0")}
    />
  })

  return (
    <div className="f5 flex flex-row-reverse ma1">
      {checkboxArr}
    </div>
  );
}

export default CheckboxGroup