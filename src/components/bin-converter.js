import React, { Component } from "react"
import CheckboxGroup from './CheckboxGroup'

class BinConverter extends Component {

  constructor(props) {
    super(props)

    this.bitsVal = 0
    this.state = {
      binaryValue: "",
      decimalValue: "",
      hexValue: "",
      checkedArr: Array(32).fill(false),
    }
  }


  componentDidMount = () => {
    this.updateValues()
  }


  handleCheckboxChange = (event) => {
    const index = Number(event.target.name)
    const newCheckedArr = [...this.state.checkedArr]  // clone
    newCheckedArr[index] = !newCheckedArr[index]  // toggle

    this.updateValues(event.target.name, newCheckedArr[index], newCheckedArr)
  }


  handleRandomize = () => {
    let newbitsVal = 0
    let newCheckedArr = []
    for (let i = 0; i < 32; i++) {
      let random = Math.random() > 0.5 ? true : false
      newCheckedArr.push(random)
      if (random) {
        newbitsVal += Math.pow(2, i)
      }
    }

    this.bitsVal = newbitsVal
    this.updateValues(-1, null, newCheckedArr)
  }


  handleResetAll = () => {
    this.bitsVal = 0
    this.updateValues(-1, null, Array(32).fill(false))
  }


  handleCheckAll = () => {
    this.bitsVal = 0xFFFFFFFF
    this.updateValues(-1, null, Array(32).fill(true))
  }


  updateValues = (bitN = -1, onoff = null, newCheckedArr = null) => {
    // this function convert this.bitsVal to Outputs

    if (bitN !== -1) {
      // update this.bitsVal
      const val = Math.pow(2, bitN)
      onoff ? this.bitsVal += val : this.bitsVal -= val
    }

    this.setState(
      Object.assign(
        {
          binaryValue: this.bitsVal.toString(2).toUpperCase().padStart(32, "0"),
          decimalValue: this.bitsVal.toString(10).toUpperCase().padStart(10, "0"),
          hexValue: this.bitsVal.toString(16).toUpperCase().padStart(8, "0"),
        },
        newCheckedArr === null ? {} : { checkedArr: newCheckedArr }
      )
    )
  }


  OutputTable = () => {
    return <table className="center">
      <tbody>
        <tr>
          <td>Binary</td>
          <td>
            <input type="text" name="binary" readOnly={true} maxLength="32" size="32" style={{ "textAlign": "right" }}
              value={this.state.binaryValue} />
          </td>
        </tr>

        <tr>
          <td>Decimal</td>
          <td>
            <input type="text" name="decimal" readOnly={true} maxLength="32" size="32" style={{ "textAlign": "right" }}
              value={this.state.decimalValue} />
          </td>
        </tr>

        <tr>
          <td>Hex</td>
          <td>
            <input type="text" name="Hex" readOnly={true} maxLength="32" size="32" style={{ "textAlign": "right" }}
              value={this.state.hexValue} />
          </td>
        </tr>
      </tbody>
    </table>
  }


  render() {

    return (
      <div>
        <fieldset className="ba br3 ma3 w-60 center">
          <legend>Inputs</legend>
          <CheckboxGroup
            checkedArr={this.state.checkedArr}
            handler={this.handleCheckboxChange}
          />
        </fieldset>

        <fieldset className="ba br3 ma3 w-60 center">
          <legend>Outputs</legend>
          <this.OutputTable />
        </fieldset>

        <fieldset className="ba br3 ma3 justify-center w-60 center">
          <legend>Buttons</legend>

          <button className="br3 ma1 pointer" onClick={this.handleRandomize}>
            Randomize
          </button>

          <button className="br3 ma1 pointer" onClick={this.handleResetAll}>
            Reset all
          </button>

          <button className="br3 ma1 pointer" onClick={this.handleCheckAll}>
            Check all
          </button>
        </fieldset>
      </div >
    )
  }
}


export default BinConverter
