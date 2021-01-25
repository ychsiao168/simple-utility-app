import React, { useState, useEffect } from 'react'

const API_WEATHERFC_URL = "https://simple-utility-api.herokuapp.com/weatherfc"
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
    let isMounted = true  // fix warning
    fetch(encodeURI(`${API_WEATHERFC_URL}/${location}`))
      .then(data => data.json())
      .then(({ records }) => {
        if (isMounted) {
          setRecords(records)
        }
      })
      .catch(err => console.log(err))

    return () => { isMounted = false };
  }, [location])

  if (!gRecords) {
    return <div></div>
  }

  const { locationName } = gRecords.location[0]
  return (
    <div className="flex flex-column w-40 center">
      <select
        className="pa3 ma3 br3"
        onChange={(e) => { setLocation(e.target.value) }}
        defaultValue={location}
      >
        <option value="" disabled>選擇縣市</option>
        {
          locationArr.map((loc, idx) => (
            <option value={loc} key={idx}>{loc}</option>
          ))
        }
      </select>

      <fieldset className="flex flex-row justify-center pa3 ma3 br3">
        <legend>{locationName}</legend>
        <Weathercard records={gRecords} index={0} />
        <Weathercard records={gRecords} index={1} />
        <Weathercard records={gRecords} index={2} />
      </fieldset>
    </div>
  )
}


const Weathercard = ({ records, index }) => {

  if (!records.location) {
    return <div></div>
  }

  const { weatherElement } = records.location[0]

  const [wx, pop, mint, ci, maxt] = weatherElement.map(w => (w.time[index].parameter.parameterName))

  const { startTime, endTime } = weatherElement[0].time[index]
  const wxIndex = weatherElement[0].time[index].parameter.parameterValue

  return (
    <div className="flex flex-column ba ma3 br3 pa3" style={{ "width": "150px", "height": "200px" }}>
      <div>{getTimeString(startTime, endTime)}</div>
      <img src={getWxImgUrl(wxIndex)} alt={wx} title={wx} height="100px" />
      <div>🌡️ {mint} - {maxt}℃</div>
      <div>☂ {pop}%</div>
      <div>{ci}</div>
    </div>
  )
}

const getTimeString = (start, end) => {
  const today = new Date().toISOString().substring(0, 10)
  const [sDate, sHour] = start.split(" ")

  if (sDate === today && (sHour === "06:00:00" || sHour === "12:00:00")) {
    return ("今日白天")
  } else if (sDate === today && sHour === "18:00:00") {
    return ("今晚明晨")
  } else if (sDate !== today && sHour === "06:00:00") {
    return ("明日白天")
  } else if (sDate !== today && sHour === "18:00:00") {
    return ("明日晚上")
  } else {
    console.log("〇〇〇〇", sDate, sHour)
    return ("〇〇〇〇")
  }
}

const getWxImgUrl = (index) => {  // TODO
  return `${process.env.PUBLIC_URL}/images/${index.toString().padStart(2, "0")}.svg`
}

export default Weathercards