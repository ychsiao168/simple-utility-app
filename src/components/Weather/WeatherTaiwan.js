import React, { useState, useEffect } from 'react'
import { Container, FormControl, FormLabel, Grid, Paper, Select, Card, CardMedia, CardContent, Typography, CircularProgress } from "@material-ui/core"
import useStyles from "./styles"
//const API_WEATHERFC_URL = "https://simple-utility-api.herokuapp.com/weatherfc"
//const API_WEATHERFC_URL = "http://127.0.0.1:3001/weatherfc"
const API_WEATHERFC_URL = "https://www.ychsiao168.idv.tw:5001/weatherfc/"
const locationArr = [
  "基隆市", "臺北市", "新北市", "桃園市",
  "新竹市", "新竹縣", "苗栗縣", "臺中市",
  "彰化縣", "南投縣", "雲林縣", "嘉義市",
  "嘉義縣", "臺南市", "高雄市", "屏東縣",
  "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣",
  "金門縣", "連江縣",
]


const WeatherTaiwan = () => {

  const [location, setLocation] = useState("臺北市"); // default location
  const [gRecords, setRecords] = useState(null);
  const classes = useStyles()

  useEffect(() => {
    fetch(encodeURI(`${API_WEATHERFC_URL}/`))
      .then(data => data.json())
      .then(({ records }) => {
        setRecords(records)
      })
      .catch(err => console.log(err))

  }, [])

  const Weathercard = ({ locRecord, index }) => {

    if (!locRecord) {
      return <CircularProgress />
    }

    const { weatherElement } = locRecord
    const [wx, pop, mint, ci, maxt] = weatherElement.map(w => (w.time[index].parameter.parameterName))

    const { startTime, endTime } = weatherElement[0].time[index]
    const wxIndex = weatherElement[0].time[index].parameter.parameterValue
    const titleTimeString =
      `${startTime.substring(5, 16).replace("-", "/").replace(" ", "-")} ~ \
${endTime.substring(5, 16).replace("-", "/").replace(" ", "-")}`

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1" title={titleTimeString}>{getTimeString(startTime, endTime)}</Typography>
        </CardContent>
        <CardMedia
          //component='img'
          className={classes.media}
          image={getWxImgUrl(wxIndex, startTime)}
          title={wx} />
        <CardContent>
          <Typography variant="body1">🌡️ {mint} - {maxt}℃ </Typography>
          <Typography variant="body1">☂ {pop}%</Typography>
          <Typography variant="body1">{ci}</Typography>
        </CardContent>
      </Card>
    )
  }

  const getTimeString = (start, end) => {
    const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    const today = (new Date(Date.now() - tzoffset)).toISOString().substring(0, 10)
    const [sDate, sHour] = start.split(" ")

    if (sDate === today && (sHour === "06:00:00" || sHour === "12:00:00")) {
      return ("今日白天")
    } else if (sDate === today && sHour === "00:00:00") {
      return ("今日凌晨")
    } else if (sDate === today && sHour === "18:00:00") {
      return ("今晚明晨")
    } else if (sDate !== today && sHour === "00:00:00") {
      return ("今晚明晨")
    } else if (sDate !== today && sHour === "06:00:00") {
      return ("明日白天")
    } else if (sDate !== today && sHour === "18:00:00") {
      return ("明日晚上")
    } else {
      console.log("〇〇〇〇", today, sDate, sHour)
      return ("〇〇〇〇")
    }
  }

  const getWxImgUrl = (index, startTime) => {
    const [, sHour] = startTime.split(" ")
    const DayOrNight = (sHour === "06:00:00" || sHour === "12:00:00") ? "day" : "night"
    return `${process.env.PUBLIC_URL}/images/${DayOrNight}/${index.toString().padStart(2, "0")}.svg`
  }

  const findLocationRecord = (records, locName) => {
    let retObj = null
    records?.location?.some(loc => {
      if (loc.locationName === locName) {
        retObj = Object.assign({}, loc)
        return true // it's break
      }
      return false  // it's continue
    })

    return retObj
  }

  const WeatherTaiwanMenu = () => {
    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend">Menu</FormLabel>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              native
              value={location}
              onChange={(e) => { setLocation(e.target.value) }}>
              <option value="" disabled>選擇縣市</option>
              {
                locationArr.map((loc, idx) => (
                  <option value={loc} key={idx}>{loc}</option>
                ))
              }
            </Select>
          </FormControl>
        </FormControl>
      </Paper>
    )
  }

  const WeatherTaiwanResult = () => {

    const locationRecord = findLocationRecord(gRecords, location)
    const locationName = locationRecord?.locationName

    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend">{locationName}</FormLabel>

          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={4} align="center">
              <Weathercard locRecord={locationRecord} index={0} />
            </Grid>
            <Grid item xs={12} sm={4} align="center">
              <Weathercard locRecord={locationRecord} index={1} />
            </Grid>
            <Grid item xs={12} sm={4} align="center">
              <Weathercard locRecord={locationRecord} index={2} />
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    )
  }

  return (
    <Container maxWidth="sm">
      <WeatherTaiwanMenu />
      <WeatherTaiwanResult />
    </Container>
  )
}

export default WeatherTaiwan