import { View, Text, Dimensions, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Spacer from '../../components/Spacer'
import ProfileItem from '../../components/ProfileItem'
import Line from '../../components/Line'
import Button from '../../components/Button'
import { convertIsoToDate, getTwoCharName } from '../../utils'
import TransactionStatus from '../../components/TransactionStatus'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveDetailTransaksi } from '../../store/detailTransaksi/action'

export default function DetailTransactionNasabahPage({ route }) {
  const idTransaksi = route.params.transaksi.id

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveDetailTransaksi({ id: idTransaksi }))
  }, [dispatch, idTransaksi])

  const { detailTransaksiReducer } = useSelector((state) => state)

  const dataDetailtransaksi = detailTransaksiReducer.data
  const isLoading = detailTransaksiReducer.isLoading

  if (dataDetailtransaksi === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Loading</Text>
      </View>
    )
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
              <Text style={{ fontWeight: 'bold', fontSize: 26 }}>{getTwoCharName(dataDetailtransaksi.name_nasabah)}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{dataDetailtransaksi.name_nasabah}</Text>
              <Text style={{ fontWeight: '500', fontSize: 16 }}>Nasabah</Text>
            </View>
          </View>
          <Spacer height={30} />
          <ProfileItem iconName='account' profileVariant='Email' profileContent={dataDetailtransaksi.email} />
          <Spacer height={10} />
          <Line height={2} bgColor='rgb(229 229 229)' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Berat' profileContent={`${dataDetailtransaksi.berat}Kg`} />
          <Spacer height={10} />
          <Line height={2} bgColor='rgb(229 229 229)' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Alamat' profileContent={dataDetailtransaksi.address} />
          <Spacer height={10} />
          <Line height={2} bgColor='rgb(229 229 229)' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Jenis Sampah' profileContent={dataDetailtransaksi.name_jenis_sampah} />
          <Spacer height={10} />
          <Line height={2} bgColor='rgb(229 229 229)' />
          <Spacer height={10} />

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <MCIcon name='account' size={30} />
            <View style={{ gap: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Status</Text>
              <TransactionStatus status={dataDetailtransaksi.status} />
            </View>
          </View>

          <Spacer height={10} />
          <Line height={2} bgColor='rgb(229 229 229)' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Tanggal Transaksi' profileContent={convertIsoToDate(dataDetailtransaksi.tgl_transaksi)} />
          <Spacer height={10} />
          <Line height={2} bgColor='rgb(229 229 229)' />
          <Spacer height={10} />
          <ProfileItem iconName='account' profileVariant='Admin' profileContent={dataDetailtransaksi.name_admin} />
        </View>
        <Spacer height={30} />
      </View>
    </ScrollView>
  )
}