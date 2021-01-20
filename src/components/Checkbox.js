import React from 'react'

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <label>
    {label}
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
    />
  </label>
)

export default Checkbox