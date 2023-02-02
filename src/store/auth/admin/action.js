import { Alert } from "react-native"
import { api } from "../../../utils/api"
import { authAdminAction } from "./slice"

const asyncSetAuthAdmin = ({ email, password }) => async (dispatch) => {
  dispatch(authAdminAction.setInitialData())

  try {
    const token = await api.loginAdmin({ email, password })
    await api.setAccessToken(token)

    const admin = await api.getOwnProfileAdmin()
    dispatch(authAdminAction.setSuccessData(admin))
  } catch (error) {
    Alert.alert(error.message)
    dispatch(authAdminAction.setErrorData(error.message))
  }
}

const asyncUnsetAuthAdmin = () => async (dispatch) => {
  await api.removeAccessToken()

  dispatch(authAdminAction.setSuccessData(null))
}

export {
  asyncSetAuthAdmin,
  asyncUnsetAuthAdmin
}