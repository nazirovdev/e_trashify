import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashboardAdminPage from './DashboardAdminPage'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ProfileAdminPage from './ProfileAdminPage'

export default function Admin() {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-circle-o' : 'user-circle-o';
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'rgb(34 197 94)',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name='Dashboard' component={DashboardAdminPage} options={{ headerTitle: 'Dashboard' }} />
      <Tab.Screen name='Profile' component={ProfileAdminPage} options={{ headerTitle: 'Profile' }} />
    </Tab.Navigator>
  )
}