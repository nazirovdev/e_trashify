import { Alert } from "react-native"
import { api } from "../../utils/api"
import { setIsLoading } from "../isLoading/action"

export const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
  LOADING_AUTH_USER: 'LOADING_AUTH_USER',
  ERROR_AUTH_USER: 'ERROR_AUTH_USER',
}

export const setAuthUser = (authUser) => {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser
    }
  }
}

export const asyncSetAuthAdmin = ({ email, password }) => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const token = await api.loginAdmin({ email, password })

    if (token) {
      await api.setAccessToken(token)

      const authAdmin = await api.getOwnProfileAdmin()
      dispatch(setAuthUser(authAdmin))
    }
  } catch (error) {
    dispatch(setAuthUser(null))
    Alert.alert(error.message)
  }
  dispatch(setIsLoading(false))
}

export const asyncSetAuthNasabah = ({ email, password }) => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const token = await api.loginNasabah({ email, password })
    await api.setAccessToken(token)

    const authNasabah = await api.getOwnProfileNasabah()
    dispatch(setAuthUser(authNasabah))
  } catch (error) {
    Alert.alert(error.message)
  }
  dispatch(setIsLoading(false))
}

export const unsetAuthUser = () => {
  return {
    type: ActionType.UNSET_AUTH_USER
  }
}