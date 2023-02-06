import { Text } from 'react-native'
import React from 'react'

export default function TransactionStatus({ status, padding = 5 }) {
  return (
    <Text style={{
      padding: padding,
      backgroundColor: (status === 'pending') ? 'rgb(245 158 11)' : (status === 'success') ? 'rgb(34 197 94)' : 'rgb(239 68 68)',
      alignSelf: 'baseline',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 5
    }}>{status}</Text>
  )
}