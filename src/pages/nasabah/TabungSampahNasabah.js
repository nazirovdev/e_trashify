import { ActivityIndicator, Alert, Dimensions, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container, Typografi } from './HomeNasabah'
import DropDownPicker from 'react-native-dropdown-picker'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useInput } from '../../hooks/useInput'
import { asyncReceiveJenisSampah } from '../../store/jenis_sampah/action'
import { asyncAddDataTransaksi } from '../../store/transaksi/action'
import { api } from '../../utils/api'

const width = Dimensions.get('screen').width

const InputText = styled.TextInput`
    background-color: white;
    border-radius: 5px;
    border-width: 2px;
    border-color: #e6e6e6;
    padding-left:10px;
    font-weight: bold;
    width: ${({ width }) => `${width}px`};
    position: relative;
    z-index: -1;
  `

InputText.defaultProps = {
  width: `${width * 0.90}`,
}

const ButtonTabungSampah = styled.View`
    width: ${({ width }) => `${width}px`};
    background-color: #00d185;
    padding: 15px;
    align-items: center;
    border-radius: 10px;
  `

ButtonTabungSampah.defaultProps = {
  width: `${width * 0.90}`
}

export default function TabungSampahNasabah({ navigation }) {
  const [typePoint, setTypePoint] = useState('0')
  const [berat, setBerat] = useInput('')
  const [point, setPoint] = useInput('0')
  const [deskripsi, setDeskripsi] = useInput('')

  const { jenisSampahReducer } = useSelector(state => state)

  const dataSampah = jenisSampahReducer.jenisSampah
  const isLoading = jenisSampahReducer.isLoading

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false);
  const [valuex, setValuex] = useState(null);
  const [items, setItems] = useState(() => dataSampah.map((sampah) => ({
    label: sampah.name, value: sampah.id
  })));

  const onChangeValueHandle = (value) => {
    const sampah = dataSampah.find((sampah) => sampah.id === value)

    setValuex(value => value)
    setTypePoint(sampah?.point)

    setBerat(1)
    setPoint(sampah.point)
  }

  const onSetBeratHandle = (berat) => {
    setBerat(berat)

    if (valuex !== null) {
      setPoint(Number(berat) * typePoint)
    }
  }

  const onTabungHandle = async () => {
    if (valuex === null || berat === '') {
      return Alert.alert('Pastikan Form valid')
    }

    dispatch(asyncAddDataTransaksi(
      {
        idJenisSampah: valuex, berat, description: deskripsi
      }, () => Alert.alert('Pesan', 'Data Berhasil dibuat')), navigation.pop())
  }

  return (
    <SafeAreaView style={isLoading && { flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {
        isLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#00D185" />
          </View>
        ) : (
          <Container gap='20' marginTop='30'>
            <View style={{ width: width * 0.90 }}>
              <DropDownPicker
                onChangeValue={onChangeValueHandle}
                open={open}
                value={valuex}
                items={items}
                setOpen={setOpen}
                setValue={setValuex}
                setItems={setItems}
                placeholderStyle={{
                  color: 'gray',
                  fontWeight: 'bold'
                }}
                textStyle={{
                  color: '#00d185',
                  fontWeight: 'bold'
                }}
                style={{
                  borderColor: '#e6e6e6',
                  borderWidth: 2,
                  position: 'relative',
                  zIndex: 999
                }}
              />
            </View>
            <Container flexDirection='row' gap={width * 0.001} zIndex={-1}>
              <InputText placeholder='Masukkan Berat Sampah'
                placeholderTextColor='gray'
                keyboardType='number-pad'
                width={width * 0.7}
                value={berat.toString()}
                onChangeText={onSetBeratHandle} />
              <InputText placeholder='Kg' placeholderTextColor='gray' editable={false} width={width * 0.2} />
            </Container>
            <InputText placeholder='Total Point' placeholderTextColor='gray' editable={false} keyboardType='number-pad' value={`${point.toString()} Point`} />
            <InputText placeholder='Deskripsi' placeholderTextColor='gray' value={deskripsi} onChangeText={setDeskripsi} />
            <TouchableOpacity onPress={onTabungHandle}>
              <ButtonTabungSampah>
                <Typografi color='white' fontSize='18' fontWeight='bold'>Tabung Skuy</Typografi>
              </ButtonTabungSampah>
            </TouchableOpacity>
          </Container>
        )
      }
    </SafeAreaView>
  )
}