import { Alert } from "react-native"
import { api } from "../../utils/api"

export const ActionType = {
  RECEIVE_NASABAH: 'RECEIVE_NASABAH',
  ADD_NASABAH: 'ADD_NASABAH',
  DELETE_NASABAH: 'DELETE_NASABAH',
}

export const receiveNasabah = (nasabah) => {
  return {
    type: ActionType.RECEIVE_NASABAH,
    payload: {
      nasabah
    }
  }
}

export const asyncReceiveNasbah = () => async (dispatch) => {
  try {
    const result = await api.getNasabah()
    dispatch(receiveNasabah(result))
  } catch (error) {
    Alert.alert(error.message)
  }
}

export const addNasabah = (nasabah) => {
  return {
    type: ActionType.ADD_NASABAH,
    payload: {
      nasabah
    }
  }
}

export const asyncAddNasabah = ({ name, email, address, password }) => async (dispatch) => {
  try {
    const newNsabah = await api.addNasabah({ name, email, address, password })
    dispatch(addNasabah(newNsabah))
  } catch (error) {
    Alert.alert(error.message)
  }
}

export const deleteNasabah = (id) => {
  return {
    type: ActionType.DELETE_NASABAH,
    payload: {
      nasabah: id
    }
  }
}

export const asyncDeleteNasabah = (id) => async (dispatch) => {
  try {
    await api.deleteNasabah({ id })
    dispatch(deleteNasabah(id))
  } catch (error) {
    Alert.alert(error.message)
  }
}