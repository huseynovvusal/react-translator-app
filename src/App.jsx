import { useEffect } from "react"
import { useState } from "react"

import "./App.css"
import logo from "./assets/logo.svg"
import FormField from "./components/FormField"
import Select from "./components/Select"
import { languages } from "./constants"

// https://rapidapi.com/googlecloud/api/google-translate1/

const API_URL = import.meta.env.VITE_APP_API_URL

function App() {
  const [inputLanguage, setInputLanguage] = useState("az")
  const [outputLanguage, setOutputLanguage] = useState("en")

  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [translateTimeout, setTranslateTimeout] = useState(null)

  const handleInputChange = (value) => {
    setInputLanguage(value)
  }

  const handleOutputChange = (value) => {
    setOutputLanguage(value)
  }

  const handleTranslateChange = (e) => {
    clearTimeout(translateTimeout)

    setInput(e.target.value)

    setTranslateTimeout(
      setTimeout(() => {
        // translate()
      }, 500)
    )
  }

  const translate = async () => {}

  return (
    <div className="container relative mx-auto px-4 max-w-lg w-full h-full">
      <nav className="flex justify-between items-center border-b border-b-zinc-900 py-5">
        <div className="logo flex items-center">
          <img className="w-6 h-6 mr-2" src={logo} alt="Logo" />
          <h1 className="font-bold text-lg text-white ">Translator</h1>
        </div>
        <span className="text-md font-mediums text-gray-500">v1</span>
      </nav>

      <div className="language mt-8 mb-4 w-full grid items-stretch justify-between grid-cols-2 gap-4">
        <Select value={inputLanguage} handleChange={handleInputChange} />
        <Select value={outputLanguage} handleChange={handleOutputChange} />
      </div>

      <div className="translate">
        <p className="text-sm text-gray-600 mt-6 mb-4">
          Translate From{" "}
          <span className="font-normal text-gray-300">
            ({languages[inputLanguage]})
          </span>
        </p>
        <FormField onChange={handleTranslateChange} value={input} />
        <p className="text-sm text-gray-600 mt-6 mb-4">
          Translate To{" "}
          <span className="font-normal text-gray-300">
            ({languages[outputLanguage]})
          </span>
        </p>

        <FormField value={output} readonly={true} />
      </div>
    </div>
  )
}

export default App
