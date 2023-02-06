import { createSlice } from "@reduxjs/toolkit";

const nasabahSlice = createSlice({
  name: 'slice',
  initialState: {
    isLoading: false,
    data: [],
    errorMessage: null,
  },
  reducers: {
    getInitialNasabah(state, action) {
      state.isLoading = true
      state.data = []
      state.errorMessage = null
    },
    getDataNasabah(state, action) {
      state.isLoading = false
      state.data = action.payload
      state.errorMessage = null
    },
    deleteNasabah(state, action) {
      state.isLoading = false
      state.data = state.data.filter((nasabahJancok) => nasabahJancok.id !== action.payload.nasabah.id)
      state.errorMessage = null
    },
    addNasabah(state, action) {
      state.isLoading = false
      state.data = [action.payload.nasabah, ...state.data]
      state.errorMessage = null
    }
  }
})

export const nasabahReducer = nasabahSlice.reducer
export const nasabahAction = nasabahSlice.actions