import React from "react"

function FormField({ value, onChange = null, readonly = false }) {
  return readonly ? (
    <textarea
      className="bg-zinc-900 border border-zinc-600 resize-none w-full p-4 max-sm:p-2 max-sm:px-4 outline-none rounded-xl text-sm
      text-white
      "
      rows="7"
      defaultValue={value}
      readOnly
      placeholder="Translation result"
    ></textarea>
  ) : (
    <textarea
      className="bg-zinc-900 border border-zinc-600 resize-none w-full p-4 max-sm:p-2 max-sm:px-4 outline-none rounded-xl text-sm
      text-white
      "
      rows="7"
      onKeyUp={onChange}
      defaultValue={value}
      placeholder="Write text you want to translate"
    ></textarea>
  )
}

export default FormField
