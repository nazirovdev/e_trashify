import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Nasabah from './src/pages/nasabah/Nasabah'
import LoginNasabah from './src/pages/nasabah/LoginNasabah'
import TabungSampahNasabah from './src/pages/nasabah/TabungSampahNasabah'
import DataSampah from './src/pages/nasabah/DataSampah'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginAdmin from './src/pages/admin/LoginAdmin'
import { useDispatch, useSelector } from 'react-redux'
import { asyncIsPreload } from './src/store/preload/action'
import { ActivityIndicator, View } from 'react-native'
import DetailTransaksiNasabah from './src/pages/nasabah/DetailTransaksiNasabah'
import DataTransaksiNasabah from './src/pages/nasabah/DataTransaksiNasabah'
import { Typografi } from './src/pages/nasabah/HomeNasabah'
import Admin from './src/pages/admin/Admin'
import TambahSampah from './src/pages/admin/TambahSampah'
import DaftarNasabah from './src/pages/nasabah/DaftarNasabah'

const Stack = createNativeStackNavigator()

export default function Main() {
  const { authNasabahReducer, authAdminReducer, preloadReducer } = useSelector(state => state)

  const isAuthNasabah = authNasabahReducer.authNasabah
  const isLoadingNasabah = authNasabahReducer.isLoading

  const isAuthAdmin = authAdminReducer.authAdmin
  const isLoadingAdmin = authAdminReducer.isLoading

  const isPreload = preloadReducer.isPreload

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncIsPreload())
  }, [dispatch])

  if (isPreload === true) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00D185" />
        <Typografi color="#00D185">Memuat...</Typografi>
      </View>
    )
  }

  if (isLoadingNasabah || isLoadingAdmin) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00D185" />
        <Typografi color="#00D185">Memuat...</Typografi>
      </View>
    )
  }

  if (isAuthAdmin !== null) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Admin' component={Admin} options={{ headerShown: false }} />
          <Stack.Screen
            name='DataSampah'
            component={DataSampah}
            options={{ headerShown: true, headerStyle: { backgroundColor: '#00d185' }, headerTintColor: 'white', headerTitle: 'Data Sampah' }} />

          <Stack.Screen
            name='TambahSampah'
            component={TambahSampah}
            options={{
              headerShown: true, headerStyle: { backgroundColor: '#00d185' },
              headerTintColor: 'white', headerTitle: 'Tambah Sampah'
            }} />

          <Stack.Screen
            name='DaftarNasabah'
            component={DaftarNasabah}
            options={{
              headerShown: true, headerStyle: { backgroundColor: '#00d185' },
              headerTintColor: 'white', headerTitle: 'Daftar Nasabah'
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  if (isAuthNasabah !== null) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Nasabah' component={Nasabah} options={{ headerShown: false }} />
          <Stack.Screen
            name='TabungSampahNasabah'
            component={TabungSampahNasabah}
            options={{ headerShown: true, headerStyle: { backgroundColor: '#00d185' }, headerTintColor: 'white', headerTitle: 'Tabung Sampah' }} />
          <Stack.Screen
            name='DataTransaksi'
            component={DataTransaksiNasabah}
            options={{ headerShown: true, headerStyle: { backgroundColor: '#00d185' }, headerTintColor: 'white', headerTitle: 'Data Transaksi' }} />
          <Stack.Screen
            name='DetailTransaksi'
            component={DetailTransaksiNasabah}
            options={{ headerShown: true, headerStyle: { backgroundColor: '#00d185' }, headerTintColor: 'white', headerTitle: 'Detail Transaksi' }} />
          <Stack.Screen
            name='DataSampah'
            component={DataSampah}
            options={{ headerShown: true, headerStyle: { backgroundColor: '#00d185' }, headerTintColor: 'white', headerTitle: 'Data Sampah' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginNasabah' component={LoginNasabah} options={{ headerShown: false }} />
        <Stack.Screen name='LoginAdmin' component={LoginAdmin} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}