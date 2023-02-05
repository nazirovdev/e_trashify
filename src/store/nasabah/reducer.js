import { ActionType } from "./action";

export const nasabahReducer = (nasabah = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_NASABAH:
      return action.payload.nasabah
    case ActionType.ADD_NASABAH:
      return [...nasabah, action.payload.nasabah]
    case ActionType.ADD_NASABAH:
      return [...nasabah, action.payload.nasabah]
    case ActionType.DELETE_NASABAH:
      return nasabah.filter((n) => n.id !== action.payload.nasabah)
    default:
      return nasabah
  }
}