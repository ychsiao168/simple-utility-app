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


  const INPUTS = () => {
    return (
      <fieldset className="ba br3 ma3">
        <legend>Inputs</legend>
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
      </fieldset>
    )
  }

  const OUTPUTS = () => {
    return (
      <fieldset className="ba br3 ma3 f5">
        <legend>Outputs</legend>
        <table className="center">
          <tbody>
            <tr>
              <td>Bin</td>
              <td>
                <input type="text" name="binary24" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right" }}
                  value={binValue.slice(0, 8)} />
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <input type="text" name="binary16" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right" }}
                  value={binValue.slice(8, 16)} />
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <input type="text" name="binary08" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right" }}
                  value={binValue.slice(16, 24)} />
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <input type="text" name="binary00" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right" }}
                  value={binValue.slice(24, 32)} />
              </td>
            </tr>

            <tr>
              <td>Dec</td>
              <td>
                <input type="text" name="decimal" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right" }}
                  value={decValue} />
              </td>
            </tr>

            <tr>
              <td>Hex</td>
              <td>
                <input type="text" name="Hex" readOnly={true} maxLength="10" size="10" style={{ "textAlign": "right" }}
                  value={hexValue} />
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    )
  }

  const BUTTONS = () => {
    return (
      <fieldset className="ba br3 ma3">
        <legend>Buttons</legend>

        <div className="flex flex-row">
          <button className="br3 ma1 pointer w-50" onClick={handleToggle}>
            Toggle
          </button>

          <button className="br3 ma1 pointer w-50" onClick={handleRandomize}>
            Randomize
          </button>
        </div>

        <div className="flex flex-row">
          <button className="br3 ma1 pointer  w-50" onClick={handleResetAll}>
            Reset all
          </button>

          <button className="br3 ma1 pointer  w-50" onClick={handleCheckAll}>
            Check all
          </button>
        </div>
      </fieldset>
    )
  }

  return (
    <div className="flex flex-column justify-center center mw6">
      <INPUTS />
      <OUTPUTS />
      <BUTTONS />
    </div >
  )

}


export default BinConverter
