import { api } from "../../utils/api"
import { setAuthUser } from "../authUser/action"

export const ActionType = {
  SET_PRELOAD: 'SET_PRELOAD'
}

const setPreloadActionCreator = (isPreload) => {
  return {
    type: ActionType.SET_PRELOAD,
    payload: {
      isPreload
    }
  }
}

export const asyncSetPreload = () => async (dispatch) => {
  try {
    const authAdmin = await api.getOwnProfileAdmin()
    dispatch(setAuthUser(authAdmin))
  } catch (error) {
  } finally {
    dispatch(setPreloadActionCreator(false))
  }
}