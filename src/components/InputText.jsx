import { TextInput } from 'react-native'
import React from 'react'

export default function InputText({ type, value, onChangeText, placeholder, isPassword }) {
  return (
    <TextInput
      style={{
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
      }}
      keyboardType={type}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={isPassword ? true : false} />
  )
}