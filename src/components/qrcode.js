import React, { useState } from "react"
import QRcodeLib from 'qrcode'

const QRcode = () => {

  const [imgsrc, setImgsrc] = useState("")
  const [inputText, setInputtext] = useState("")
  const [log, setLog] = useState("")

  const inputHandler = (event) => {

    switch (event.type) {
      case "keydown":
        if (event.key === "Enter") {
          event.preventDefault()
          qrcodeHandler()
        }
        break

      case "change":
        setInputtext(event.target.value)
        break

      default:
        break
    }
  }

  const clearHandler = (event) => {
    setImgsrc("")
    setInputtext("")
    setLog("")
  }

  const qrcodeHandler = () => {
    if (inputText.length === 0) {
      setImgsrc("")
      setLog("No input")
      return
    }

    QRcodeLib.toDataURL(inputText)
      .then(url => {
        setImgsrc(url)
        setLog(inputText.length)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="flex flex-column justify-center center w-60">
      <fieldset className="ba br3 ma3">
        <legend> Input String </legend>
        <textarea
          className="tc f5 br3 center w-100"
          rows="8"
          cols="32"
          maxLength="256"
          value={inputText}
          onChange={inputHandler}
          onKeyDown={inputHandler}
        >
        </textarea>
        <div className="flex center w-100">
          <button className="pa1 ma1 br3 w-50" onClick={qrcodeHandler} > GO </button>
          <button className="pa1 ma1 br3 w-50" onClick={clearHandler} > Clear </button>
        </div>

      </fieldset>

      <fieldset className="ba br3 ma3 ">
        <legend> QR Code </legend>
        <img className="center" src={imgsrc} alt="" width="80%" />
        <h2 className="center">{log}</h2>
      </fieldset>
    </div>
  )

}

export default QRcode
