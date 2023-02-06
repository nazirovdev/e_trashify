import { View } from 'react-native'
import React from 'react'

export default function Avatar({ width, height, children }) {
  return (
    <View style={{
      width: width,
      height: height,
      backgroundColor: '#f0f0f0',
      borderRadius: 100,
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center'
    }}>{children}</View>
  )
}