import React, { useEffect } from 'react'
import { Container, Typografi } from './HomeNasabah'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveJenisSampah } from '../../store/jenis_sampah/action'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export const CardSampah = ({ name, point }) => (
  <View style={{
    width: width * 0.40,
    height: height * 0.20,
    backgroundColor: '#edf5ef',
    elevation: 2,
    borderRadius: 5,
    overflow: 'hidden'
  }}>
    <View style={{ flex: 1, backgroundColor: 'gray' }} />
    <Container padding={3}>
      <Typografi fontSize='15' color='gray' fontWeight='bold'>{name}</Typografi>
      <Typografi fontSize='12' color='gray' fontWeight='bold'>{point} Point/Kg</Typografi>
    </Container>
  </View>
)

export default function DataSampah() {
  const { jenisSampahReducer } = useSelector(state => state)

  const dataSampah = jenisSampahReducer.jenisSampah
  const isLoading = jenisSampahReducer.isLoading

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(asyncReceiveJenisSampah())
  // }, [dispatch])

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      {
        isLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#00D185" />
          </View>
        ) : dataSampah.length < 1 ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Typografi>Data Sampah Kosong</Typografi>
          </View>
        ) : (
          <Container marginTop='30' gap='20' marginBottom='30' flexDirection='row' flexWrap='wrap'>
            {
              dataSampah.map((sampah) => (
                <CardSampah key={sampah.id} name={sampah.name} point={sampah.point} />
              ))
            }
          </Container>
        )
      }
    </SafeAreaView >
  )
}