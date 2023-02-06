import { configureStore } from "@reduxjs/toolkit";
import { authUserReducer } from "./auth/slice";
import { detailTransaksiReducer } from "./detailTransaksi/slice";
import { nasabahReducer } from "./nasabah/slice";
import { sampahReducer } from "./sampah/slice";
import { transaksiReducer } from "./transaksi/slice";
import { transaksiNasabahReducer } from "./transaksiNasabah/slice";

export const store = configureStore({
  reducer: {
    authUserReducer,
    sampahReducer,
    nasabahReducer,
    transaksiReducer,
    transaksiNasabahReducer,
    detailTransaksiReducer
  }
})