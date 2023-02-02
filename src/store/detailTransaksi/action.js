import { Alert } from "react-native"
import { api } from "../../utils/api"
import { detailTransaksiAction } from "./slice"

const asyncSetDetailTransaksi = (id) => async (dispatch) => {
  dispatch(detailTransaksiAction.setInitialData())
  try {
    const detailTransaksi = await api.getDetailTransaksi({ id })
    dispatch(detailTransaksiAction.setSuccessData(detailTransaksi))
  } catch (error) {
    Alert.alert(error.message)
    dispatch(detailTransaksiAction.setErrorData(error.message))
  }
}

export {
  asyncSetDetailTransaksi
}