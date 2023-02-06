import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { convertDate, getTwoCharName } from '../utils/index'
import TransactionStatus from './TransactionStatus'

export default function CardTransaksi({ onClick, name_nasabah, tgl_transaksi, total_point, name_jenis_sampah, berat, status }) {
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
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', gap: 10 }}>
          <View style={{
            backgroundColor: 'white',
            width: 60,
            height: 60,
            borderRadius: 100,
            elevation: 4,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{getTwoCharName(name_nasabah)}</Text>
          </View>
          <View style={{ gap: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{name_nasabah}</Text>
            <TransactionStatus status={status} />
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{berat}Kg</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{total_point} Point</Text>
            <Text>{convertDate(tgl_transaksi)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}