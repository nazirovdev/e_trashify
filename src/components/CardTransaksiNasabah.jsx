import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { convertDate, getFirstName, getTwoCharName } from '../utils/index'
import TransactionStatus from './TransactionStatus'

export default function CardTransaksiNasabah({ onClick, name, tgl_transaksi, status }) {
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
        <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
          <View style={{
            backgroundColor: 'white',
            width: 60,
            height: 60,
            borderRadius: 100,
            elevation: 4,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{getTwoCharName(name)}</Text>
          </View>
          <View style={{ gap: 5, flex: 1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{getFirstName(name)}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{convertDate(tgl_transaksi)}</Text>
          </View>
          <View>
            <TransactionStatus status={status} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}