import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import ProfileItem from '../../components/ProfileItem'
import Line from '../../components/Line'
import Avatar from '../../components/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import { unsetAuthUser } from '../../store/authUser/action'

export default function ProfileAdminPage({ navigation }) {
  const { authUserReducer } = useSelector(state => state)

  const { name, email } = authUserReducer

  const dispatch = useDispatch()

  const onLogoutHandle = () => {
    dispatch(unsetAuthUser())
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingTop: 60
    }}>
      <Avatar width={150} height={150} />
      <Spacer height={30} />
      <View style={{ width: Dimensions.get('screen').width * 0.80 }}>
        <ProfileItem
          iconName='account'
          profileVariant='Nama'
          profileContent={name} />
        <Spacer height={5} />
        <Line height={2} bgColor='#dedcdc' />
        <Spacer height={5} />
        <ProfileItem
          iconName='email'
          profileVariant='Email'
          profileContent={email} />
        <Spacer height={5} />
        <Line height={2} bgColor='#dedcdc' />
        <Spacer height={55} />
        <Button onClick={onLogoutHandle}>Logout</Button>
        <Spacer height={5} />
      </View>
    </View>
  )
}