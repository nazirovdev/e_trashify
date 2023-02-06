import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import { getTwoCharName } from '../utils'

export default function CardItemNasabah({ onClick, name }) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={{
        width: Dimensions.get('screen').width * 0.90,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 10,
        elevation: 2,
      }}>
        <Avatar width={80} height={80}>
          <Text style={{ fontSize: 40 }}>{getTwoCharName(name)}</Text>
        </Avatar>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{name}</Text>
          <Text style={{ fontSize: 16 }}>Nasabah</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}