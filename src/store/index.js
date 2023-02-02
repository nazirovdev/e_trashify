import { authNasabahReducer } from "./auth/nasabah/slice";
import { jenisSampahReducer } from "./jenis_sampah/slice";
import { preloadReducer } from "./preload/slice";

import { configureStore } from "@reduxjs/toolkit";
import { transaksiReducer } from "./transaksi/slice";
import { detailTransaksiReducer } from "./detailTransaksi/slice";
import { authAdminReducer } from "./auth/admin/slice";

const store = configureStore({
  reducer: {
    authNasabahReducer,
    authAdminReducer,
    preloadReducer,
    jenisSampahReducer,
    transaksiReducer,
    detailTransaksiReducer
  }
})

export default store