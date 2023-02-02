import { Dimensions, TouchableOpacity, ScrollView, View, ActivityIndicator, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'
import { Container, Typografi } from './HomeNasabah'
import { convertDate, getColorStatus } from '../../utils'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useDispatch, useSelector } from 'react-redux'
import { asyncSetDataTransaksi } from '../../store/transaksi/action'

const width = Dimensions.get('screen').width

const CardTransaksiStyle = styled.View`
  width: ${width * 0.90}px;
  /* height: 100px; */
  background-color: white;
  elevation: 3;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`

const CardTransaksi = ({ onClick, name, status, date, id }) => {
  return (
    <CardTransaksiStyle>
      <Container alignItems='flex-start' gap='5'>
        <Typografi fontSize='14' fontWeight='bold' color='gray'>{convertDate(date)}</Typografi>
        <Typografi fontSize='18' fontWeight='bold' color='#696966'>{name}</Typografi>
        <Container flexDirection='row' justifyContent='flex-start' gap='5'>
          <Typografi fontSize='16' color='#00d185' fontWeight='bold'>Status</Typografi>
          <Typografi fontSize='16' fontWeight='bold'>:</Typografi>
          <Typografi fontSize='16' fontWeight='bold' color={getColorStatus(status)}>{status}</Typografi>
        </Container>
        <Typografi fontSize='14' fontWeight='bold' color='gray'>{convertDate(date)}</Typografi>
      </Container>
      <TouchableOpacity onPress={() => onClick(id)}>
        <EvilIcons name='arrow-right' size={40} color={'gray'} />
      </TouchableOpacity>
    </CardTransaksiStyle>
  )
}

export default function DataTransaksiNasabah({ navigation }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetDataTransaksi())
  }, [dispatch])

  const { transaksiReducer } = useSelector((state) => state)

  const dataTransaksi = transaksiReducer.dataTransaksi
  const isLoading = transaksiReducer.isLoading

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#00D185" />
        </View>
      </SafeAreaView>
    )
  }

  if (dataTransaksi.length < 1) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{}}>
          <Typografi>Data Transaksi Kosong</Typografi>
        </View>
      </SafeAreaView >
    )
  }

  const onHandleClick = (id) => {
    navigation.navigate('DetailTransaksi', {
      dataId: id
    })
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Container marginTop='30' gap='20' marginBottom='30'>
          {
            dataTransaksi.map((transaksi) => (
              <CardTransaksi
                key={transaksi.id}
                id={transaksi.id}
                name={transaksi.name}
                status={transaksi.status}
                date={transaksi.tgl_transaksi}
                onClick={onHandleClick}
              />
            ))
          }
        </Container>
      </ScrollView>
    </SafeAreaView >
  )
}