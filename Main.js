import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useSelector } from "react-redux"
import Admin from "./src/pages/admin/Admin"
import DaftarNasabah from "./src/pages/admin/DaftarNasabahPage"
import DataNasabahPage from "./src/pages/admin/DataNasabahPage"
import DataTransaksiPage from "./src/pages/admin/DataTransaksiPage"
import DetailDataNasabah from "./src/pages/admin/DetailDataNasabahPage"
import DetailJenisSampahPage from "./src/pages/admin/DetailJenisSampahPage"
import DetailTransactionPage from "./src/pages/admin/DetailTransactionPage"
import LoginAdminPage from "./src/pages/admin/LoginAdminPage"
import TambahJeniSampahPage from "./src/pages/admin/TambahJeniSampahPage"
import DataJenisSampah from "./src/pages/DataJenisSampahPage"
import DataSampah from "./src/pages/nasabah/DataSampah"
import DataTransaksiNasabahPage from "./src/pages/nasabah/DataTransaksiNasabahPage"
import DetailTransactionNasabahPage from "./src/pages/nasabah/DetailTransactionNasabahPage"
import LoginNasabahPage from "./src/pages/nasabah/LoginNasabahPage"
import Nasabah from "./src/pages/nasabah/Nasabah"
import TambahTransaksiNasabah from "./src/pages/nasabah/TambahTransaksi"

export default function Main() {
  const { authUserReducer } = useSelector(state => state)
  // return (
  //   <Stack.Navigator initialRouteName='Admin'>
  //     <Stack.Screen name='Admin' component={Admin} options={{ headerShown: false }} />
  //     <Stack.Screen name='DataJenisSampah' component={DataJenisSampahPage} options={{ headerShown: true, headerTitle: 'Data Jenis Sampah' }} />
  //     <Stack.Screen name='DetailJenisSampah' component={DetailJenisSampahPage} options={{ headerShown: true, headerTitle: 'Data Detail Sampah' }} />
  //     <Stack.Screen name='TambahJeniSampah' component={TambahJeniSampahPage} options={{ headerShown: true, headerTitle: 'Tambah Sampah' }} />
  //     <Stack.Screen name='DataNasabah' component={DataNasabahPage} options={{ headerShown: true, headerTitle: 'Data Nasabah' }} />
  //     <Stack.Screen name='DetailDataNasabah' component={DetailDataNasabahPage} options={{ headerShown: true, headerTitle: 'Data Detail Nasabah' }} />
  //     <Stack.Screen name='DaftarNasabah' component={DaftarNasabahPage} options={{ headerShown: true, headerTitle: 'Daftar Nasabah' }} />
  //     <Stack.Screen name='DataTransaksi' component={DataTransaksiPage} options={{ headerShown: true, headerTitle: 'Data transaksi' }} />
  //     <Stack.Screen name='DetailTransaction' component={DetailTransactionPage} options={{ headerShown: true, headerTitle: 'Data Detail transaksi' }} />
  //   </Stack.Navigator>
  // )

  const Stack = createNativeStackNavigator()

  if (authUserReducer.data !== null && authUserReducer.data.role === 1) {
    return (
      <Stack.Navigator initialRouteName='Admin'>
        <Stack.Screen name='Admin' component={Admin} options={{ headerShown: false }} />

        <Stack.Screen name='DataJenisSampah' component={DataJenisSampah} options={{ headerShown: true, headerTitle: 'Data Jenis Sampah' }} />
        <Stack.Screen name='DetailJenisSampah' component={DetailJenisSampahPage} options={{ headerShown: true, headerTitle: 'Detail Jenis Sampah' }} />
        <Stack.Screen name='TambahJeniSampah' component={TambahJeniSampahPage} options={{ headerShown: true, headerTitle: 'Tambah Sampah' }} />

        <Stack.Screen name='DataNasabah' component={DataNasabahPage} options={{ headerShown: true, headerTitle: 'Data Nasabah' }} />
        <Stack.Screen name='DetailDataNasabah' component={DetailDataNasabah} options={{ headerShown: true, headerTitle: 'Detail Nasabah' }} />
        <Stack.Screen name='DaftarNasabah' component={DaftarNasabah} options={{ headerShown: true, headerTitle: 'Daftar Nasabah' }} />

        <Stack.Screen name='DataTransaksi' component={DataTransaksiPage} options={{ headerShown: true, headerTitle: 'Data Transaksi' }} />
        <Stack.Screen name='DetailTransaction' component={DetailTransactionPage} options={{ headerShown: true, headerTitle: 'Detail Transaksi' }} />
      </Stack.Navigator>
    )
  }

  if (authUserReducer.data !== null && authUserReducer.data.role === 0) {
    return (
      <Stack.Navigator initialRouteName='Nasabah'>
        <Stack.Screen name='Nasabah' component={Nasabah} options={{ headerShown: false }} />
        <Stack.Screen name='DataJenisSampah' component={DataSampah} options={{ headerShown: true, headerTitle: 'Data Jenis Sampah' }} />
        <Stack.Screen name='DataTransaksiNasabah' component={DataTransaksiNasabahPage} options={{ headerShown: true, headerTitle: 'Data Transaksi' }} />
        <Stack.Screen name='TambahTransaksiNasabah' component={TambahTransaksiNasabah} options={{ headerShown: true, headerTitle: 'Tambah Transaksi' }} />
        <Stack.Screen name='DetailTransactionNasabah' component={DetailTransactionNasabahPage} options={{ headerShown: true, headerTitle: 'Detail Transaksi' }} />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name='LoginAdmin' component={LoginAdminPage} options={{ headerShown: false }} />
      <Stack.Screen name='LoginNasabah' component={LoginNasabahPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}