import { Alert } from "react-native"
import { api } from "../../utils/api"
import { detailTransaksiAction } from "./slice"

export const asyncReceiveDetailTransaksi = ({ id }) => async (dispatch) => {
  dispatch(detailTransaksiAction.getInitialState())
  try {
    const transaksi = await api.getDetailTransaksi({ id })
    dispatch(detailTransaksiAction.getDetailTransaksi({ transaksi }))
  } catch (error) {
    Alert.alert(error.message)
  }
}