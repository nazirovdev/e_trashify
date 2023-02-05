import { View, Text, Dimensions, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { getFirstName } from '../../utils'
import Avatar from '../../components/Avatar'
import Spacer from '../../components/Spacer'
import DashboardCardItem from '../../components/DashboardCardItem'

import DataSampahImage from '../../assets/data_sampah.png'
import { useDispatch } from 'react-redux'
import { asyncReceiveJenisSampah } from '../../store/jenis_sampah/action'
import { asyncReceiveNasbah } from '../../store/nasabah/action'
import { asyncReceiveTransaksi } from '../../store/transaksi/action'

export default function DashboardAdminPage({ navigation }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncReceiveJenisSampah())
    dispatch(asyncReceiveNasbah())
    dispatch(asyncReceiveTransaksi())
  }, [dispatch])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 30
      }}>
        <Spacer height={20} />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10
        }}>
          <Avatar width={70} height={70} />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Selamat Datang {getFirstName('Muhammad Nazir Azhari')}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '400' }}>
              Anda adalah admin E-Trashify
            </Text>
          </View>
        </View>
        <Spacer height={40} />
        <View style={{
          flex: 1,
          flexDirection: 'row',
          gap: 15,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <DashboardCardItem imageSource={DataSampahImage} title='Data Sampah' onClick={() => navigation.navigate('DataJenisSampah')} />
          <DashboardCardItem imageSource={DataSampahImage} title='Tambah Sampah' onClick={() => navigation.navigate('TambahJeniSampah')} />
          <DashboardCardItem imageSource={DataSampahImage} title='Data Nasabah' onClick={() => navigation.navigate('DataNasabah')} />
          <DashboardCardItem imageSource={DataSampahImage} title='Daftar Nasabah' onClick={() => navigation.navigate('DaftarNasabah')} />
          <DashboardCardItem imageSource={DataSampahImage} title='Data Transaksi' onClick={() => navigation.navigate('DataTransaksi')} />
        </View>
      </View>
    </ScrollView>
  )
}