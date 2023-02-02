import { createSlice } from "@reduxjs/toolkit";

const jenisSampahSlice = createSlice({
  name: 'jenis_sampah',
  initialState: {
    jenisSampah: [],
    errorMessage: null,
    isLoading: false
  },
  reducers: {
    getInitialData(state) {
      state.isLoading = true
      state.jenisSampah = []
    },

    getSuccessData(state, action) {
      state.isLoading = false
      state.jenisSampah = action.payload
    },

    getFailData(state, action) {
      state.isLoading = false
      state.errorMessage = action.payload
    },

    addSampah(state, action) {
      state.jenisSampah.push(action.payload)
    }
  }
})

export const jenisSampahReducer = jenisSampahSlice.reducer
export const jenisSampahAction = jenisSampahSlice.actions