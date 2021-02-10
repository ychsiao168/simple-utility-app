import React, { useState, useRef } from "react"
import QRcodeLib from 'qrcode'

const QRcode = () => {

  const [imgsrc, setImgsrc] = useState("")
  const [inputText, setInputtext] = useState("")
  const [log, setLog] = useState("")
  const cursorPos = useRef(0)

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

        cursorPos.current = event.target.selectionStart;
        break

      case "focus":
        event.target.selectionStart = cursorPos.current;
        break

      default:
        console.log("TYPE", event.type)
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


  const INPUTS = () => {
    return (
      <fieldset className="ba br3 ma3">
        <legend> Input String </legend>
        <textarea autoFocus
          className="br3 center"
          rows="10"
          cols="26"
          maxLength="256"
          value={inputText}
          onChange={inputHandler}
          onKeyDown={inputHandler}
          onFocus={inputHandler}
        >
        </textarea>
        <div className="center">
          <button className="pa1 ma1 br3 w4" onClick={qrcodeHandler} > GO </button>
          <button className="pa1 ma1 br3 w4" onClick={clearHandler} > Clear </button>
        </div>

      </fieldset>
    )
  }

  const QRCODE = () => {
    return (
      <fieldset className="ba br3 ma3">
        <legend> QR Code </legend>
        <img className="center" src={imgsrc} alt="" width="80%" />
        <h2 className="center">{log}</h2>
      </fieldset>
    )
  }

  return (
    <div className="flex flex-column justify-center center mw6">
      <INPUTS />
      <QRCODE />
    </div>
  )
}

export default QRcode
