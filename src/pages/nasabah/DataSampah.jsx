import { View, ScrollView, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CardItemSampah from '../../components/CardItemSampah'
import Spacer from '../../components/Spacer'

export default function DataSampah({ navigation }) {
  const { sampahReducer } = useSelector(state => state)

  const dataSampah = sampahReducer.data

  return (
    dataSampah.length <= 0 ? (
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Data Kosong</Text>
      </View>
    ) : (
      <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false} >
        {
          <>
            <Spacer height={30} />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
              {
                dataSampah.map((jenisSampah, key) => (
                  <CardItemSampah
                    {...jenisSampah}
                    key={key}
                    onClick={() => { }} />
                ))
              }
            </View>
          </>
        }
        <Spacer height={30} />
      </ScrollView >
    )
  )
}