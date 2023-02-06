import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import CardItemNasabah from '../../components/CardItemNasabah'
import { useSelector } from 'react-redux'

export default function DataNasabahPage({ navigation }) {
  const { nasabahReducer } = useSelector((state) => state)

  const dataNasabah = nasabahReducer.data

  return (
    dataNasabah.length <= 0 ? (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Data Kosong</Text>
      </View>
    ) : (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Spacer height={20} />
        <View style={{ flex: 1, alignItems: 'center', gap: 15 }}>
          {
            dataNasabah.map((nasabah, id) => (
              <CardItemNasabah
                key={id}
                onClick={() => navigation.navigate('DetailDataNasabah', {
                  nasabah: { ...nasabah }
                })}
                {...nasabah} />
            ))
          }
        </View>
        <Spacer height={20} />
      </ScrollView >
    )
  )
}