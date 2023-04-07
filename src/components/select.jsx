import React, { useState } from "react"

import { languages, ISO } from "../constants"
import Option from "./option"

function Select({ value, handleChange }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(value)

  function handleClick(e) {
    setOpen(!open)
  }

  function onClick(value) {
    setSelected(value)
    setOpen(false)
  }

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        type="button"
        className="main w-full flex items-center overflow-hidden bg-zinc-900 py-2 px-6 rounded-lg border border-zinc-600"
      >
        <div className="flag rounded-full w-10 h-10 relative overflow-hidden flex items-center justify-center border border-gray-400">
          <img
            className="object-cover h-10"
            src={`https://flagcdn.com/${ISO[selected]}.svg`}
          />
        </div>
        <p className="text-white ml-4 ">{languages[selected]}</p>
      </button>

      {/* OPTIONS */}

      <div
        className={`options absolute left-0 max-w-lg  bg-stone-950 ${
          open ? "bottom-0" : "bottom-[-100%]"
        } w-full h-[70vh] overflow-scroll 
      px-6 pt-4 rounded-t-3xl border border-zinc-500 flex flex-col transition-all`}
      >
        {Object.keys(languages).map((value, key) => {
          return (
            <Option
              key={key}
              value={value}
              selected={selected}
              onClick={onClick}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Select
