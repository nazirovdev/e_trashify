import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FormInput from '../../components/FormInput'
import Spacer from '../../components/Spacer'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { addNasabah, asyncAddNasabah } from '../../store/nasabah/action'

export default function DaftarNasabah({ navigation }) {
  const [name, setName] = useInput('')
  const [email, setEmail] = useInput('')
  const [alamat, setAlamat] = useInput('')
  const [password, setPassword] = useInput('')

  const dispatch = useDispatch()

  const onDaftarNasabah = () => {
    const newNasabah = {
      name, email, alamat, password
    }

    dispatch(asyncAddNasabah({ name, email, address: alamat, password, point: 0 }))

    navigation.pop()
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FormInput>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Daftar Nasabah</Text>
        <Spacer height={10} />
        <InputText placeholder='Masukkan Nama' value={name} onChangeText={setName} />
        <InputText placeholder='Masukkan Email' value={email} onChangeText={setEmail} />
        <InputText placeholder='Masukkan Alamat' value={alamat} onChangeText={setAlamat} />
        <InputText placeholder='Masukkan Password' value={password} onChangeText={setPassword} isPassword={true} />
        <Spacer height={5} />
        <Button onClick={onDaftarNasabah}>Daftar</Button>
      </FormInput>
    </View>
  )
}