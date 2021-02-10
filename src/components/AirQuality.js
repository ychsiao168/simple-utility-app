import React, { useState, useEffect } from 'react'

//const API_AQ_URL = "https://simple-utility-api.herokuapp.com/epadata/aqx_p_432"
//const API_WEATHERFC_URL = "http://127.0.0.1:3001/epadata/aqx_p_432"
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
      <fieldset className="ba br3 ma3">
        <legend> 測站 </legend>
        <select
          className="pa2 ma2 br3 w-40"
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
          className="pa2 ma2 br3 w-40"
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

  const _getAQIColor = (aqi) => {
    aqi = Number(aqi)
    if (aqi < 51) {
      return "b--green"
    } else if (aqi < 101) {
      return "b--gold"
    } else if (aqi < 151) {
      return "b--orange"
    } else if (aqi < 201) {
      return "b--hot-pink"
    } else if (aqi < 301) {
      return "b--purple"
    } else if (aqi < 501) {
      return "b--light-purple"
    }
    return "b--navy"
  }

  const _fillEmptyRecord = (record) => {
    const checkArr = ["PM2.5_AVG", "PM2.5", "PM10_AVG", "PM10", "O3_8hr", "O3", "CO_8hr", "CO", "SO2", "NO2",]

    checkArr.forEach(x => {
      if (record[x] === "") {
        record[x] = "..."
      }
    })
  }

  const AirQualityInfoCard = ({ records }) => {

    let record = null

    if (records.length) {
      records.some(r => {
        if (r.SiteName === gSite && r.County === gLocation) {
          record = r
          _fillEmptyRecord(record)
          return true
        } else {
          return false
        }
      })
    }


    if (!record) {
      return <div>Loading</div>
    }


    return (
      <fieldset className="ba br3 ma3">
        <legend> 空氣品質 </legend>
        {record["PublishTime"]}
        <div className="ba br3 ma3 pa3">

          <div style={{ "color": "#14b4d0" }}>
            {record["County"]} / {record["SiteName"]}
          </div>

          <div className={"br-100 ba bw2 h4 w4 center pt4 f1 " + _getAQIColor(record["AQI"])}
          >
            {record["AQI"]}

          </div>

          <div>
            {record["Status"]}
          </div>

        </div>

        <table className="w-100">
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">PM<sub>2.5</sub> <br></br> (μg/m3) <br></br> 細懸浮微粒</td>
              <td className="f7 bb b--black-20">移動平均</td>
              <td className="f5 bb b--black-20">{record["PM2.5_AVG"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f5 bb b--black-20">{record["PM2.5"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">PM<sub>10</sub> <br></br> (μg/m3) <br></br> 懸浮微粒</td>
              <td className="f7 bb b--black-20">移動平均</td>
              <td className="f5 bb b--black-20">{record["PM10_AVG"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f5 bb b--black-20">{record["PM10"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">O<sub>3</sub> <br></br> (ppb) <br></br> 臭氧</td>
              <td className="f7 bb b--black-20">8小時<br />移動平均</td>
              <td className="f5 bb b--black-20">{record["O3_8hr"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f5 bb b--black-20">{record["O3"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">CO <br></br> (ppm) <br></br> 一氧化碳</td>
              <td className="f7 bb b--black-20">8小時<br />移動平均</td>
              <td className="f5 bb b--black-20">{record["CO_8hr"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f5 bb b--black-20">{record["CO"]}</td>
            </tr>


            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">SO<sub>2</sub> <br></br> (ppb) <br></br> 二氧化硫</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f5 bb b--black-20">{record["SO2"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">NO<sub>2</sub> <br></br> (ppb) <br></br> 二氧化氮</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f5 bb b--black-20">{record["NO2"]}</td>
            </tr>
          </tbody>
        </table>
      </fieldset >
    )
  }

  return (
    <div className="flex flex-column justify-center center mw6">
      <DropdownMenu />
      <AirQualityInfoCard records={gRecords} />
    </div>
  )
}


export default AirQuality