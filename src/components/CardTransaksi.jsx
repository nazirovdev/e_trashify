import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { convertDate } from '../utils/index'

export default function CardTransaksi({ onClick, name_nasabah, tgl_transaksi, total_point, name_jenis_sampah, berat }) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={{
        width: Dimensions.get('screen').width * 0.90,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 1,
        overflow: 'hidden',
        padding: 10
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ backgroundColor: 'red', width: 60, height: 60, borderRadius: 100 }} />
          <View>
            <Text style={{ fontWeight: 'bold' }}>{name_nasabah}</Text>
            <Text>{name_jenis_sampah} {berat}Kg</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontWeight: 'bold' }}>{total_point} Point</Text>
            <Text>{convertDate(tgl_transaksi)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}