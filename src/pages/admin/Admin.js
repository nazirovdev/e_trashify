import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ProfileAdmin } from './ProfileAdmin'
import DataSampah from './DataSampah'
import { HomeAdmin } from './HomeAdmin'

export default function Admin() {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName='HomeAdmin'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'HomeAdmin') {
            return <AntDesign name='database' size={size} color={color} />;
          } else if (route.name === 'SampahAdmin') {
            return <MaterialIcons name='leaderboard' size={size} color={color} />;
          } else if (route.name === 'ProfileAdmin') {
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
      <Tab.Screen name='SampahAdmin' component={DataSampah} options={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#00D185' },
        headerShadowVisible: false,
        title: 'Master Data'
      }} />
      <Tab.Screen name='HomeAdmin' component={HomeAdmin} options={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#00D185' },
        headerShadowVisible: false,
        title: 'Home'
      }} />
      <Tab.Screen name='ProfileAdmin' component={ProfileAdmin} options={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#00D185' },
        headerShadowVisible: false,
        title: 'Profile'
      }} />
    </Tab.Navigator>
  )
}