import { createSlice } from "@reduxjs/toolkit";

const transaksiSlice = createSlice({
  name: 'transaksi',
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
    setStatusTransaksi(state, action) {
      state.isLoading = false
      state.data = state.data.map((transaksi) => {
        if (transaksi.id === action.payload.transaksi.id) {
          return {
            ...transaksi,
            status: action.payload.transaksi.status
          }
        }

        return transaksi
      })
      state.messageError = null
    }
  }
})

export const transaksiReducer = transaksiSlice.reducer
export const transaksiAction = transaksiSlice.actions