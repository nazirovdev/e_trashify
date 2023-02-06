import { Alert } from "react-native"
import { api } from "../../utils/api"
import { authUserAction } from "./slice"

export const asyncSetAuthAdmin = ({ email, password }) => async (dispatch) => {
  dispatch(authUserAction.getInitialData())

  try {
    const token = await api.loginAdmin({ email, password })
    await api.setAccessToken(token)

    const authUser = await api.getOwnProfileAdmin()
    dispatch(authUserAction.setAuthUser(authUser))
  } catch (error) {
    Alert.alert(error.message)
    dispatch(authUserAction.errorAuthUser(error.message))
  }
}

export const asyncSetAuthNasabah = ({ email, password }) => async (dispatch) => {
  dispatch(authUserAction.getInitialData())

  try {
    const token = await api.loginNasabah({ email, password })
    await api.setAccessToken(token)

    const authUser = await api.getOwnProfileNasabah()
    dispatch(authUserAction.setAuthUser(authUser))
  } catch (error) {
    Alert.alert(error.message)
    dispatch(authUserAction.errorAuthUser(error.message))
  }
}

export const asyncUnsetAuthUser = () => async (dispatch) => {
  await api.removeAccessToken()
  dispatch(authUserAction.unsetAuthUser())
}