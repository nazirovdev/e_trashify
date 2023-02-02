import { ActivityIndicator, Alert, Dimensions, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DropDownPicker from 'react-native-dropdown-picker'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useInput } from '../../hooks/useInput'
import { asyncAddJenisSampah, asyncReceiveJenisSampah } from '../../store/jenis_sampah/action'
import { asyncAddDataTransaksi } from '../../store/transaksi/action'
import { api } from '../../utils/api'
import { Container, Typografi } from '../nasabah/HomeNasabah'

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

export default function TambahSampah({ navigation }) {
  const [namaSampah, setNamaSampah] = useInput('')
  const [pointSampah, setPointSampah] = useInput('')

  const dispatch = useDispatch()

  const onTambahSampah = () => {
    const data = {
      id: +new Date(),
      name: namaSampah,
      point: pointSampah
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Container gap='10'>
        <InputText placeholder='Nama Sampah' placeholderTextColor='gray' keyboardType='default' value={namaSampah} onChangeText={setNamaSampah} />
        <InputText placeholder='Point per Kg' keyboardType='number-pad' placeholderTextColor='gray' value={pointSampah} onChangeText={setPointSampah} />
        <TouchableOpacity onPress={onTambahSampah}>
          <ButtonTabungSampah>
            <Typografi color='white' fontSize='18' fontWeight='bold'>Tambah Sampah</Typografi>
          </ButtonTabungSampah>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  )
}