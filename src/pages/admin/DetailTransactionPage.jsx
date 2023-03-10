import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import ProfileItem from '../../components/ProfileItem'
import Line from '../../components/Line'
import Button from '../../components/Button'
import { convertIsoToDate, getTwoCharName } from '../../utils'
import TransactionStatus from '../../components/TransactionStatus'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import { asyncSetStatusTransaksi } from '../../store/transaksi/action'

export default function DetailTransactionPage({ route, navigation }) {
  const { address, berat, email, id, name_jenis_sampah, name_nasabah, status, tgl_transaksi, total_point } = (route.params.transaksi)
  const dispatch = useDispatch()

  const onSetStatusTransaksiSuccess = () => {
    dispatch(asyncSetStatusTransaksi(id, 'success'))
    navigation.pop()
  }

  const onSetStatusTransaksiFail = () => {
    dispatch(asyncSetStatusTransaksi(id, 'gagal'))
    navigation.pop()
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
        <Spacer height={10} />
        <View style={{ width: Dimensions.get('screen').width * 0.90, elevation: 1, backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
          <Spacer height={30} />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{
              width: 70,
              height: 70,
              backgroundColor: 'white',
              borderRadius: 100,
              elevation: 4,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ fontWeight: 'bold', fontSize: 26 }}>{getTwoCharName(name_nasabah)}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{name_nasabah}</Text>
              <Text style={{ fontWeight: '500', fontSize: 16 }}>Nasabah</Text>
            </View>
          </View>
          <Spacer height={30} />
          <ProfileItem iconName='account' profileVariant='Email' profileContent={email} />
          <Spacer height={10} />
          <Line height={2} bgColor='rgb(229 229 229)' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Berat' profileContent={`${berat}Kg`} />
          <Spacer height={10} />
          <Line height={2} bgColor='rgb(229 229 229)' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Alamat' profileContent={address} />
          <Spacer height={10} />
          <Line height={2} bgColor='rgb(229 229 229)' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Jenis Sampah' profileContent={name_jenis_sampah} />
          <Spacer height={10} />
          <Line height={2} bgColor='rgb(229 229 229)' />
          <Spacer height={10} />

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <MCIcon name='account' size={30} />
            <View style={{ gap: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Status</Text>
              <TransactionStatus status={status} />
            </View>
          </View>

          <Spacer height={10} />
          <Line height={2} bgColor='rgb(229 229 229)' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Tanggal Transaksi' profileContent={convertIsoToDate(tgl_transaksi)} />
          <Spacer height={30} />
          <Button bgColor='rgb(34 197 94)' onClick={onSetStatusTransaksiSuccess}>Terima</Button>
          <Spacer height={10} />
          <Button bgColor='rgb(239 68 68)' onClick={onSetStatusTransaksiFail}>Tolak</Button>
        </View>
        <Spacer height={30} />
      </View>
    </ScrollView>
  )
}