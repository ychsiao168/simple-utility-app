import React, { useState, useEffect } from 'react'

const API_AQ_URL = "https://simple-utility-api.herokuapp.com/epadata/aqx_p_432"

const siteArr = {
  "基隆市": ["基隆"],
  "臺北市": ["士林", "大同", "中山", "古亭", "松山", "陽明", "萬華"],
  "新北市": ["汐止", "萬里", "新店", "土城", "板橋", "新莊", "菜寮", "林口", "淡水", "三重", "永和", "富貴角", "新北(樹林)", "永和(環河)"],
  "南投縣": ["南投", "竹山", "埔里"],
  "嘉義市": ["嘉義"],
  "嘉義縣": ["新港", "朴子"],
  "宜蘭縣": ["宜蘭", "冬山"],
  "屏東縣": ["屏東", "潮州", "恆春", "屏東(琉球)", "屏東(枋寮)"],
  "彰化縣": ["彰化", "線西", "二林", "彰化(員林)", "彰化(大城)"],
  "新竹市": ["新竹"],
  "新竹縣": ["湖口", "竹東"],
  "桃園市": ["桃園", "大園", "觀音", "平鎮", "龍潭", "中壢"],
  "澎湖縣": ["馬公"],
  "臺中市": ["豐原", "沙鹿", "大里", "忠明", "西屯"],
  "臺南市": ["新營", "善化", "安南", "臺南", "臺南(麻豆)", "臺南(北門)"],
  "臺東縣": ["臺東", "關山"],
  "花蓮縣": ["花蓮"],
  "苗栗縣": ["頭份", "苗栗", "三義"],
  "連江縣": ["馬祖"],
  "金門縣": ["金門"],
  "雲林縣": ["斗六", "崙背", "臺西", "麥寮"],
  "高雄市": ["美濃", "橋頭", "仁武", "鳳山", "大寮", "林園", "楠梓", "左營", "前金", "前鎮", "小港", "復興"],
}

const locationArr = Object.keys(siteArr)


const AirQuality = () => {

  const [gRecords, setRecords] = useState({})
  const [gLocation, setLocation] = useState(locationArr[0])
  const [gSite, setSite] = useState(siteArr[locationArr[0]][0])

  useEffect(() => {
    // do once only
    // console.log("Fetching")
    fetch(encodeURI(API_AQ_URL))
      .then(data => data.json())
      .then(({ records }) => {
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

  const DropdownMenu = () => {

    return (
      <fieldset className="flex flex-row flex-wrap w-60 center justify-center br3">
        <legend> 測站 </legend>
        <select
          className="pa2 ma2 br3"
          onChange={e => {
            //console.log("Location onChange", e.target.value, siteArr[e.target.value][0])
            setLocation(e.target.value);
            setSite(siteArr[e.target.value][0])
          }}
          value={gLocation}
        >
          <option value="" disabled>選擇縣市</option>
          {
            locationArr.map((loc, idx) => (
              <option value={loc} key={idx}>{loc}</option>
            ))
          }
        </select>

        <select
          className="pa2 ma2 br3"
          onChange={e => setSite(e.target.value)}
          value={gSite}
        >
          <option value="" disabled>選擇測站</option>
          {
            siteArr[gLocation].map((loc, idx) => (
              <option value={loc} key={idx}>{loc}</option>
            ))
          }
        </select>

      </fieldset >
    )
  }


  const AirQualityInfoCard = ({ records }) => {

    let record = null

    if (records.length) {
      records.forEach(r => {
        if (r.SiteName === gSite && r.County === gLocation) {
          record = r
        }
      })
    }


    if (!record) {
      return <div>Loading</div>
    }


    return (
      <fieldset className="flex flex-column w-60 center justify-center ma3 pa3 br3">
        {record["PublishTime"]} <br></br>
        {record["County"]} / {record["SiteName"]}<br></br>
        <h1>{record["AQI"]}</h1><br></br>
        {record["Status"]}<br></br>
        PM2.5 移動平均{record["PM2.5_AVG"]}<br></br>
        PM2.5 小時濃度{record["PM2.5"]}<br></br>

        PM10 移動平均{record["PM10_AVG"]}<br></br>
        PM10 小時濃度{record["PM10"]}<br></br>

        O3 8小時移動平均{record["O3_8hr"]}<br></br>
        O3 小時濃度{record["O3"]}<br></br>

        CO 8小時移動平均{record["CO_8hr"]}<br></br>
        CO 小時濃度{record["CO"]}<br></br>

        SO2 小時濃度{record["SO2"]}<br></br>

        NO2 小時濃度{record["NO2"]}<br></br>
      </fieldset>
    )
  }

  return (
    <div>
      <DropdownMenu />
      <AirQualityInfoCard records={gRecords} />
    </div>
  )
}


export default AirQuality