import { View, Text } from 'react-native'
import React from 'react'
import FormInput from '../../components/FormInput'
import Spacer from '../../components/Spacer'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { asyncAddSampah } from '../../store/sampah/action'

export default function TambahJeniSampahPage({ navigation }) {
  const [namaSampah, setNamaSampah] = useInput('')
  const [pointSampah, setPointSampah] = useInput('')

  const dispatch = useDispatch()

  const onTambahHandle = () => {
    dispatch(asyncAddSampah({ name: namaSampah, point: pointSampah }, () => {
      navigation.pop()
    }))
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FormInput>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Tambah Jenis Sampah</Text>
        <Spacer height={10} />
        <InputText placeholder='Masukkan Nama' value={namaSampah} onChangeText={setNamaSampah} />
        <InputText placeholder='Masukkan Point per 1Kg' value={pointSampah} onChangeText={setPointSampah} type='number-pad' />
        <Spacer height={5} />
        <Button onClick={onTambahHandle}>Tambah</Button>
      </FormInput>
    </View>
  )
}