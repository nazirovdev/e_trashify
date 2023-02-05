import React from 'react'
import FormInput from '../../components/FormInput'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import { Text, TouchableOpacity, View } from 'react-native'
import Spacer from '../../components/Spacer'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { asyncSetAuthNasabah, setAuthUser } from '../../store/authUser/action'

export default function LoginNasabahPage({ navigation }) {
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')

  const dispatch = useDispatch()

  const onLoginHandle = () => {
    dispatch(asyncSetAuthNasabah({ email, password }))
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FormInput>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Login Nasabah</Text>
        <Spacer height={10} />
        <InputText placeholder='Masukkan Email' value={email} onChangeText={setEmail} />
        <InputText placeholder='Masukkan Password' isPassword={true} value={password} onChangeText={setPassword} />
        <Spacer height={5} />
        <Button onClick={onLoginHandle}>Masuk Sekarang</Button>
        <TouchableOpacity onPress={() => navigation.navigate('LoginAdmin')}>
          <Text style={{ fontWeight: 'bold' }}>Login sebagai Admin ?</Text>
        </TouchableOpacity>
      </FormInput>
    </View>
  )
}