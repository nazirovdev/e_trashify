import { api } from "../../utils/api"
import { authAdminAction } from "../auth/admin/slice"
import { authNasabahAction } from "../auth/nasabah/slice"
import { preloadAction } from "./slice"

export const asyncIsPreload = () => async (dispatch) => {
  try {
    const authUser = await api.getOwnProfileNasabah()
    const authAdmin = await api.getOwnProfileAdmin()

    if (authUser === undefined) {
      dispatch(authNasabahAction.setSuccessData(null))
    } else {
      dispatch(authNasabahAction.setSuccessData(authUser))
    }

    if (authAdmin === undefined) {
      dispatch(authAdminAction.setSuccessData(null))
    } else {
      console.log(authAdmin)
      dispatch(authAdminAction.setSuccessData(authAdmin))
    }
  } catch (error) {
    dispatch(authNasabahAction.setSuccessData(null))
    dispatch(authAdminAction.setSuccessData(null))
  } finally {
    dispatch(preloadAction.setIsPreload(false))
  }
}