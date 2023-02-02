import { createSlice } from "@reduxjs/toolkit";

const detailTransaksiSlice = createSlice({
  name: 'detailTransaksi',
  initialState: {
    detailTransaksi: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    setInitialData: (state, action) => {
      state.detailTransaksi = null
      state.error = null
      state.isLoading = true
    },
    setSuccessData: (state, action) => {
      state.detailTransaksi = action.payload
      state.error = null
      state.isLoading = false
    },
    setErrorData: (state, action) => {
      state.detailTransaksi = null
      state.error = action.payload
      state.isLoading = false
    },
  }
})

export const detailTransaksiReducer = detailTransaksiSlice.reducer
export const detailTransaksiAction = detailTransaksiSlice.actions