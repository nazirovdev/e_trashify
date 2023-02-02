import { ActivityIndicator, Alert, Dimensions, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DropDownPicker from 'react-native-dropdown-picker'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useInput } from '../../hooks/useInput'
import { asyncReceiveJenisSampah } from '../../store/jenis_sampah/action'
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

export default function DaftarNasabah({ navigation }) {
  const [nameNasabah, setNameNasabah] = useInput('')
  const [emailNasabah, setEmailNasabah] = useInput('')
  const [passwordNasabah, setPasswordNasabah] = useInput('')
  const [alamatNasabah, setAlamatNasabah] = useInput('')

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Container gap='10'>
        <InputText placeholder='Nama Nasabah' placeholderTextColor='gray' keyboardType='default' value={nameNasabah} onChangeText={setNameNasabah} />
        <InputText placeholder='Email Nasabah' keyboardType='email-address' placeholderTextColor='gray' value={emailNasabah} onChangeText={setEmailNasabah} />
        <InputText placeholder='Password Nasabah' keyboardType='default' placeholderTextColor='gray' value={passwordNasabah} onChangeText={setPasswordNasabah} />
        <InputText placeholder='Alamat Nasabah' keyboardType='default' placeholderTextColor='gray' value={alamatNasabah} onChangeText={setAlamatNasabah} />
        <TouchableOpacity onPress={() => { }}>
          <ButtonTabungSampah>
            <Typografi color='white' fontSize='18' fontWeight='bold'>Daftar Nasabah</Typografi>
          </ButtonTabungSampah>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  )
}