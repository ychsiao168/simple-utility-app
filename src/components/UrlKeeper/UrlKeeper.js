import React, { useState, useEffect } from "react"
import { FormControl, FormLabel, TextField, Grid, Button, Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@material-ui/core"
import useStyles from "./styles"
const KEEPURL_API_NEW = "https://www.ychsiao168.idv.tw:5001/api/shorturl/new"
const KEEPURL_API_GET = "https://www.ychsiao168.idv.tw:5001/api/shorturl"
const KEEPURL_API_REDIRECT = "https://www.ychsiao168.idv.tw:5001/api/shorturl"


const createTableRows = (urlArr, setUrlRows, classes) => {
  let index = 0
  const newRecords = []
  urlArr.forEach((url) => {
    const newRecord =
      <TableRow key={`${url.hash}`}>
        <TableCell align="center" >{`#${(index + 1).toString().padStart(2, "0")}`}</TableCell>
        <TableCell
          align="center"
          className={classes.tableMonoFont}
          style={{ backgroundColor: "rgb(204, 229, 255)" }}
        >
          {url.original_url}
        </TableCell>
        <TableCell
          align="center"
          className={classes.tableMonoFont}
          style={{ backgroundColor: "rgb(255, 255, 204)" }}
        >
          <a href={`${KEEPURL_API_REDIRECT}/${url.hash}`} target="_blank" rel="noreferrer">{url.hash}</a>
        </TableCell>
      </TableRow>
    newRecords.push(newRecord)

    index++
  })

  setUrlRows(newRecords)
}


const fetchUrlRecords = (setUrlRows, classes) => {
  fetch(KEEPURL_API_GET)
    .then(response => response.json())
    .then((UrlArr) => {
      createTableRows(UrlArr, setUrlRows, classes)
    })
}


const UrlKeeperInputs = ({ setStatus, setUrlRows }) => {
  const classes = useStyles()
  const [inputUrl, setInputUrl] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch(KEEPURL_API_NEW, {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ url: inputUrl }),
      method: 'POST',
    })
      .then(response => response.json())
      .then((data) => {
        if (data?.error) {
          setStatus(data.error)
        } else {
          setStatus(`Keep '${inputUrl}' done`)
        }
      })
      .then(() => {
        setUrlRows([])
      })

    fetchUrlRecords(setUrlRows, classes)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setInputUrl(e.target.value)
  }

  return (
    <Paper elevation={3}>
      <FormControl component="fieldset" className={classes.formControl} >
        <FormLabel component="legend" >Inputs</FormLabel>
        <form className={classes.container} onSubmit={handleSubmit} method="post">
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} sm={10}>
              <TextField
                autoFocus={true}
                variant="outlined"
                type="text"
                label="URL to be kept"
                value={inputUrl}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                variant="contained"
                color="primary"
                style={{ cursor: 'pointer' }}
                type="submit"
                fullWidth>
                POST URL
            </Button>
            </Grid>
          </Grid>
        </form>
      </FormControl>
    </Paper>
  )
}

const UrlKeeperRecords = ({ urlRows, setUrlRows }) => {
  const classes = useStyles()

  useEffect(() => {
    fetchUrlRecords(setUrlRows, classes)
  }, [setUrlRows, classes])

  return (
    <Paper elevation={3}>
      <FormControl component="fieldset" className={classes.formControl} >
        <FormLabel component="legend">Records</FormLabel>
        <TableContainer component={Paper}>
          <Table className={classes.table} padding="none">
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '70%' }} />
              <col style={{ width: '20%' }} />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell align="center">No.</TableCell>
                <TableCell align="center">URL</TableCell>
                <TableCell align="center">Hash</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {urlRows}
            </TableBody>
          </Table>
        </TableContainer>
      </FormControl>
    </Paper>
  )
}

const UrlKeeperStatus = ({ status }) => {
  const classes = useStyles()
  return (
    <Paper elevation={3}>
      <FormControl component="fieldset" className={classes.formControl} >
        <FormLabel component="legend">Status</FormLabel>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8}>
            <TextField
              defaultValue={status}
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

const UrlKeeper = () => {

  const [status, setStatus] = useState("")
  const [urlRows, setUrlRows] = useState([])

  return (
    <Container maxWidth="sm">
      <UrlKeeperInputs setStatus={setStatus} setUrlRows={setUrlRows} />
      <UrlKeeperRecords urlRows={urlRows} setUrlRows={setUrlRows} />
      <UrlKeeperStatus status={status} />
    </Container >
  )
}

export default UrlKeeper
