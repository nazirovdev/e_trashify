import { Alert } from "react-native"
import { api } from "../../utils/api"
import { transaksiNasabahAction } from "./slice"

export const asyncReceiveTransaksiNasabah = () => async (dispatch) => {
  try {
    const transaksi = await api.getTransaksi()
    dispatch(transaksiNasabahAction.getTransaksi({ transaksi }))
  } catch (error) {
    Alert.alert(error.message)
  }
}

export const asyncAddTransaksiNasabah = ({ idJenisSampah, berat, description }) => async (dispatch) => {
  try {
    const transaksi = await api.addTransaksi({ idJenisSampah, berat, description })
    const user = await api.getOwnProfileNasabah()

    dispatch(transaksiNasabahAction.addTransaksi({ transaksi: { ...transaksi, name: user.name } }))
  } catch (error) {
    Alert.alert(error.message)
  }
}