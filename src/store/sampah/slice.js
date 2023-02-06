const { createSlice } = require("@reduxjs/toolkit");

const sampahSlice = createSlice({
  name: 'sampah',
  initialState: {
    data: [],
    isLoading: false,
    messageError: null
  },
  reducers: {
    getInitialData(state, action) {
      state.data = []
      state.isLoading = true
      state.messageError = null
    },
    getSampah(state, action) {
      state.isLoading = false
      state.data = action.payload
      state.messageError = null
    },
    addSampah(state, action) {
      state.isLoading = false
      state.data = state.data.push(action.payload)
      state.messageError = null
    },
    editSampah(state, action) {
      state.isLoading = false
      state.data = state.data.map((sampah) => {
        if (sampah.id === action.payload.id) {
          return {
            ...sampah,
            ...action.payload
          }
        }

        return sampah
      })
      state.messageError = null
    },
    deleteSampah(state, action) {
      state.isLoading = false
      state.data = state.data.filter((sampah) => sampah.id !== action.payload.id)
      state.messageError = null
    },
    addSampah(state, action) {
      state.isLoading = false
      state.data = [action.payload.sampah, ...state.data]
      state.messageError = null
    },
    errorSampah(state, action) {
      state.isLoading = false
      state.messageError = action.payload
    }
  }
})

export const sampahReducer = sampahSlice.reducer
export const sampahAction = sampahSlice.actions