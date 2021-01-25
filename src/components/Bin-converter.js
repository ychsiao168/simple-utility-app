import React, { useState, useEffect } from "react"
import CheckboxGroup from './CheckboxGroup'

const BinConverter = () => {
  // data flow: checkboxes/buttons => bitsVal => useEffect

  const [bitsVal, setBitsVal] = useState(0)
  const [binValue, setBinValue] = useState("")
  const [decValue, setDecValue] = useState("")
  const [hexValue, setHexValue] = useState("")
  const [checkedArr, setCheckedArr] = useState(Array(32).fill(false))

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

  const OutputTable = () => {
    return <table className="center">
      <tbody>
        <tr>
          <td>Binary</td>
          <td>
            <input type="text" name="binary" readOnly={true} maxLength="32" size="32" style={{ "textAlign": "right" }}
              value={binValue} />
          </td>
        </tr>

        <tr>
          <td>Decimal</td>
          <td>
            <input type="text" name="decimal" readOnly={true} maxLength="32" size="32" style={{ "textAlign": "right" }}
              value={decValue} />
          </td>
        </tr>

        <tr>
          <td>Hex</td>
          <td>
            <input type="text" name="Hex" readOnly={true} maxLength="32" size="32" style={{ "textAlign": "right" }}
              value={hexValue} />
          </td>
        </tr>
      </tbody>
    </table>
  }


  return (
    <div>
      <fieldset className="ba br3 ma3 w-60 center">
        <legend>Inputs</legend>
        <CheckboxGroup
          checkedArr={checkedArr}
          handler={handleCheckboxChange}
        />
      </fieldset>

      <fieldset className="ba br3 ma3 w-60 center">
        <legend>Outputs</legend>
        <OutputTable />
      </fieldset>

      <fieldset className="ba br3 ma3 justify-center w-60 center">
        <legend>Buttons</legend>

        <button className="br3 ma1 pointer" onClick={handleToggle}>
          Toggle
        </button>

        <button className="br3 ma1 pointer" onClick={handleRandomize}>
          Randomize
        </button>

        <button className="br3 ma1 pointer" onClick={handleResetAll}>
          Reset all
        </button>

        <button className="br3 ma1 pointer" onClick={handleCheckAll}>
          Check all
        </button>
      </fieldset>
    </div >
  )

}


export default BinConverter
