import { Alert } from "react-native"
import { api } from "../../utils/api"
import { transaksiAction } from "./slice"

const asyncSetDataTransaksi = () => async (dispatch) => {
  dispatch(transaksiAction.getInitialData())
  try {
    const result = await api.getTransaksi()
    dispatch(transaksiAction.getSuccessData(result))
  } catch (error) {
    Alert.alert(error.message)
    dispatch(transaksiAction.getErrorData(error.message))
  }
}

const asyncAddDataTransaksi = ({ idJenisSampah, description, berat }, onSuccess) => async (dispatch) => {
  try {
    const result = await api.addTransaksi({ idJenisSampah, description, berat })

    if (!result.error) {
      onSuccess()
    }
  } catch (error) {
    Alert.alert(error.message)
    dispatch(transaksiAction.getErrorData(error.message))
  }
}

export {
  asyncSetDataTransaksi,
  asyncAddDataTransaksi
}