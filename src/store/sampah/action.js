import { Alert } from "react-native"
import { api } from "../../utils/api"
import { sampahAction } from "./slice"

export const asyncReceiveSampah = () => async (dispatch) => {
  try {
    const sampah = await api.getSampah()
    dispatch(sampahAction.getSampah(sampah))
  } catch (error) {
    Alert.alert(error.message)
    dispatch(sampahAction.errorSampah(sampah))
  }
}

export const asyncEditSampah = ({ id, name, point }) => async (dispatch) => {
  try {
    const sampah = await api.putJenisSampah({ id, name, point })
    dispatch(sampahAction.editSampah(sampah))
  } catch (error) {
    Alert.alert(error.message)
    dispatch(sampahAction.errorSampah(error.message))
  }
}

export const asyncDeleteSampah = ({ id }) => async (dispatch) => {
  try {
    await api.deleteJenisSampah({ id })
    dispatch(sampahAction.deleteSampah({ id }))
  } catch (error) {
    Alert.alert(error.message)
    dispatch(sampahAction.errorSampah(error.message))
  }
}

export const asyncAddSampah = ({ name, point }, onSuccess) => async (dispatch) => {
  try {
    const sampah = await api.addSampah({ name, point })

    if (sampah) {
      onSuccess()
      dispatch(sampahAction.addSampah({ sampah }))
    }

  } catch (error) {
    Alert.alert(error.message)
    dispatch(sampahAction.errorSampah(error.message))
  }
}