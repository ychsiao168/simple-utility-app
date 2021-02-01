import React, { useState, useEffect } from 'react'

const API_AQ_URL = "https://176.122.164.163:5001/epadata/aqx_p_432"

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
      <fieldset className="flex flex-column w-60 center justify-center ma2 pa2 br3">
        {record["PublishTime"]} <br></br><br></br>
        <div className="ba br3">
          {record["County"]} / {record["SiteName"]}
          <h1>{record["AQI"]}</h1>
          {record["Status"]}
        </div>
        <br></br>

        <table>
          <tbody>
            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">PM<sub>2.5</sub> <br></br> (μg/m3) <br></br> 細懸浮微粒</td>
              <td className="f7">移動平均</td>
              <td className="f3">{record["PM2.5_AVG"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f3 bb b--black-20">{record["PM2.5"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">PM<sub>10</sub> <br></br> (μg/m3) <br></br> 懸浮微粒</td>
              <td className="f7">移動平均</td>
              <td className="f3">{record["PM10_AVG"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f3 bb b--black-20">{record["PM10"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">O<sub>3</sub> <br></br> (ppb) <br></br> 臭氧</td>
              <td className="f7">8小時移動平均</td>
              <td className="f3">{record["O3_8hr"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f3 bb b--black-20">{record["O3"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">CO <br></br> (ppm) <br></br> 一氧化碳</td>
              <td className="f7">8小時移動平均</td>
              <td className="f3">{record["CO_8hr"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f3 bb b--black-20">{record["CO"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">SO<sub>2</sub> <br></br> (ppb) <br></br> 二氧化硫</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f3 bb b--black-20">{record["SO2"]}</td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20" rowSpan="2">NO<sub>2</sub> <br></br> (ppb) <br></br> 二氧化氮</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="f7 bb b--black-20">小時濃度</td>
              <td className="f3 bb b--black-20">{record["NO2"]}</td>
            </tr>
          </tbody>
        </table>
      </fieldset >
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