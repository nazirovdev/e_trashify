import { View, ScrollView, Text } from 'react-native'
import React, { useEffect } from 'react'
import Spacer from '../components/Spacer'
import CardItemSampah from '../components/CardItemSampah'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveJenisSampah } from '../store/jenis_sampah/action'
import Loading from '../components/Loading'

export default function DataJenisSampah({ navigation }) {
  const { isLoadingReducer, jenisSampahReducer } = useSelector(state => state)

  if (isLoadingReducer) {
    return <Loading />
  }

  return (
    (
      <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false} >
        {
          jenisSampahReducer.length <= 0 ? (
            <>
              <Spacer height={200} />
              <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Data Kosong</Text>
              </View>
            </>
          ) : (
            <>
              <Spacer height={30} />
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
                {
                  jenisSampahReducer.map((jenisSampah, key) => (
                    <CardItemSampah
                      {...jenisSampah}
                      key={key}
                      onClick={(id) => navigation.navigate('DetailJenisSampah', { jenisSampah: { ...jenisSampah } })} />
                  ))
                }
              </View>
            </>
          )
        }
        <Spacer height={30} />
      </ScrollView >
    )
  )
}