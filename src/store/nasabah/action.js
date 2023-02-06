import { Alert } from "react-native"
import { api } from "../../utils/api"
import { nasabahAction } from "./slice"

export const asyncReceiveNasabah = () => async (dispatch) => {
  dispatch(nasabahAction.getInitialNasabah())
  try {
    const nasabah = await api.getNasabah()
    dispatch(nasabahAction.getDataNasabah(nasabah))
  } catch (error) {
    Alert.alert(error.message)
  }
}

export const asyncDeleteNasabah = (id) => async (dispatch) => {
  await api.deleteNasabah({ id })
  dispatch(nasabahAction.deleteNasabah({ nasabah: { id } }))
}

export const asyncAddNasabah = ({ name, email, password, address }, onSuccess) => async (dispatch) => {
  try {
    const nasabah = await api.addNasabah({ name, email, password, address })

    if (nasabah) {
      dispatch(nasabahAction.addNasabah({ nasabah: { ...nasabah, point: 0 } }))
      onSuccess()
    }
  } catch (error) {
    Alert.alert(error.message)
  }
}