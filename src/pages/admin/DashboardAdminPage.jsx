import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { getFirstName, getTwoCharName } from '../../utils'
import Avatar from '../../components/Avatar'
import Spacer from '../../components/Spacer'
import DashboardCardItem from '../../components/DashboardCardItem'
import DataSampahImage from '../../assets/data_sampah.png'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveSampah } from '../../store/sampah/action'
import { asyncReceiveNasabah } from '../../store/nasabah/action'
import { asyncReceiveTransaksi } from '../../store/transaksi/action'

export default function DashboardAdminPage({ navigation }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveSampah())
    dispatch(asyncReceiveNasabah())
    dispatch(asyncReceiveTransaksi())
  }, [dispatch])

  const { authUserReducer } = useSelector(state => state)
  const authUserData = authUserReducer.data

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
          <Avatar width={70} height={70}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{getTwoCharName(authUserData.name)}</Text>
          </Avatar>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Selamat Datang {getFirstName(authUserData.name)}
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