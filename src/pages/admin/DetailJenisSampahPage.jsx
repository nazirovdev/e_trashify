import { View, Text } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../../components/FormInput'
import Spacer from '../../components/Spacer'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { asyncDeleteSampah, asyncEditSampah } from '../../store/sampah/action'

export default function DetailJenisSampahPage({ route, navigation }) {
  const { id, name, point } = route.params.jenisSampah

  const [nameSampah, setNameSampah] = useInput(name)
  const [namePoint, setPoint] = useInput(point)

  const dispatch = useDispatch()

  const onHandlePut = () => {
    dispatch(asyncEditSampah({ id, name: nameSampah, point: namePoint }))

    navigation.pop()
  }

  const onHandleDelete = () => {
    dispatch(asyncDeleteSampah({ id }))

    navigation.pop()
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FormInput>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Detail Jenis Sampah</Text>
        <Spacer height={10} />
        <InputText placeholder='Masukkan Nama' value={nameSampah} onChangeText={setNameSampah} />
        <InputText placeholder='Masukkan Point per 1Kg' value={`${namePoint}`} onChangeText={setPoint} />
        <Spacer height={5} />
        <Button onClick={onHandlePut}>Perbaharui</Button>
        <Button onClick={onHandleDelete}>Hapus</Button>
      </FormInput>
    </View>
  )
}