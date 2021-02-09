import React, { useState, useEffect } from 'react'

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


const Weathercards = () => {

  const [location, setLocation] = useState("臺北市"); // default location
  const [gRecords, setRecords] = useState(null);

  useEffect(() => {
    fetch(encodeURI(`${API_WEATHERFC_URL}/`))
      .then(data => data.json())
      .then(({ records }) => {
        setRecords(records)
      })
      .catch(err => console.log(err))

  }, [])

  if (!gRecords) {
    return <div>Loading</div>
  }


  const locationRecord = findLocationRecord(gRecords, location)
  const { locationName } = locationRecord

  return (
    <div>
      <select autoFocus
        className="pa3 ma3 br3 w-40"
        onChange={(e) => { setLocation(e.target.value) }}
        value={location}
      >
        <option value="" disabled>選擇縣市</option>
        {
          locationArr.map((loc, idx) => (
            <option value={loc} key={idx}>{loc}</option>
          ))
        }
      </select>

      <fieldset className="flex flex-row flex-wrap justify-center center pa3 ma3 br3 w-40">
        <legend>{locationName}</legend>
        <Weathercard locRecord={locationRecord} index={0} />
        <Weathercard locRecord={locationRecord} index={1} />
        <Weathercard locRecord={locationRecord} index={2} />
      </fieldset>
    </div>
  )
}


const Weathercard = ({ locRecord, index }) => {

  if (!locRecord) {
    return <div></div>
  }

  const { weatherElement } = locRecord

  const [wx, pop, mint, ci, maxt] = weatherElement.map(w => (w.time[index].parameter.parameterName))

  const { startTime, endTime } = weatherElement[0].time[index]
  const wxIndex = weatherElement[0].time[index].parameter.parameterValue
  const titleTimeString =
    `${startTime.substring(5, 16).replace("-", "/").replace(" ", "-")} ~ \
${endTime.substring(5, 16).replace("-", "/").replace(" ", "-")}`

  return (
    <div className="flex flex-column ma3 br3 pa3 bg-near-white" style={{ "width": "150px", "height": "200px" }}>
      <div title={titleTimeString}> {getTimeString(startTime, endTime)} </div>
      <img src={getWxImgUrl(wxIndex, startTime)} alt={wx} title={wx} height="100px" />
      <div>🌡️ {mint} - {maxt}℃</div>
      <div>☂ {pop}%</div>
      <div>{ci}</div>
    </div>
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
  records.location.some(loc => {
    if (loc.locationName === locName) {
      retObj = Object.assign({}, loc)
      return true // it's break
    }
    return false  // it's continue
  })

  return retObj
}

export default Weathercards