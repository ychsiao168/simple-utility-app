import React, { useState, useEffect } from "react"
import { FormControl, FormLabel, Box, Grid, Button, Container, Paper } from "@material-ui/core"
import useStyles from "./styles"
import CheckboxGroup from './CheckboxGroup'

const BinConverter = () => {
  // data flow: checkboxes/BinConverterButtons => bitsVal => useEffect

  const [bitsVal, setBitsVal] = useState(0)
  const [binValue, setBinValue] = useState("")
  const [decValue, setDecValue] = useState("")
  const [hexValue, setHexValue] = useState("")
  const [checkedArr, setCheckedArr] = useState(Array(32).fill(false))
  const classes = useStyles()

  useEffect(() => {

    setBitsVal(bitsVal)
    setBinValue(bitsVal.toString(2).toUpperCase().padStart(32, "0"))
    setDecValue(bitsVal.toString(10).toUpperCase().padStart(10, "0"))
    setHexValue(bitsVal.toString(16).toUpperCase().padStart(8, "0"))

  }, [bitsVal])

  const handleCheckboxChange = (event) => {
    const index = Number(event.target.name)
    const newCheckedArr = [...checkedArr]  // clone
    newCheckedArr[index] = !newCheckedArr[index]  // toggle

    // handle checkboxes
    setCheckedArr(newCheckedArr)

    // handle bitsVal
    let newBitsVal = bitsVal
    const val = Math.pow(2, index)
    newCheckedArr[index] ? newBitsVal = bitsVal + val : newBitsVal = bitsVal - val
    setBitsVal(newBitsVal)
  }

  const handleToggle = () => {
    let newBitsVal = 0
    let newCheckedArr = checkedArr.map((x, index) => {
      const tmp = Math.pow(2, index)
      if (!x) newBitsVal += tmp
      return !x
    })

    setBitsVal(newBitsVal)
    setCheckedArr(newCheckedArr)
  }

  const handleRandomize = () => {
    let newBitsVal = 0
    let newCheckedArr = []
    for (let i = 0; i < 32; i++) {
      let random = Math.random() > 0.5 ? true : false
      newCheckedArr.push(random)
      if (random) {
        newBitsVal += Math.pow(2, i)
      }
    }

    setBitsVal(newBitsVal)
    setCheckedArr(newCheckedArr)
  }


  const handleResetAll = () => {
    setBitsVal(0)
    setCheckedArr(Array(32).fill(false))
  }


  const handleCheckAll = () => {
    setBitsVal(0xFFFFFFFF)
    setCheckedArr(Array(32).fill(true))
  }


  const BinConverterInputs = () => {
    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Inputs</FormLabel>
          <CheckboxGroup
            checkedArr={checkedArr.slice(24, 32)}
            handler={handleCheckboxChange}
            base={24}
          />

          <CheckboxGroup
            checkedArr={checkedArr.slice(16, 24)}
            handler={handleCheckboxChange}
            base={16}
          />

          <CheckboxGroup
            checkedArr={checkedArr.slice(8, 16)}
            handler={handleCheckboxChange}
            base={8}
          />

          <CheckboxGroup
            checkedArr={checkedArr.slice(0, 8)}
            handler={handleCheckboxChange}
            base={0}
          />
        </FormControl>
      </Paper>
    )
  }

  const BinConverterOutputs = () => {
    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Outputs</FormLabel>

          <Box component={Paper} fontFamily="Monospace">
            <table align="center">
              <tbody>
                <tr>
                  <td align="center">Bin</td>
                  <td align="center">
                    <input type="text" name="binary24" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right", fontFamily: 'monospace' }}
                      value={binValue.slice(0, 8)} />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td align="center">
                    <input type="text" name="binary16" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right", fontFamily: 'monospace' }}
                      value={binValue.slice(8, 16)} />
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td align="center">
                    <input type="text" name="binary08" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right", fontFamily: 'monospace' }}
                      value={binValue.slice(16, 24)} />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td align="center">
                    <input type="text" name="binary00" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right", fontFamily: 'monospace' }}
                      value={binValue.slice(24, 32)} />
                  </td>
                </tr>
                <tr>
                  <td align="center">Dec</td>
                  <td align="center">
                    <input type="text" name="decimal" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right", fontFamily: 'monospace' }}
                      value={decValue} />
                  </td>
                </tr>
                <tr>
                  <td align="center">Hex</td>
                  <td align="center">
                    <input type="text" name="Hex" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right", fontFamily: 'monospace' }}
                      value={hexValue} />
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
        </FormControl>
      </Paper>
    )
  }

  const BinConverterButtons = () => {
    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Buttons</FormLabel>

          <Grid container justify="center" spacing={1}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" onClick={handleToggle} fullWidth >Toggle</Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" onClick={handleRandomize} fullWidth >Randomize</Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" onClick={handleResetAll} fullWidth>Reset all</Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" onClick={handleCheckAll} fullWidth>Check all</Button>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    )
  }

  return (
    <Container maxWidth="sm">
      <BinConverterInputs />
      <BinConverterOutputs />
      <BinConverterButtons />
    </Container >
  )

}


export default BinConverter
