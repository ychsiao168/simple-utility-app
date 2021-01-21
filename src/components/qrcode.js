import React, { Component } from "react"
import QRcodeLib from 'qrcode'

class QRcode extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imgsrc: "",
      inputText: "",
      log: ""
    }
  }

  inputHandler = (event) => {

    switch (event.type) {
      case "keydown":
        if (event.key === "Enter") {
          event.preventDefault()
          this.qrcodeHandler()
        }
        break

      case "change":
        this.setState({ inputText: event.target.value })
        break

      default:
        break
    }
  }

  clearHandler = (event) => {
    this.setState({ imgsrc: "", inputText: "", log: "" })
  }

  qrcodeHandler = () => {
    const { inputText } = this.state

    if (inputText.length === 0) {
      this.setState({ imgsrc: "", log: "No input" })
      return
    }

    QRcodeLib.toDataURL(inputText)
      .then(url => this.setState({ imgsrc: url, log: `${inputText.length}` }))
      .catch(err => console.log(err))
  }

  render = () => {

    return (
      <div>
        <fieldset className="w-60 center flex ma3 ba br3 pa3 ma3">
          <legend> Input String </legend>
          <textarea
            className="tc f4 br3 center w-80"
            rows="4"
            cols="64"
            maxLength="256"
            value={this.state.inputText}
            onChange={this.inputHandler}
            onKeyDown={this.inputHandler}
          >
          </textarea>
          <button className="br3 w-10" onClick={this.qrcodeHandler} > GO </button>
          <button className="br3 w-10" onClick={this.clearHandler} > Clear </button>
        </fieldset>

        <fieldset className="flex flex-column w-60 center flex ma3 ba br3">
          <legend> QR Code </legend>
          <img className="center" src={this.state.imgsrc} alt="" width="30%" />
          <h2 className="center">{this.state.log}</h2>
        </fieldset>
      </div>
    )
  }
}

export default QRcode
