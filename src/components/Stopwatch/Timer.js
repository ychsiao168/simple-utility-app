import moment from "moment"
class Timer {
  // dependency: momentjs
  constructor() {
    const tNow = moment()
    this.tStart = tNow
    this.tPrevStart = tNow
    this.tNow = tNow
    this.prevElapsed = 0
  }

  update = (tNow) => {
    this.tNow = tNow.clone()
  }

  toString = () => {
    const diff = this.tNow.diff(this.tStart)
    const result = moment(diff + this.prevElapsed).format("mm:ss.SS")
    return result
  }

  reset = () => {
    this.tStart = moment()
    this.tPrevStart = moment()
    this.tNow = moment()
    this.prevElapsed = 0
  }

  setStart = (tNow) => {
    this.tStart = tNow.clone()
  }

  keepElapsed = () => {
    this.prevElapsed = this.tNow.diff(this.tStart) + this.prevElapsed
  }
}

export default Timer