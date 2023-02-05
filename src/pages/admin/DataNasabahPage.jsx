import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import CardItemNasabah from '../../components/CardItemNasabah'
import { useSelector } from 'react-redux'

export default function DataNasabahPage({ navigation }) {
  const { nasabahReducer } = useSelector((state) => state)

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Spacer height={20} />
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', gap: 15 }}>
        {
          nasabahReducer.map((nasabah, id) => (
            <CardItemNasabah
              key={id}
              onClick={() => navigation.navigate('DetailDataNasabah', {
                nasabah: { ...nasabah, point: (nasabah.point === 0 ? '0' : nasabah.point) }
              })}
              {...nasabah} />
          ))
        }
      </View>
      <Spacer height={20} />
    </ScrollView>
  )
}