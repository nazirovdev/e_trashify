import { Alert } from "react-native"
import { api } from "../../../utils/api"
import { authNasabahAction } from "./slice"

const asyncSetAuthNasabah = ({ email, password }) => async (dispatch) => {
  dispatch(authNasabahAction.setInitialData())

  try {
    const token = await api.loginNasabah({ email, password })
    await api.setAccessToken(token)

    const nasabah = await api.getOwnProfileNasabah()
    dispatch(authNasabahAction.setSuccessData(nasabah))
  } catch (error) {
    Alert.alert(error.message)
    dispatch(authNasabahAction.setErrorData(error.message))
  }
}

const asyncUnsetAuthNasabah = () => async (dispatch) => {
  await api.removeAccessToken()

  dispatch(authNasabahAction.setSuccessData(null))
}

export {
  asyncSetAuthNasabah,
  asyncUnsetAuthNasabah
}