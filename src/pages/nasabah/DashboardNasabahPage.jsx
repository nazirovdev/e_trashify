import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { getFirstName, getTwoCharName } from '../../utils'
import Avatar from '../../components/Avatar'
import Spacer from '../../components/Spacer'
import DashboardCardItem from '../../components/DashboardCardItem'
import DataSampahImage from '../../assets/data_sampah.png'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveSampah } from '../../store/sampah/action'
import { asyncReceiveTransaksiNasabah } from '../../store/transaksiNasabah/action'

export default function DashboardNasabahPage({ navigation }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveSampah())
    dispatch(asyncReceiveTransaksiNasabah())
  }, [dispatch])

  const { authUserReducer } = useSelector(state => state)
  const authUserData = authUserReducer.data

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 30,
        alignItems: 'center'
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
              Anda adalah nasabah E-Trashify
            </Text>
          </View>
        </View>
        <Spacer height={30} />
        <View style={{
          width: Dimensions.get('screen').width * 0.90,
          height: 100,
          elevation: 4,
          backgroundColor: 'white',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Point Anda :</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'rgb(34 197 94)' }}>{authUserData.point}</Text>
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
          <DashboardCardItem imageSource={DataSampahImage} title='Data Transaksi' onClick={() => navigation.navigate('DataTransaksiNasabah')} />
          <DashboardCardItem imageSource={DataSampahImage} title='Buat Transaksi' onClick={() => navigation.navigate('TambahTransaksiNasabah')} />
        </View>
      </View>
    </ScrollView>
  )
}