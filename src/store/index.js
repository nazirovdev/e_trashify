import { authUserReducer } from "./authUser/reducer";
import { isLoadingReducer } from "./isLoading/reducer";
import { isPreloadReducer } from "./isPreload/reducer";
import { jenisSampahReducer } from "./jenis_sampah/reducer";
import { nasabahReducer } from "./nasabah/reducer";
import { transaksiReducer } from "./transaksi/reducer";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    authUserReducer,
    isPreloadReducer,
    isLoadingReducer: isLoadingReducer,
    jenisSampahReducer,
    nasabahReducer,
    transaksiReducer
  }
})