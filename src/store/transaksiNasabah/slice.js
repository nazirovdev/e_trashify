import { createSlice } from "@reduxjs/toolkit";

const transaksiSlice = createSlice({
  name: 'transaksiNasabah',
  initialState: {
    isLoading: false,
    data: [],
    messageError: null
  },
  reducers: {
    initialTransaksi(state) {
      state.isLoading = true
      state.data = []
      state.messageError = null
    },
    getTransaksi(state, action) {
      state.isLoading = false
      state.data = action.payload.transaksi
      state.messageError = null
    },
    addTransaksi(state, action) {
      state.isLoading = false
      state.data = [action.payload.transaksi, ...state.data]
      state.messageError = null
    }
  }
})

export const transaksiNasabahReducer = transaksiSlice.reducer
export const transaksiNasabahAction = transaksiSlice.actions