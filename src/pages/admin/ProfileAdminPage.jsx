import { View, Dimensions, Text } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import ProfileItem from '../../components/ProfileItem'
import Line from '../../components/Line'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getTwoCharName } from '../../utils'
import { asyncUnsetAuthUser } from '../../store/auth/action'

export default function ProfileAdminPage({ navigation }) {
  const { authUserReducer } = useSelector(state => state)
  const authUserData = authUserReducer.data

  const dispatch = useDispatch()

  const onLogoutHandle = () => {
    dispatch(asyncUnsetAuthUser())
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingTop: 60
    }}>
      <Avatar width={130} height={130}>
        <Text style={{ fontSize: 36, fontWeight: 'bold' }}>{getTwoCharName(authUserData.name)}</Text>
      </Avatar>
      <Spacer height={30} />
      <View style={{ width: Dimensions.get('screen').width * 0.80 }}>
        <ProfileItem
          iconName='account'
          profileVariant='Nama'
          profileContent={authUserData.name} />
        <Spacer height={15} />
        <Line height={2} bgColor='#dedcdc' />
        <Spacer height={15} />
        <ProfileItem
          iconName='email'
          profileVariant='Email'
          profileContent={authUserData.email} />
        <Spacer height={15} />
        <Line height={2} bgColor='#dedcdc' />
        <Spacer height={55} />
        <Button onClick={onLogoutHandle}>Logout</Button>
        <Spacer height={5} />
      </View>
    </View>
  )
}