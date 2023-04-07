import { useState } from "react"

import "./App.css"
import logo from "./assets/logo.svg"
import Select from "./components/select"

const API_URL = import.meta.env.VITE_APP_API_URL

function App() {
  const [inputLanguage, setInputLanguage] = useState("az")
  const [outputLanguage, setOutputLanguage] = useState("en")

  const handleInputChange = (value) => {}

  const handleOutputChange = (value) => {}

  return (
    <div className="container relative mx-auto px-4 max-w-lg w-full h-full">
      <nav className="flex justify-between items-center border-b border-b-zinc-900 py-5">
        <div className="logo flex items-center">
          <img className="w-6 h-6 mr-2" src={logo} alt="Logo" />
          <h1 className="font-bold text-lg text-white ">Translator</h1>
        </div>
        <span className="text-md font-mediums text-gray-500">v1</span>
      </nav>

      <div className="translate">
        <div className="language mt-8 mb-4 grid items-stretch justify-between grid-cols-2 gap-4">
          <Select value={inputLanguage} handleChange={handleInputChange} />
          <Select value={outputLanguage} handleChange={handleOutputChange} />
        </div>
      </div>
    </div>
  )
}

export default App
