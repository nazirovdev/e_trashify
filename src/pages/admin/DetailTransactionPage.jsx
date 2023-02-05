import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import ProfileItem from '../../components/ProfileItem'
import Line from '../../components/Line'
import Button from '../../components/Button'
import { convertIsoToDate } from '../../utils'

export default function DetailTransactionPage({ route }) {
  const { address, berat, email, id, name_jenis_sampah, name_nasabah, status, tgl_transaksi, total_point } = (route.params.transaksi)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
        <Spacer height={10} />
        <View style={{ width: Dimensions.get('screen').width * 0.90, elevation: 1, backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
          <Spacer height={30} />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{ width: 70, height: 70, backgroundColor: 'gray', borderRadius: 100 }} />
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{name_nasabah}</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Nasabah</Text>
            </View>
          </View>
          <Spacer height={30} />
          <ProfileItem iconName='account' profileVariant='Email' profileContent={email} />
          <Spacer height={10} />
          <Line height={2} bgColor='gray' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Berat' profileContent={`${berat}Kg`} />
          <Spacer height={10} />
          <Line height={2} bgColor='gray' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Alamat' profileContent={address} />
          <Spacer height={10} />
          <Line height={2} bgColor='gray' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Jenis Sampah' profileContent={name_jenis_sampah} />
          <Spacer height={10} />
          <Line height={2} bgColor='gray' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Status' profileContent={status} />
          <Spacer height={10} />
          <Line height={2} bgColor='gray' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Tanggal Transaksi' profileContent={convertIsoToDate(tgl_transaksi)} />
          <Spacer height={30} />
          <Button>Accept</Button>
          <Spacer height={10} />
          <Button>Decline</Button>
        </View>
        <Spacer height={30} />
      </View>
    </ScrollView>
  )
}