import { createSlice } from "@reduxjs/toolkit";

const authAdminSlice = createSlice({
  name: 'authAdmin',
  initialState: {
    authAdmin: null,
    error: null,
    isLoading: false
  },
  reducers: {
    setInitialData: (state, action) => {
      state.authAdmin = null
      state.error = null
      state.isLoading = true
    },
    setSuccessData: (state, action) => {
      state.authAdmin = action.payload
      state.error = null
      state.isLoading = false
    },
    setErrorData: (state, action) => {
      state.authAdmin = null
      state.error = action.payload
      state.isLoading = false
    }
  }
})

export const authAdminReducer = authAdminSlice.reducer
export const authAdminAction = authAdminSlice.actions