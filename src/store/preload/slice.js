import { createSlice } from "@reduxjs/toolkit";

const preloadSlice = createSlice({
  name: 'preload',
  initialState: {
    isPreload: true
  },
  reducers: {
    setIsPreload: (state, action) => {
      state.isPreload = action.payload
    }
  }
})

export const preloadReducer = preloadSlice.reducer
export const preloadAction = preloadSlice.actions