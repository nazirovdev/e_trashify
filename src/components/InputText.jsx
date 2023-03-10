import { TextInput } from 'react-native'
import React from 'react'

export default function InputText({ type, value, onChangeText, placeholder, isPassword, isEdit = true }) {
  return (
    <TextInput
      style={{
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        position: 'relative',
        zIndex: -99,
      }}
      keyboardType={type}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={isPassword ? true : false}
      editable={isEdit} />
  )
}