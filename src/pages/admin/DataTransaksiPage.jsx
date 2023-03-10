import { View, ScrollView, Text } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import CardTransaksi from '../../components/CardTransaksi'
import { useSelector } from 'react-redux'

export default function DataTransaksiPage({ navigation }) {
  const { transaksiReducer } = useSelector(state => state)
  const dataTransaksi = transaksiReducer.data

  return (
    dataTransaksi.length <= 0 ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Data Masih Kosong</Text>
      </View>
    ) : (
      <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
        <Spacer height={30} />
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ alignItems: 'center', backgroundColor: 'white', gap: 10 }}>
            {
              dataTransaksi.map((transaksi, id) => (
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
  )
}