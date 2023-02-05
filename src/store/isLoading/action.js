export const ActionType = {
  SET_IS_LOADING: 'SET_IS_LOADING'
}

export const setIsLoading = (isLoading) => {
  return {
    type: ActionType.SET_IS_LOADING,
    payload: {
      isLoading
    }
  }
}