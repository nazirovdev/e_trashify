import { View, Text } from 'react-native'
import React from 'react'

export default function Spacer({ height }) {
  return (
    <View style={{
      height: height,
    }} />
  )
}