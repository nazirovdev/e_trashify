import { ActionType } from "./action";

export const isLoadingReducer = (isLoading = false, action = {}) => {
  switch (action.type) {
    case ActionType.SET_IS_LOADING:
      return action.payload.isLoading
    default:
      return isLoading
  }
}