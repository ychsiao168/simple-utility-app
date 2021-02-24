import React from 'react'
import Checkbox from './Checkbox'

const CheckboxGroup = ({ checkedArr, handler, base }) => {
  const checkboxArr = checkedArr.map((checked, index) => {
    return <Checkbox
      label={(base + index).toString(10).padStart(2, "0")}
      isSelected={checked}
      onCheckboxChange={handler}
      key={(base + index).toString(10).padStart(2, "0")}
    />
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center' }}>
      {checkboxArr}
    </div>
  );
}

export default CheckboxGroup