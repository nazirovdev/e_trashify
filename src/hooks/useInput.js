import { useState } from "react"

export const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)

  const resetValue = () => {
    setValue('')
  }

  return [value, setValue, resetValue]
}