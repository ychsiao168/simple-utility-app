import React, { useState, useRef } from "react"
import { FormControl, FormLabel, TextField, Grid, Button, Container, Paper } from "@material-ui/core"
import useStyles from "./styles"
import { md5, sha256, crc32 } from "hash-wasm";

const INIT_STATE = { md5: "", sha256: "", crc32: "" }

const Filehash = () => {

  const [hashResult, setHashResult] = useState(INIT_STATE)
  const [fileBuf, setFilebuf] = useState(null)
  const fileName = useRef("")
  const [hashStatus, setHashStatus] = useState("")
  const [enBtnGo, setenBtnGo] = useState(false)
  const classes = useStyles()

  const handleGo = async () => {

    let newHashResult = { ...INIT_STATE }
    setenBtnGo(false)

    await Promise.all([md5(fileBuf), sha256(fileBuf), crc32(fileBuf)])
      .then(values => {
        newHashResult.md5 = values[0].toUpperCase()
        newHashResult.sha256 = values[1].toUpperCase()
        newHashResult.crc32 = values[2].toUpperCase()


        setHashStatus(`Hash '${fileName.current}' done!`)
        fileName.current = ""
        setHashResult(newHashResult)
      })
  }

  const handleChooseFile = async (e) => {
    if (e.target.files.length === 0) {
      setHashResult(INIT_STATE)
      return
    }

    const reader = new FileReader()
    reader.onerror = (r) => {
      setenBtnGo(false)
      setHashStatus("Error opening file")
    }

    reader.onload = async (e) => {
      setFilebuf(new Uint8Array(e.target.result))
      setenBtnGo(true)
      setHashStatus(`'${fileName.current}' ready, Press GO`)
    }

    reader.readAsArrayBuffer(e.target.files[0])

    setHashResult(INIT_STATE)
    fileName.current = e.target.files[0].name
    setHashStatus(`Reading File...${e.target.files[0].name}`)
  }

  const FilehashInputs = () => {
    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend" >Inputs</FormLabel>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} sm={8}>
              <input
                accept="image/*"
                className={classes.fileInput}
                id="select-file-button"
                type="file"
                onChange={handleChooseFile}
              />
              <label htmlFor="select-file-button">
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!enBtnGo}
                  onClick={handleGo}
                  style={{ cursor: 'pointer' }}
                  fullWidth>
                  {
                    (fileName.current) ? (
                      "GO"
                    ) : (
                        "Click to select file"
                      )
                  }
                </Button>
              </label>

            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    )
  }

  const FilehashOutputs = () => {
    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend">Outputs</FormLabel>

          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField
                label="MD5"
                defaultValue={hashResult.md5}
                inputProps={{
                  readOnly: true,
                  style: { textAlign: 'right', fontFamily: 'monospace' }
                }}
                variant="outlined"
                multiline
                fullWidth
                minRows={2}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="SHA256"
                defaultValue={hashResult.sha256}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                inputProps={{
                  readOnly: true,
                  style: { textAlign: 'right', fontFamily: 'monospace' }
                }}
                variant="outlined"
                multiline
                fullWidth
                minRows={2}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="CRC32"
                defaultValue={hashResult.crc32}
                inputProps={{
                  readOnly: true,
                  style: { textAlign: 'right', fontFamily: 'monospace' }
                }}
                variant="outlined"
                multiline
                fullWidth
                minRows={2}
              />
            </Grid>
          </Grid>
        </FormControl>
      </Paper >

    )
  }

  const FilehashStatus = () => {
    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend">Status</FormLabel>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8}>
              <TextField
                defaultValue={hashStatus}
                inputProps={{
                  readOnly: true,
                  style: { textAlign: 'center', fontFamily: 'monospace' }
                }}
                fullWidth
                multiline
              />
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    )
  }

  return (
    <Container maxWidth="sm">
      <FilehashInputs />
      <FilehashOutputs />
      <FilehashStatus />
    </Container >
  )
}

export default Filehash
