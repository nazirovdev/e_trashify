import { Alert } from "react-native"
import { api } from "../../utils/api"
import { setIsLoading } from "../isLoading/action"

export const ActionType = {
  RECEIVE_JENIS_SAMPAH: 'RECEIVE_JENIS_SAMPAH',
  ADD_JENIS_SAMPAH: 'ADD_JENIS_SAMPAH',
  PUT_JENIS_SAMPAH: 'PUT_JENIS_SAMPAH',
  DELETE_JENIS_SAMPAH: 'DELETE_JENIS_SAMPAH',
}

const receiveJenisSampah = (jenisSampah) => {
  return {
    type: ActionType.RECEIVE_JENIS_SAMPAH,
    payload: {
      jenisSampah
    }
  }
}

export const addJenisSampah = (jenisSampah) => {
  return {
    type: ActionType.ADD_JENIS_SAMPAH,
    payload: {
      jenisSampah
    }
  }
}

export const asyncReceiveJenisSampah = () => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const jenisSampah = await api.getSampah()
    dispatch(receiveJenisSampah(jenisSampah))
  } catch (error) {
    Alert.alert(error.message)
  }
  dispatch(setIsLoading(false))
}

export const asyncAddJenisSampah = ({ name, point }) => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const jenisSampah = await api.addSampah({ name, point })
    dispatch(addJenisSampah(jenisSampah))
  } catch (error) {
    Alert.alert(error.message)
  }
  dispatch(setIsLoading(false))
}

export const putJenisSampah = (jenisSampah) => {
  return {
    type: ActionType.PUT_JENIS_SAMPAH,
    payload: {
      jenisSampah: jenisSampah
    }
  }
}

export const asyncPutJenisSampah = ({ id, name, point }) => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const jenisSampah = await api.putJenisSampah({ id, name, point })

    dispatch(putJenisSampah(jenisSampah))
  } catch (error) {
    Alert.alert(error.message)
  }
  dispatch(setIsLoading(false))
}

export const deleteJenisSampah = (id) => {
  return {
    type: ActionType.DELETE_JENIS_SAMPAH,
    payload: {
      id
    }
  }
}

export const asyncDeleteJenisSampah = (id) => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    await api.deleteJenisSampah({ id })
    dispatch(deleteJenisSampah(id))
  } catch (error) {
    Alert.alert(error.message)
  }
  dispatch(setIsLoading(false))
}