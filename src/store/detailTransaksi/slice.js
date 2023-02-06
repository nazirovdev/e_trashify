const { createSlice } = require("@reduxjs/toolkit");

const detailTransaksiSlice = createSlice({
  name: 'detailTransaksi',
  initialState: {
    isLoading: false,
    data: null,
    messageError: null
  },
  reducers: {
    getInitialState(state, action) {
      state.isLoading = true
      state.data = null
      state.messageError = null
    },
    getDetailTransaksi(state, action) {
      state.isLoading = false
      state.data = action.payload.transaksi
      state.messageError = null
    }
  }
})

export const detailTransaksiReducer = detailTransaksiSlice.reducer
export const detailTransaksiAction = detailTransaksiSlice.actions