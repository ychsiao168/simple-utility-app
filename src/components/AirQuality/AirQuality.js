import React, { useState, useEffect } from 'react'
import { Container, FormControl, FormLabel, Paper, Select, Typography, Box, Table, TableBody, TableRow, TableCell, ThemeProvider, CircularProgress, Grid } from "@material-ui/core"
import { createTheme  } from '@material-ui/core/styles';
import useStyles from "./styles"
//const API_AQ_URL = "https://simple-utility-api.herokuapp.com/epadata/aqx_p_432"
//const API_AQ_URL = "http://127.0.0.1:3001/epadata/aqx_p_432"
const API_AQ_URL = "https://www.ychsiao168.idv.tw:5001/epadata/aqx_p_432"

const siteArr = {
  "基隆市": ["基隆"],
  "臺北市": ["士林", "大同", "中山", "古亭", "松山", "陽明", "萬華"],
  "新北市": ["三重", "土城", "永和", "汐止", "板橋", "林口", "淡水", "菜寮", "新店", "新莊", "萬里", "新北(樹林)", "富貴角"],
  "桃園市": ["大園", "中壢", "平鎮", "桃園", "龍潭", "觀音"],
  "新竹市": ["新竹", "新竹(北區)"],
  "新竹縣": ["竹東", "湖口"],
  "苗栗縣": ["三義", "苗栗", "頭份"],
  "臺中市": ["大里", "西屯", "沙鹿", "忠明", "豐原"],
  "彰化縣": ["二林", "彰化", "線西", "彰化(員林)", "彰化(大城)"],
  "南投縣": ["竹山", "南投", "埔里"],
  "雲林縣": ["斗六", "崙背", "麥寮", "臺西"],
  "嘉義市": ["嘉義"],
  "嘉義縣": ["朴子", "新港"],
  "臺南市": ["安南", "善化", "新營", "臺南", "臺南(麻豆)", "臺南(北門)"],
  "高雄市": ["大寮", "小港", "仁武", "左營", "林園", "前金", "前鎮", "美濃", "復興", "楠梓", "鳳山", "橋頭"],
  "屏東縣": ["屏東", "恆春", "潮州", "屏東(琉球)", "屏東(枋寮)"],
  "宜蘭縣": ["冬山", "宜蘭"],
  "花蓮縣": ["花蓮"],
  "臺東縣": ["臺東", "關山"],
  "澎湖縣": ["馬公"],
  "金門縣": ["金門"],
  "連江縣": ["馬祖"],
}

const locationArr = Object.keys(siteArr)


