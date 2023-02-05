import { View, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import GarbageImage from '../assets/garbage.png'

export default function CardItemSampah({ onClick, id, name, point }) {
  return (
    <TouchableOpacity onPress={() => onClick(id)}>
      <View style={{
        width: Dimensions.get('screen').width * 0.45,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}>
        <ImageBackground style={{ width: 100, height: 100 }} source={GarbageImage} />
        <Text style={{ fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontWeight: 'bold', color: 'green' }}>{point} Point</Text>
      </View>
    </TouchableOpacity>
  )
}