import { Component } from "react"

class Stopwatch extends Component {

  constructor(props) {
    super(props)
    this.timerID = null
    this.tTotalStart = 0
    this.tTotalElpased = 0
    this.tLapStart = 0
    this.tPrevElpased = 0
    this.startButtonState = "start"
    this.resultIndex = 0

    this.totalStr = ""
    this.lapStr = ""

    this.state = {
      totalTime: "",
      lapTime: "",
      startButtonText: "Start",
      resultRows: <tr></tr>,
      enBtnReset: false,
      enBtnStart: true,
      enBtnLap: false,
    }
  }

  componentDidMount = () => {
    this.totalStr = this.makeTimeString(0)
    this.lapStr = this.makeTimeString(0)
    this.updateTime()
  }

  makeTimeString = (t) => {

    const tMili = t % 1000
    t = (t - tMili) / 1000 // convert t to second
    const tSec = t % 60
    const tMin = (t - tSec) / 60

    return `${tMin.toString(10).padStart(2, "0")}:${tSec.toString(10).padStart(2, "0")}.${tMili.toString(10).padStart(3, "0")}`
  }


  updateTime = (buttonText = null) => {

    this.setState(
      Object.assign(
        {
          totalTime: this.totalStr,
          lapTime: this.lapStr,
        },
        buttonText === null ? {} : { startButtonText: buttonText }
      )
    )

  }

  handleStart = () => {
    switch (this.startButtonState) {
      case "start":
        this.tTotalStart = new Date().getTime()
        this.tLapStart = this.tTotalStart

        this.timerID = setInterval(() => {
          this.tTotalElpased = new Date().getTime() - this.tTotalStart + this.tPrevElpased
          let timeElapseLAP = new Date().getTime() - this.tLapStart

          this.totalStr = this.makeTimeString(this.tTotalElpased)
          this.lapStr = this.makeTimeString(timeElapseLAP)

          this.updateTime("Stop")
        }, 10)

        this.startButtonState = "stop"
        this.setState({
          enBtnReset: true,
          enBtnStart: true,
          enBtnLap: true,
        })
        break

      case "stop":
        this.handlePause()
        break

      default:
        break
    }
  }

  handlePause = () => {
    if (this.timerID != null) {
      clearInterval(this.timerID)
      this.timerID = null
    }

    this.tPrevElpased = this.tTotalElpased
    this.startButtonState = "start"
    this.updateTime("Start")
    this.setState({
      enBtnReset: true,
      enBtnStart: true,
      enBtnLap: false,
    })
    this.addResult(this.resultIndex++, this.totalStr, this.lapStr)
  }

  handleLap = () => {
    this.tLapStart = new Date().getTime()
    this.addResult(this.resultIndex++, this.totalStr, this.lapStr)
  }

  handleReset = () => {
    if (this.timerID != null) {
      clearInterval(this.timerID)
      this.timerID = null
    }
    this.tTotalStart = 0
    this.tTotalElpased = 0
    this.tLapStart = 0
    this.tPrevElpased = 0
    this.startButtonState = "start"
    this.resultIndex = 0
    this.totalStr = this.makeTimeString(0)
    this.lapStr = this.makeTimeString(0)
    this.updateTime("Start")

    this.setState({
      resultRows: [],
      enBtnReset: false,
      enBtnStart: true,
      enBtnLap: false,
    })
  }


  addResult = (index, total, lap) => {
    // make one table row
    const newRow = <tr>
      <td>{`#${(index + 1).toString().padStart(3, "0")}`}</td>
      <td>{total}</td>
      <td>{lap}</td>
    </tr>

    this.setState({
      resultRows: [newRow, this.state.resultRows]
    })
  }

  render() {
    return (
      <div>
        <div className="flex flex-row ma3 w-60 center">
          <fieldset className="w-50 ma3 br3">
            <legend>Total</legend>
            <h1>{this.state.totalTime}</h1>
          </fieldset>
          <fieldset className="w-50 ma3 br3">
            <legend>LAP</legend>
            <h1>{this.state.lapTime}</h1>
          </fieldset>
        </div>

        <div className="flex flex-row ma3 w-60 center justify-center">
          <button
            className="br3 w-20 pa3 ma3"
            disabled={!this.state.enBtnReset}
            onClick={this.handleReset}
          >
            Reset
          </button>

          <button
            className="br3 w-20 pa3 ma3"
            disabled={!this.state.enBtnStart}
            onClick={this.handleStart}>
            {this.state.startButtonText}
          </button>

          <button
            className="br3 w-20 pa3 ma3"
            disabled={!this.state.enBtnLap}
            onClick={this.handleLap}>
            LAP
          </button>
        </div>

        <fieldset className="flex flex-row ma3 w-60 center br3">
          <legend> Results </legend>
          <table className="center f3 w-90">
            <thead>
              <td>No.</td>
              <td>Total</td>
              <td>LAP</td>
            </thead>
            <tbody>
              {this.state.resultRows}
            </tbody>
          </table>
        </fieldset>

      </div>
    )
  }
}

export default Stopwatch
