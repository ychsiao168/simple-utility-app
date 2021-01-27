import React from 'react'

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="flex flex-column pa1 items-center">
    <label>{label}</label>
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
    />
  </div>

)

export default Checkbox