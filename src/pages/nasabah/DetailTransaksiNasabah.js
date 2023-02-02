import React, { useEffect } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { asyncSetDetailTransaksi } from '../../store/detailTransaksi/action'
import { convertIsoToDate, getColorStatus } from '../../utils'
import { Container, Typografi } from './HomeNasabah'

const width = Dimensions.get('screen').width

const CardTransaksiStyle = styled.View`
  width: ${width * 0.90}px;
  background-color: white;
  elevation: 3;
  align-items: flex-start;
  padding: 15px;
  border-radius: 10px;
  justify-content: space-between;
  gap: 15px;
`

const ItemCardTransaksi = ({ label, content, color = 'gray' }) => (
  <Container alignItems='flex-start'>
    <Typografi fontSize='16' fontWeight='bold' color='gray'>{label} :</Typografi>
    <Typografi fontSize='16' color={color}>{content}</Typografi>
  </Container>
)

export default function DetailTransaksiNasabah({ route, navigation }) {
  const { dataId } = route.params

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetDetailTransaksi(dataId))
  }, [dispatch, dataId])

  const { detailTransaksiReducer } = useSelector(state => state)

  const dataDetail = detailTransaksiReducer.detailTransaksi
  const isLoading = detailTransaksiReducer.isLoading

  if (isLoading || dataDetail === null) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#00D185" />
        </View>
      </SafeAreaView>
    )
  }

  const {
    name_nasabah,
    email,
    address,
    name_jenis_sampah,
    berat,
    total_point,
    tgl_transaksi,
    status,
    name_admin,
  } = dataDetail

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Container marginTop='30' gap='20' marginBottom='30'>
          <CardTransaksiStyle>
            <ItemCardTransaksi label='Nama Nasabah' content={name_nasabah} />
            <ItemCardTransaksi label='Email Nasabah' content={email} />
            <ItemCardTransaksi label='Alamat Nasabah' content={address} />
            <ItemCardTransaksi label='Jenis Sampah' content={name_jenis_sampah} />
            <ItemCardTransaksi label='Berat Sampah' content={`${berat} Kg`} />
            <ItemCardTransaksi label='Total Point' content={`${total_point} Point`} />
            <ItemCardTransaksi label='Tanggal Transaksi' content={convertIsoToDate(tgl_transaksi)} />
            <ItemCardTransaksi label='Status Transaksi' content={status} color={getColorStatus(status)} />
            <ItemCardTransaksi label='Nama Admin' content={name_admin} />
          </CardTransaksiStyle>
        </Container>
      </ScrollView>
    </SafeAreaView >
  )
}