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
    <div>
      <fieldset className="w-60 center flex ma3 ba br3 pa3 ma3">
        <legend> Input String </legend>
        <textarea
          className="tc f4 br3 center w-80"
          rows="4"
          cols="64"
          maxLength="256"
          value={inputText}
          onChange={inputHandler}
          onKeyDown={inputHandler}
        >
        </textarea>
        <button className="br3 w-20" onClick={qrcodeHandler} > GO </button>
        <button className="br3 w-20" onClick={clearHandler} > Clear </button>
      </fieldset>

      <fieldset className="flex flex-column w-60 center flex ma3 ba br3">
        <legend> QR Code </legend>
        <img className="center" src={imgsrc} alt="" width="30%" />
        <h2 className="center">{log}</h2>
      </fieldset>
    </div>
  )

}

export default QRcode
