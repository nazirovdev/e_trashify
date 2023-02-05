import { View, Text } from 'react-native'
import React from 'react'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ProfileItem({ iconName, profileVariant, profileContent }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      <MCIcon name={iconName} size={30} />
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{profileVariant}</Text>
        <Text>{profileContent}</Text>
      </View>
    </View>
  )
}