import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import ProfileItem from '../../components/ProfileItem'
import Line from '../../components/Line'
import Avatar from '../../components/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import { getTwoCharName } from '../../utils'
import { asyncUnsetAuthUser } from '../../store/auth/action'

export default function ProfileNasabahPage() {
  const { authUserReducer } = useSelector(state => state)

  const { name, email, address } = authUserReducer.data

  const dispatch = useDispatch()

  const onLogoutHandle = () => {
    dispatch(asyncUnsetAuthUser())
  }

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 30
      }}>
        <Avatar width={150} height={150}>
          <Text style={{ fontSize: 46, fontWeight: 'bold' }}>{getTwoCharName(name)}</Text>
        </Avatar>
        <Spacer height={30} />
        <View style={{ width: Dimensions.get('screen').width * 0.80 }}>
          <ProfileItem
            iconName='account'
            profileVariant='Nama'
            profileContent={name} />
          <Spacer height={15} />
          <Line height={2} bgColor='#dedcdc' />
          <Spacer height={15} />
          <ProfileItem
            iconName='email'
            profileVariant='Email'
            profileContent={email} />
          <Spacer height={15} />
          <Line height={2} bgColor='#dedcdc' />
          <Spacer height={15} />
          <ProfileItem
            iconName='google-maps'
            profileVariant='Alamat'
            profileContent={address} />
          <Spacer height={15} />
          <Line height={2} bgColor='#dedcdc' />
          <Spacer height={30} />
          <Button onClick={onLogoutHandle}>Logout</Button>
          <Spacer height={15} />
        </View>
      </View>
    </ScrollView>
  )
}