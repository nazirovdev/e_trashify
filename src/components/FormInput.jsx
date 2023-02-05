import { View } from 'react-native'
import React from 'react'

export default function FormInput({ children }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 10, justifyContent: 'center', gap: 10 }}>
      {children}
    </View>
  )
}