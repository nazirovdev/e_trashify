import { Alert } from "react-native"
import { api } from "../../utils/api"
import { transaksiAction } from "./slice"

export const asyncReceiveTransaksi = () => async (dispatch) => {
  try {
    const transaksi = await api.getAllTransaksi()
    dispatch(transaksiAction.getTransaksi({ transaksi }))
  } catch (error) {
    Alert.alert(error.message)
  }
}

export const asyncSetStatusTransaksi = (id, status) => async (dispatch) => {
  try {
    await api.confirmStatus({ id, status })
    dispatch(transaksiAction.setStatusTransaksi({ transaksi: { id, status } }))
  } catch (error) {
    Alert.alert(error.message)
  }
}