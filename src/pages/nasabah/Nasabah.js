import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { RankinkNasabah } from './RankinkNasabah'
import { HomePage } from './HomeNasabah'
import { Profile } from './ProfileNasabah'

export default function Nasabah() {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Ionicons name='ios-home' size={size} color={color} />;
          } else if (route.name === 'Ranking') {
            return <MaterialIcons name='leaderboard' size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <FontAwesome name='user' size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#00D185',
        tabBarInactiveTintColor: '#a5a7a8',
        tabBarStyle: {
          backgroundColor: '#f7f7f7',
        }
      })}
    >
      <Tab.Screen name='Ranking' component={RankinkNasabah} options={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#00D185' },
        headerShadowVisible: false
      }} />
      <Tab.Screen name='Home' component={HomePage} options={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#00D185' },
        headerShadowVisible: false
      }} />
      <Tab.Screen name='Profile' component={Profile} options={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#00D185' },
        headerShadowVisible: false
      }} />
    </Tab.Navigator>
  )
}