import { View, ScrollView, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CardTransaksi from '../../components/CardTransaksi'
import Spacer from '../../components/Spacer'
import CardTransaksiNasabah from '../../components/CardTransaksiNasabah'

export default function DataTransaksiNasabahPage({ navigation }) {
  const { transaksiNasabahReducer } = useSelector(state => state)
  const dataTransaksi = transaksiNasabahReducer.data

  // return null

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
                <CardTransaksiNasabah key={id} onClick={() => navigation.navigate('DetailTransactionNasabah', {
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