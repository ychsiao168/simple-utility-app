import React from 'react'
import { Box } from "@material-ui/core"

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (

  <Box
    fontFamily="Monospace"
    style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '3px',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <label>{label}</label>
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
    />
  </Box>
)

export default Checkbox