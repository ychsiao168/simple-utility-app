import { useState, useEffect } from "react"

let timerID = null
let tTotalStart = 0
let tTotalElpased = 0
let tLapStart = 0
let tPrevElpased = 0
let startButtonState = "start"
let resultIndex = 0
let totalStr = ""
let lapStr = ""

const Stopwatch = () => {

  const [totalTime, setTotalTime] = useState("")
  const [lapTime, setLapTime] = useState("")
  const [startButtonText, setStartButtonText] = useState("Start")
  const [resultRows, setResultRows] = useState(<tr></tr>)
  const [enBtnReset, setEnBtnReset] = useState(false)
  const [enBtnStart, setEnBtnStart] = useState(true)
  const [enBtnLap, setEnBtnLap] = useState(false)


  useEffect(() => {
    totalStr = makeTimeString(0)
    lapStr = makeTimeString(0)
    updateTime()
  }, [])

  const makeTimeString = (t) => {

    const tMili = t % 1000
    t = (t - tMili) / 1000 // convert t to second
    const tSec = t % 60
    const tMin = (t - tSec) / 60

    return `${tMin.toString(10).padStart(2, "0")}:${tSec.toString(10).padStart(2, "0")}.${tMili.toString(10).padStart(3, "0")}`
  }


  const updateTime = () => {
    setTotalTime(totalStr)
    setLapTime(lapStr)
  }

  const handleStart = () => {

    switch (startButtonState) {
      case "start":

        tTotalStart = new Date().getTime()
        tLapStart = tTotalStart

        timerID = setInterval(() => {
          tTotalElpased = new Date().getTime() - tTotalStart + tPrevElpased
          let timeElapseLAP = new Date().getTime() - tLapStart

          totalStr = makeTimeString(tTotalElpased)
          lapStr = makeTimeString(timeElapseLAP)

          updateTime()
        }, 10)

        setStartButtonText("Stop")
        startButtonState = "stop"

        setEnBtnReset(true)
        setEnBtnStart(true)
        setEnBtnLap(true)
        break

      case "stop":
        handlePause()
        break

      default:
        break
    }
  }

  const handlePause = () => {
    if (timerID != null) {
      clearInterval(timerID)
      timerID = null
    }

    tPrevElpased = tTotalElpased
    startButtonState = "start"
    setStartButtonText("Start")

    updateTime()

    setEnBtnReset(true)
    setEnBtnStart(true)
    setEnBtnLap(false)

    addResult(resultIndex++, totalStr, lapStr)
  }

  const handleLap = () => {
    tLapStart = new Date().getTime()
    addResult(resultIndex++, totalStr, lapStr)
  }

  const handleReset = () => {
    if (timerID != null) {
      clearInterval(timerID)
      timerID = null
    }
    tTotalStart = 0
    tTotalElpased = 0
    tLapStart = 0
    tPrevElpased = 0
    startButtonState = "start"
    resultIndex = 0
    totalStr = makeTimeString(0)
    lapStr = makeTimeString(0)
    updateTime()
    setStartButtonText("Start")

    setResultRows([])
    setEnBtnReset(false)
    setEnBtnStart(true)
    setEnBtnLap(false)
  }


  const addResult = (index, total, lap) => {
    // make one table row
    const newRow = <tr key="index">
      <td className="bg-light-red">{`#${(index + 1).toString().padStart(2, "0")}`}</td>
      <td className="bg-light-green">{total}</td>
      <td className="bg-light-blue">{lap}</td>
    </tr>

    setResultRows([newRow, resultRows])
  }

  const STOPWATCH = () => {
    return (
      <fieldset className="ba br3 ma3">
        <legend> Stopwatch </legend>
        <fieldset className="br3 ma2">
          <legend>Total</legend>
          <h2>{totalTime}</h2>
        </fieldset>
        <fieldset className="br3 ma2">
          <legend>LAP</legend>
          <h2>{lapTime}</h2>
        </fieldset>
      </fieldset>
    )
  }

  const BUTTONS = () => {
    return (
      <fieldset className="ba br3 ma3">
        <legend> Buttons </legend>
        <button
          className="br3 pa2 ma2 w-25"
          disabled={!enBtnReset}
          onClick={handleReset}
        >
          Reset
          </button>

        <button
          className="br3 pa2 ma2 w-25"
          disabled={!enBtnStart}
          onClick={handleStart}>
          {startButtonText}
        </button>

        <button
          className="br3 pa2 ma2 w-25"
          disabled={!enBtnLap}
          onClick={handleLap}>
          LAP
          </button>
      </fieldset>
    )
  }

  const RESULTS = () => {
    return (
      <fieldset className="ba br3 ma3">
        <legend> Results </legend>
        <table className="center f5">
          <thead>
            <tr>
              <td>No.</td>
              <td>Total</td>
              <td>LAP</td>
            </tr>
          </thead>
          <tbody>
            {resultRows}
          </tbody>
        </table>
      </fieldset>
    )
  }

  return (
    <div className="flex flex-column justify-center center mw6">
      <STOPWATCH />
      <BUTTONS />
      <RESULTS />
    </div>
  )
}

export default Stopwatch