const AirQuality = () => {

  const [gRecords, setRecords] = useState({})
  const [gLocation, setLocation] = useState(locationArr[0])
  const [gSite, setSite] = useState(siteArr[locationArr[0]][0])
  const classes = useStyles()
  const tableTheme = createTheme ({
    overrides: {
      MuiTableCell: {
        root: {
          margin: '1px',
          padding: '1px',
        },
      },
    },
  });

  useEffect(() => {
    // do once only
    //console.log("Fetching")
    fetch(encodeURI(API_AQ_URL))
      .then(data => data.json())
      .then(({ records }) => {
        // console.log(records)
        setRecords(records)

        // get all locations and sites  // TODO
        // let ttt = {}
        // let count = 0
        // records.forEach(x => {
        //   const county = x.County
        //   const site = x.SiteName
        //   if (!ttt[county]) {
        //     ttt[county] = []
        //     ttt[county].push(site)
        //   } else {
        //     ttt[county].push(site)
        //   }
        //   count++
        // })
        // console.log(ttt, count)
        // end
      })
      .catch(err => console.log(err))

  }, [])

  const AirQualityMenu = () => {

    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend">Menu</FormLabel>
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  autoWidth
                  native={true}
                  value={gLocation}
                  onChange={e => {
                    //console.log("Location onChange", e.target.value, siteArr[e.target.value][0])
                    setLocation(e.target.value);
                    setSite(siteArr[e.target.value][0])
                  }}>
                  <option value="" disabled>選擇縣市</option>
                  {
                    locationArr.map((loc, idx) => (
                      <option value={loc} key={idx}>{loc}</option>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  autoWidth
                  native={true}
                  value={gSite}
                  onChange={e => setSite(e.target.value)}>
                  <option value="" disabled>選擇測站</option>
                  {
                    siteArr[gLocation].map((loc, idx) => (
                      <option value={loc} key={idx}>{loc}</option>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    )
  }

  const _getAQIColor = (aqi) => {
    aqi = Number(aqi)
    if (aqi < 51) {
      return [0, 153, 102]
    } else if (aqi < 101) {
      return [255, 222, 51]
    } else if (aqi < 151) {
      return [255, 153, 51]
    } else if (aqi < 201) {
      return [204, 0, 51]
    } else if (aqi < 301) {
      return [128, 0, 128]
    } else if (aqi < 501) {
      return [165, 42, 42]
    }
    return [0, 153, 102]
  }

  const _fillEmptyRecord = (record) => {
    const checkArr = ["PM2.5_AVG", "PM2.5", "PM10_AVG", "PM10", "O3_8hr", "O3", "CO_8hr", "CO", "SO2", "NO2",]

    checkArr.forEach(x => {
      if (record[x] === "") {
        record[x] = "..."
      }
    })
  }


  const AQIDataRow = ({ title, name0, val0, name1, val1, sep }) => {
    return (
      <>
        <TableRow>
          <TableCell
            className={classes.tableSmallFont}
            rowSpan="2"
          >{title}</TableCell>
          <TableCell
            className={`${classes.tableSmallFont} ${!sep && classes.tableNoBorder}`}
          >
            {name0}
          </TableCell>
          <TableCell
            align="right"
            className={`${!sep && classes.tableNoBorder} ${classes.tableLargeFont}`}
          >
            {val0}
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className={classes.tableSmallFont}>{name1}</TableCell>
          <TableCell
            className={classes.tableLargeFont}
            align="right"
          >
            {val1}
          </TableCell>
        </TableRow>
      </>
    )
  }

  const AirQualityResults = ({ records }) => {

    let record = null

    if (records.length) {
      records.some(r => {
        if (r.sitename === gSite && r.county === gLocation) {
          record = r
          _fillEmptyRecord(record)
          return true
        } else {
          return false
        }
      })
    }


    if (!record) {
      return <CircularProgress />
    }

    const aqiDataRows = [
      { title: <> PM < sub > 2.5</sub> <br />(μg / m3) < br /> 細懸浮微粒</>, name0: "移動平均", val0: record["pm2.5_avg"], sep: true, name1: "小時濃度", val1: record["pm2.5"], key: "PM2.5" },
      { title: <>PM<sub>10</sub><br />(μg/m3)<br />細懸浮微粒</>, name0: "移動平均", val0: record["pm10_avg"], sep: true, name1: "小時濃度", val1: record["pm10"], key: "PM10" },
      { title: <>O<sub>3</sub><br />(ppb)<br />臭氧</>, name0: <>8小時<br />移動平均</>, val0: record["o3_8hr"], sep: true, name1: "小時濃度", val1: record["o3"], key: "O3" },
      { title: <>CO<br />(ppm) <br />一氧化碳</>, name0: <>8小時<br />移動平均</>, val0: record["co_8hr"], sep: true, name1: "小時濃度", val1: record["co"], key: "CO" },
      { title: <>SO<sub>2</sub><br />(ppb)<br />二氧化硫</>, name0: "", val0: "", sep: false, name1: "小時濃度", val1: record["so2"], key: "SO2" },
      { title: <>NO< sub >2</sub><br />(ppb)<br />二氧化氮</>, name0: "", val0: "", sep: false, name1: "小時濃度", val1: record["no2"], key: "NO2" },
    ]

    return (
      <Paper elevation={3}>
        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend">空氣品質</FormLabel>

          <Typography variant="body2" align="center">{record["publishtime"]}</Typography>
          <Box border={1} borderRadius={16} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1" align="center">{record["county"]} / {record["sitename"]}</Typography>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              border: `4px solid rgb(${_getAQIColor(record["aqi"])})`,
              width: "100px",
              height: "100px",
            }}>
              <Typography variant="h3">{record["aqi"]}
              </Typography>
            </div>
            <Typography variant="h6" align="center">{record["status"]}</Typography>
          </Box>
          <ThemeProvider theme={tableTheme}>
            <Table>
              <colgroup>
                <col style={{ width: '40%' }} />
                <col style={{ width: '50%' }} />
                <col style={{ width: '10%' }} />
              </colgroup>
              <TableBody>

                {aqiDataRows.map((row) =>
                  <AQIDataRow
                    title={row.title}
                    name0={row.name0}
                    val0={row.val0}
                    name1={row.name1}
                    val1={row.val1}
                    sep={row.sep}
                    key={row.key}
                  />
                )}

              </TableBody>
            </Table>
          </ThemeProvider>
        </FormControl>
      </Paper >
    )
  }

  return (
    <Container maxWidth="sm">
      <AirQualityMenu />
      <AirQualityResults records={gRecords} />
    </Container>
  )
}


export default AirQuality