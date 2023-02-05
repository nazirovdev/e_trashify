import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import ProfileItem from '../../components/ProfileItem'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { asyncDeleteNasabah } from '../../store/nasabah/action'

export default function DetailDataNasabah({ route, navigation }) {
  const { address, email, id, name, point } = route.params.nasabah

  const dispatch = useDispatch()

  const onDeleteNasabah = () => {
    dispatch(asyncDeleteNasabah(id))
    navigation.pop()
  }

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Spacer height={100} />
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <View style={{
          width: Dimensions.get('screen').width * 0.90,
          paddingVertical: 30,
          elevation: 1,
          borderRadius: 10,
          alignItems: 'center',
          position: 'relative',
          backgroundColor: 'white'
        }}>
          <View style={{ gap: 10, backgroundColor: 'white' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{name}</Text>
            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>{email}</Text>
          </View>
          <View style={{
            width: 100,
            height: 100,
            backgroundColor: 'white',
            borderRadius: 100,
            position: 'absolute',
            top: -75,
            elevation: 2
          }} />
        </View>
        <Spacer height={30} />
        <View style={{ width: Dimensions.get('screen').width * 0.90, paddingVertical: 20, paddingHorizontal: 10, borderRadius: 10, elevation: 1 }}>
          <ProfileItem iconName='account' profileVariant='Alamat' profileContent={address} />
        </View>
        <Spacer height={10} />
        <View style={{ width: Dimensions.get('screen').width * 0.90, paddingVertical: 20, paddingHorizontal: 10, borderRadius: 10, elevation: 1 }}>
          <ProfileItem iconName='account' profileVariant='Total Point' profileContent={point} />
        </View>
      </View>
      <Spacer height={30} />
      <View onPress={onDeleteNasabah} style={{ width: Dimensions.get('screen').width * 0.90, alignSelf: 'center' }}>
        <Button onClick={onDeleteNasabah}>Hapus</Button>
      </View>
      <Spacer height={30} />
    </ScrollView>
  )
}