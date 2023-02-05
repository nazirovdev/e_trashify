import { Alert } from "react-native"
import { api } from "../../utils/api"

export const ActionType = {
  RECEIVE_TRANSAKSI: 'RECEIVE_TRANSAKSI',
  ACTION_TRANSAKSI: 'ACTION_TRANSAKSI',
}

export const receiveTransakti = (transaksi) => {
  return {
    type: ActionType.RECEIVE_TRANSAKSI,
    payload: {
      transaksi
    }
  }
}

export const actionTransakti = (idTransaksi, action) => {
  return {
    type: ActionType.RECEIVE_TRANSAKSI,
    payload: {
      transaksi: {
        idTransaksi,
        action
      }
    }
  }
}

export const asyncReceiveTransaksi = () => async (dispatch) => {
  try {
    const transaksi = await api.getAllTransaksi()
    dispatch(receiveTransakti(transaksi))
  } catch (error) {
    Alert.alert(error.message)
  }
}