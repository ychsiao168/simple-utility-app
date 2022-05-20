import React, { useState, useRef } from "react"
import { FormControl, FormLabel, TextField, Grid, Button, Container, Typography, Paper, Card, CardMedia, CardContent } from "@material-ui/core"
import useStyles from "./styles"
import QRcodeLib from 'qrcode'
const emptyDataUri = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="

const QRcode = () => {

  const classes = useStyles()
  const [imgsrc, setImgsrc] = useState(emptyDataUri)
  const [inputText, setInputtext] = useState("")
  const [status, setStatus] = useState("0")
  const cursorPos = useRef(0)

  const inputHandler = (event) => {

    switch (event.type) {

      case "keydown":
        if (event.key === "Enter") {
          event.preventDefault()
          handleGo()
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

  const handleClear = (event) => {
    setImgsrc(emptyDataUri)
    setInputtext("")
    setStatus("0")
  }

  const handleGo = (event) => {
    event.preventDefault()
    if (inputText.length === 0) {
      setImgsrc(emptyDataUri)
      setStatus("No input")
      return
    }

    QRcodeLib.toDataURL(inputText)
      .then(url => {
        setImgsrc(url)
        setStatus(inputText.length)
      })
      .catch(err => console.log(err))
  }


  const QrcodeInputs = () => {
    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Input String</FormLabel>
          <TextField
            variant="outlined"
            size="small"
            multiline={true}
            minRows={5} maxRows={5}
            autoFocus={true}
            value={inputText}
            onChange={inputHandler} onFocus={inputHandler} />
        </FormControl>

        <Container>
          <Grid className={classes.gridRoot} container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" fullWidth onClick={handleGo}>Go</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" fullWidth onClick={handleClear}>Clear</Button>
            </Grid>
          </Grid>
        </Container>
        &nbsp;
      </Paper>
    )
  }

  const QrcodeResult = () => {
    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend">QR Code</FormLabel>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component='img'
                  image={imgsrc}
                  title={`QRcode of "${inputText}"`}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    input length: {status}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    )
  }

  return (
    <Container maxWidth="sm">
      <QrcodeInputs />
      <QrcodeResult />
    </Container>
  )
}

export default QRcode
