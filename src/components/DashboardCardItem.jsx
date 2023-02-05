import { View, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

export default function DashboardCardItem({ imageSource, title, onClick }) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={{
        width: Dimensions.get('screen').width * 0.40,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
      }}>
        <ImageBackground source={imageSource} style={{ width: 100, height: 100 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}