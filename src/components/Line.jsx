import { View } from 'react-native'
import React from 'react'

export default function Line({ width, bgColor, height }) {
  return (
    <View style={{ width: width, backgroundColor: bgColor, height: height }} />
  )
}