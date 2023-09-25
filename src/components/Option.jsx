import React from "react"

import { languages, ISO } from "../constants"

function Option({ value, onClick, selected }) {
  return (
    <button
      onClick={(e) => onClick(value)}
      type="button"
      className={`option flex items-center px-4 py-2 ${
        selected == value ? "bg-blue-800" : "bg-zinc-900"
      } my-1 rounded-xl`}
    >
      <div
        className="flag rounded-full w-10 h-10 relative 
              overflow-hidden flex items-center justify-center border border-gray-400"
      >
        <img
          className="object-cover h-10"
          src={`https://flagcdn.com/${ISO[value]}.svg`}
        />
      </div>
      <p className="text-white ml-6">{languages[value]}</p>
    </button>
  )
}

export default Option
