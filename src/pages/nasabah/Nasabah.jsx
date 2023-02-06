import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProfileNasabahPage from './ProfileNasabahPage'
import DashboardNasabahPage from './DashboardNasabahPage'

export default function Nasabah() {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'rgb(34 197 94)',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name='Dashboard' component={DashboardNasabahPage} options={{ headerTitle: 'Dashboard' }} />
      <Tab.Screen name='Profile' component={ProfileNasabahPage} options={{ headerTitle: 'Profile' }} />
    </Tab.Navigator>
  )
}