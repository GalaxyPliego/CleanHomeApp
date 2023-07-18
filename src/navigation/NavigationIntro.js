import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/introduction/Welcome'
import Welcome2 from '../screens/introduction/Welcome2'
import Welcome3 from '../screens/introduction/Welcome3'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'

export default function NavigationIntro() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ 
          headerShown: false,
          
      }}/>
      <Stack.Screen 
        name="Welcome2" 
        component={Welcome2} 
        options={{ 
          headerShown: false,
          
      }}/>
      <Stack.Screen 
        name="Welcome3" 
        component={Welcome3} 
        options={{ 
          headerShown: false,
          
      }}/>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ 
          headerShown: false,
          
      }}/>
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ 
          headerShown: false,
          
      }}/>
    </Stack.Navigator>
  )
}