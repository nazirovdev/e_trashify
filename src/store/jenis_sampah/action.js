import { Alert } from "react-native"
import { api } from "../../utils/api"
import { jenisSampahAction } from "./slice"

const asyncReceiveJenisSampah = () => async (dispatch) => {
  dispatch(jenisSampahAction.getInitialData())

  try {
    const dataSampah = await api.getSampah()

    dispatch(jenisSampahAction.getSuccessData(dataSampah))
  } catch (error) {
    Alert.alert(error.message)
    dispatch(jenisSampahAction.getFailData(error.message))
  }
}

const asyncAddJenisSampah = (payload) => async => (dispatch) => {
  dispatch(jenisSampahAction.addSampah(payload))
}


export {
  asyncReceiveJenisSampah,
  asyncAddJenisSampah
}