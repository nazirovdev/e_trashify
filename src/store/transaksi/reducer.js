import { ActionType } from "./action"

export const transaksiReducer = (transaksi = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_TRANSAKSI:
      return action.payload.transaksi
    default:
      return transaksi
  }
}