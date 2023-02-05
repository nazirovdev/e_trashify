import React from 'react'
import FormInput from '../../components/FormInput'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import { Text, TouchableOpacity, View } from 'react-native'
import Spacer from '../../components/Spacer'
import { useInput } from '../../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { asyncSetAuthAdmin } from '../../store/authUser/action'
import Loading from '../../components/Loading'

export default function LoginAdminPage({ navigation }) {
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')

  const { isLoadingReducer } = useSelector(state => state)

  const dispatch = useDispatch()

  const onLoginHandle = () => {
    dispatch(asyncSetAuthAdmin({ email, password }))
  }

  if (isLoadingReducer) {
    return <Loading />
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FormInput>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Login Admin</Text>
        <Spacer height={10} />
        <InputText placeholder='Masukkan Email' value={email} onChangeText={setEmail} />
        <InputText placeholder='Masukkan Password' isPassword={true} value={password} onChangeText={setPassword} />
        <Spacer height={5} />
        <Button onClick={onLoginHandle}>Masuk Sekarang</Button>
        <TouchableOpacity onPress={() => navigation.navigate('LoginNasabah')}>
          <Text style={{ fontWeight: 'bold' }}>Login sebagai Nasabah ?</Text>
        </TouchableOpacity>
      </FormInput>
    </View>
  )
}