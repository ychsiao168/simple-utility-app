import React, { useState, useRef } from "react"
import { md5, sha256, crc32 } from "hash-wasm";

const INIT_STATE = { md5: "", sha256: "", crc32: "" }

const Filehash = () => {

  const [hashResult, setHashResult] = useState(INIT_STATE)
  const [fileBuf, setFilebuf] = useState(null)
  const fileName = useRef("")
  const [hashStatus, setHashStatus] = useState("...")
  const [enBtnGo, setenBtnGo] = useState(false)

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

  return (
    <div className="flex flex-column justify-center center w-60">
      <fieldset className="ba br3 ma3 flex flex-column items-center">
        <legend>Inputs</legend>
        <label className="bg-lightest-blue br3 w-60 db tc" style={{ "wordWrap": "break-word" }}>
          File: {fileName.current}
          <input
            className="w-80"
            style={{ "opacity": "0" }}
            type="file"
            onChange={handleChooseFile}
            disabled={enBtnGo}
          />
        </label>

        <button
          className="ba br3 ma2 w-60"
          disabled={!enBtnGo}
          onClick={handleGo}
        >
          <h3>Go</h3>
        </button>
      </fieldset>

      <fieldset className="ba br3 ma3">
        <legend>Outputs</legend>
        <table className="center">
          <tbody>
            <tr>
              <td className="f7">MD5</td>
              <td>
                <textarea
                  className="tr br3"
                  readOnly={true}
                  rows="2" cols="15"
                  value={hashResult.md5}
                />
              </td>
            </tr>
            <tr>
              <td className="f7">SHA256</td>
              <td>
                <textarea
                  className="tr br3"
                  readOnly={true}
                  rows="4" cols="15"
                  value={hashResult.sha256}
                />
              </td>
            </tr>
            <tr>
              <td className="f7">CRC32</td>
              <td>
                <textarea
                  className="tr br3"
                  readOnly={true}
                  rows="2" cols="15"
                  value={hashResult.crc32}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>

      <fieldset className="ba br3 ma3">
        <legend>Status</legend>
        {hashStatus}
      </fieldset>
    </div>
  )
}

export default Filehash
