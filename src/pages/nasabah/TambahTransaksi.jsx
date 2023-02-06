import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { asyncAddSampah } from '../../store/sampah/action'
import FormInput from '../../components/FormInput'
import Spacer from '../../components/Spacer'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import DropDownPicker from 'react-native-dropdown-picker'
import { asyncAddTransaksiNasabah } from '../../store/transaksiNasabah/action'

export default function TambahTransaksiNasabah({ navigation }) {
  const { sampahReducer } = useSelector(state => state)
  const dataSampah = sampahReducer.data

  const [beratSampah, setBeratSampah] = useState(0)
  const [pointSampah, setPointSampah] = useState(0)

  const [totalPoint, setTotalPoint] = useState(0)

  const [deskripsi, setDeskripsi] = useState('')

  const [openSampah, setOpenSampah] = useState(false);
  const [valueSampah, setValueSampah] = useState(null);
  const [itemsSampah, setItemsSampah] = useState(
    dataSampah.map((sampah, id) => ({
      label: sampah.name,
      value: sampah.id,
      key: id
    })));

  const dispatch = useDispatch()

  const onTambahHandle = () => {
    dispatch(asyncAddTransaksiNasabah({ idJenisSampah: valueSampah, berat: beratSampah, description: deskripsi }))

    navigation.pop()
  }

  const onChangeBerat = (value) => {
    setBeratSampah(value)
    setTotalPoint(value * pointSampah)
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FormInput>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Tambah Transaksi Sekarang</Text>
        <Spacer height={10} />
        <DropDownPicker
          open={openSampah}
          value={valueSampah}
          items={itemsSampah}
          setOpen={setOpenSampah}
          setValue={setValueSampah}
          setItems={setItemsSampah}
          style={{ zIndex: 99, borderColor: 'gray', borderWidth: 2 }}
          listMode='SCROLLVIEW'
          placeholder='Pilih Jenis Sampah'
          onChangeValue={() => {
            const filteredDataSampah = dataSampah.find((sampah) => sampah.id === valueSampah)
            const { point } = filteredDataSampah
            setPointSampah(point)
            setBeratSampah(1)
            setTotalPoint(point)
          }}
        />
        <InputText placeholder='Masukkan Berat' value={beratSampah.toString()} onChangeText={onChangeBerat} type='number-pad' />
        <InputText placeholder='Total Point' value={totalPoint.toString()} type='number-pad' isEdit={false} />
        <InputText placeholder='Deskripsi' value={deskripsi} onChangeText={setDeskripsi} />
        <Spacer height={5} />
        <Button onClick={onTambahHandle}>Tabung Sekarang</Button>
      </FormInput>
    </View>
  )
}