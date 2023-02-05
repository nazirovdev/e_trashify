import { View } from 'react-native'
import React from 'react'

export default function Avatar({ width, height }) {
  return (
    <View style={{
      width: width,
      height: height,
      backgroundColor: '#f0f0f0',
      borderRadius: 100,
      elevation: 5
    }} />
  )
}