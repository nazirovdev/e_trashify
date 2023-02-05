import { ActionType } from "./action"

export const jenisSampahReducer = (jenisSampah = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_JENIS_SAMPAH:
      return action.payload.jenisSampah
    case ActionType.ADD_JENIS_SAMPAH:
      return [...jenisSampah, action.payload.jenisSampah]
    case ActionType.DELETE_JENIS_SAMPAH:
      return jenisSampah.filter((sampah) => sampah.id !== action.payload.id)
    case ActionType.PUT_JENIS_SAMPAH:
      return jenisSampah.map((sampah) => {
        if (sampah.id === action.payload.jenisSampah.id) {
          return {
            ...sampah,
            name: action.payload.jenisSampah.name,
            point: action.payload.jenisSampah.point,
          }
        }

        return sampah
      })
    default:
      return jenisSampah
  }
}