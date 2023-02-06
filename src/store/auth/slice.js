import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: null,
    isLoading: false,
    errorMessage: null
  },
  reducers: {
    getInitialData(state, action) {
      state.data = null
      state.isLoading = true
      state.errorMessage = null
    },
    setAuthUser(state, action) {
      state.data = action.payload
      state.isLoading = false
      state.errorMessage = null
    },
    unsetAuthUser(state, action) {
      state.data = null
      state.isLoading = false
      state.errorMessage = null
    },
    errorAuthUser(state, action) {
      state.data = null
      state.isLoading = false
      state.errorMessage = action.payload
    }
  }
})

export const authUserReducer = authSlice.reducer
export const authUserAction = authSlice.actions