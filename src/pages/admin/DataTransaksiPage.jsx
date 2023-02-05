import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import CardTransaksi from '../../components/CardTransaksi'
import { useSelector } from 'react-redux'

export default function DataTransaksiPage({ navigation }) {
  const { transaksiReducer } = useSelector((state) => state)

  return (
    <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
      <Spacer height={30} />
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ alignItems: 'center', backgroundColor: 'white', gap: 10 }}>
          {
            transaksiReducer.map((transaksi, id) => (
              <CardTransaksi key={id} onClick={() => navigation.navigate('DetailTransaction', {
                transaksi: transaksi
              })} {...transaksi} />
            ))
          }
        </View>
      </View>
      <Spacer height={30} />
    </ScrollView>
  )
}