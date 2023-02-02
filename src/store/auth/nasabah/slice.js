import { createSlice } from "@reduxjs/toolkit";

const authNasabahSlice = createSlice({
  name: 'authNasabah',
  initialState: {
    authNasabah: null,
    error: null,
    isLoading: false
  },
  reducers: {
    setInitialData: (state, action) => {
      state.authNasabah = null
      state.error = null
      state.isLoading = true
    },
    setSuccessData: (state, action) => {
      state.authNasabah = action.payload
      state.error = null
      state.isLoading = false
    },
    setErrorData: (state, action) => {
      state.authNasabah = null
      state.error = action.payload
      state.isLoading = false
    }
  }
})

export const authNasabahReducer = authNasabahSlice.reducer
export const authNasabahAction = authNasabahSlice.actions