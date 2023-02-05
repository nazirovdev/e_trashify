import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({ children, onClick }) {
  return (
    <TouchableOpacity style={{
      backgroundColor: 'gray',
      padding: 12,
      borderRadius: 5,
    }}
      onPress={onClick}>
      <View>
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 15
        }}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}