import { createSlice } from "@reduxjs/toolkit";

export const TransaksiSlice = createSlice({
  name: 'Transaksi',
  initialState: {
    dataTransaksi: [],
    errorMessage: null,
    isLoading: false
  },
  reducers: {
    getInitialData(state) {
      state.dataTransaksi = []
      state.errorMessage = null
      state.isLoading = true
    },
    getSuccessData(state, action) {
      state.dataTransaksi = action.payload
      state.errorMessage = null
      state.isLoading = false
    },
    getErrorData(state, action) {
      state.dataTransaksi = []
      state.errorMessage = action.payload
      state.isLoading = false
    },
  }
})

export const transaksiReducer = TransaksiSlice.reducer
export const transaksiAction = TransaksiSlice.actions