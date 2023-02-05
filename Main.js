import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginAdminPage from './src/pages/admin/LoginAdminPage'
import LoginNasabahPage from './src/pages/nasabah/LoginNasabahPage'
import DaftarNasabahPage from './src/pages/admin/DaftarNasabahPage'
import TambahJeniSampahPage from './src/pages/admin/TambahJeniSampahPage'
import DataJenisSampahPage from './src/pages/DataJenisSampahPage'
import DetailJenisSampahPage from './src/pages/admin/DetailJenisSampahPage'
import DataNasabahPage from './src/pages/admin/DataNasabahPage'
import DetailDataNasabahPage from './src/pages/admin/DetailDataNasabahPage'
import DataTransaksiPage from './src/pages/admin/DataTransaksiPage'
import DetailTransactionPage from './src/pages/admin/DetailTransactionPage'
import { useDispatch, useSelector } from 'react-redux'
import Admin from './src/pages/admin/Admin'
import Nasabah from './src/pages/nasabah/Nasabah'
import { asyncSetPreload } from './src/store/isPreload/action'
import Loading from './src/components/Loading'

export default function Main() {
  const Stack = createNativeStackNavigator()

  const { authUserReducer, isPreloadReducer, isLoadingReducer } = useSelector(states => states)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetPreload())
  }, [dispatch])

  if (isPreloadReducer === true) {
    return <Loading />
  }

  if (authUserReducer !== null && authUserReducer.role === 1) {
    return (
      <Stack.Navigator initialRouteName='Admin'>
        <Stack.Screen name='Admin' component={Admin} options={{ headerShown: false }} />
        <Stack.Screen name='DataJenisSampah' component={DataJenisSampahPage} options={{ headerShown: true, headerTitle: 'Data Jenis Sampah' }} />
        <Stack.Screen name='DetailJenisSampah' component={DetailJenisSampahPage} options={{ headerShown: true, headerTitle: 'Data Detail Sampah' }} />
        <Stack.Screen name='TambahJeniSampah' component={TambahJeniSampahPage} options={{ headerShown: true, headerTitle: 'Tambah Sampah' }} />
        <Stack.Screen name='DataNasabah' component={DataNasabahPage} options={{ headerShown: true, headerTitle: 'Data Nasabah' }} />
        <Stack.Screen name='DetailDataNasabah' component={DetailDataNasabahPage} options={{ headerShown: true, headerTitle: 'Data Detail Nasabah' }} />
        <Stack.Screen name='DaftarNasabah' component={DaftarNasabahPage} options={{ headerShown: true, headerTitle: 'Daftar Nasabah' }} />
        <Stack.Screen name='DataTransaksi' component={DataTransaksiPage} options={{ headerShown: true, headerTitle: 'Data transaksi' }} />
        <Stack.Screen name='DetailTransaction' component={DetailTransactionPage} options={{ headerShown: true, headerTitle: 'Data Detail transaksi' }} />
      </Stack.Navigator>
    )
  }

  if (authUserReducer !== null && authUserReducer.role === 0) {
    return (
      <Stack.Navigator initialRouteName='Nasabah'>
        <Stack.Screen name='Nasabah' component={Nasabah} options={{ headerShown: false }} />
        <Stack.Screen name='DataJenisSampah' component={DataJenisSampahPage} options={{ headerShown: true, headerTitle: 'Data Jenis Sampah' }} />
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