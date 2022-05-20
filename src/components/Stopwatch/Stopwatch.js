import React from 'react'
import { useState, useRef } from "react"
import { Container, FormControl, FormLabel, TextField, Grid, Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@material-ui/core"
import useStyles from "./styles"
import moment from "moment"
import Timer from "./Timer"

let startButtonState = "start"
let gResultIndex = 0

const Stopwatch = () => {

  const [timerTotal] = useState(() => new Timer());
  const [timerLap] = useState(() => new Timer());
  const [timerTotalDispaly, setTimeTotalDispaly] = useState(timerTotal.toString())
  const [timerLapDispaly, setTimeLapDispaly] = useState(timerLap.toString())
  const [startButtonText, setStartButtonText] = useState("Start")
  const [resultRows, setResultRows] = useState([])
  const [enBtnReset, setEnBtnReset] = useState(false)
  const [enBtnStart, setEnBtnStart] = useState(true)
  const [enBtnLap, setEnBtnLap] = useState(false)
  const timerID = useRef(null)

  const updateStopwatch = () => {
    setTimeTotalDispaly(timerTotal.toString())
    setTimeLapDispaly(timerLap.toString())
  }

  const handleStartStop = (event) => {
    event.preventDefault()

    switch (startButtonState) {
      case "start":
        _handleStart(event)
        break

      case "stop":
        _handleStop()
        break

      default:
        break
    }
  }

  const _handleStart = (event) => {
    const tNow = moment()
    timerTotal.setStart(tNow)
    timerLap.setStart(tNow)

    timerID.current = setInterval(() => {
      const tNow = moment()
      timerTotal.update(tNow)
      timerLap.update(tNow)

      updateStopwatch()
    }, 10)

    setStartButtonText("Stop")
    startButtonState = "stop"
    setEnBtnReset(true)
    setEnBtnStart(true)
    setEnBtnLap(true)
  }

  const _handleStop = () => {
    if (timerID.current !== null) {
      clearInterval(timerID.current)
      timerID.current = null
    }

    startButtonState = "start"
    setStartButtonText("Start")

    setEnBtnReset(true)
    setEnBtnStart(true)
    setEnBtnLap(false)

    addResult(gResultIndex++, timerTotal.toString(), timerLap.toString())
    timerTotal.keepElapsed()
  }

  const handleLap = () => {
    addResult(gResultIndex++, timerTotal.toString(), timerLap.toString())
    timerLap.setStart(moment())
  }

  const handleReset = () => {
    if (timerID.current != null) {
      clearInterval(timerID.current)
      timerID.current = null
    }
    startButtonState = "start"

    timerTotal.reset()
    timerLap.reset()
    updateStopwatch()
    setStartButtonText("Start")

    setResultRows([])
    setEnBtnReset(false)
    setEnBtnStart(true)
    setEnBtnLap(false)
    gResultIndex = 0
  }


  const addResult = (index, total, lap) => {
    // make one table row
    const newRow = <TableRow key={`${index}`}>
      <TableCell align="center" >{`#${(index + 1).toString().padStart(2, "0")}`}</TableCell>
      <TableCell align="center" style={{ backgroundColor: "rgb(0, 153, 102)" }}>{total}</TableCell>
      <TableCell align="center" style={{ backgroundColor: "rgb(255, 222, 51)" }}>{lap}</TableCell>
    </TableRow>

    setResultRows(oldResult => [newRow, ...oldResult]);
  }

  return (
    <Container maxWidth="sm">
      <StopwatchMain
        timerTotalDispaly={timerTotalDispaly}
        timerLapDispaly={timerLapDispaly}
      />
      <StopwatchButtons
        enBtnReset={enBtnReset}
        enBtnStart={enBtnStart}
        enBtnLap={enBtnLap}
        handleReset={handleReset}
        handleStartStop={handleStartStop}
        handleLap={handleLap}
        startButtonText={startButtonText}
      />
      <StopwatchResults
        resultRows={resultRows}
      />
    </Container>
  )
}

const StopwatchMain = React.memo(({ timerTotalDispaly, timerLapDispaly }) => {
  const classes = useStyles()
  return (
    <Paper elevation={3}>
      <FormControl component="fieldset" className={classes.formControl} >
        <FormLabel component="legend">Main</FormLabel>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Total"
              value={timerTotalDispaly}
              inputProps={{
                readOnly: true,
                style: { textAlign: 'center', fontSize: 30 },
              }}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Lap"
              value={timerLapDispaly}
              inputProps={{
                readOnly: true,
                style: { textAlign: 'center', fontSize: 30 },
              }}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </FormControl>
    </Paper>
  )
})

const StopwatchButtons = React.memo(({ enBtnReset, enBtnStart, enBtnLap, handleReset, handleStartStop, handleLap, startButtonText }) => {
  const classes = useStyles()
  return (
    <Paper elevation={3}>
      <FormControl component="fieldset" className={classes.formControl} >
        <FormLabel component="legend">Buttons</FormLabel>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={!enBtnReset}
              onClick={handleReset}
            >
              Reset
           </Button>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={!enBtnStart}
              onClick={handleStartStop}>
              {startButtonText}
            </Button>

          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={!enBtnLap}
              onClick={handleLap}>
              LAP
           </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Paper>
  )
}, (prevProps, nextProps) => {
  if (prevProps.enBtnReset !== nextProps.enBtnReset ||
    prevProps.enBtnStart !== nextProps.enBtnStart ||
    prevProps.enBtnLap !== nextProps.enBtnLap ||
    prevProps.startButtonText !== nextProps.startButtonText) {
    return false
  } else {
    return true
  }

})

const StopwatchResults = React.memo(({ resultRows }) => {
  const classes = useStyles()
  return (
    <Paper elevation={3}>
      <FormControl component="fieldset" className={classes.formControl} >
        <FormLabel component="legend">Results</FormLabel>
        <TableContainer component={Paper}>
          <Table className={classes.table} padding="none">
            <colgroup>
              <col style={{ width: '20%' }} />
              <col style={{ width: '40%' }} />
              <col style={{ width: '40%' }} />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell align="center">No.</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center">LAP</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultRows}
            </TableBody>
          </Table>
        </TableContainer>
      </FormControl>
    </Paper>
  )
})

export default Stopwatch
