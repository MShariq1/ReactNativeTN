import 'react-native-gesture-handler';
import React, { Component, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginVC';
import RegisterScreen from './RegisterVC'
import baseDrawer from './BaseDrawer'
import HomeTab from './BottomTab'
import ConvoScreen from './ConversationVC'
import HomeDetails from './HomeDetail'

import {
  Text, 
  View,
  Button
} from 'react-native'
  
  const Stack = createNativeStackNavigator();
  
  function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} key="MainHome" options={{headerBackVisible: false, swipeEnabled: false, gesturesEnabled: false, }}/>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="baseDrawer" component={baseDrawer} options={{headerBackVisible: false, headerShown: false}} />
          <Stack.Screen name="HomeVC" component={HomeTab} options={{headerBackVisible: false}} />
          <Stack.Screen name="ConvoVC" component={ConvoScreen} />
          <Stack.Screen name="HomeDetail" component={HomeDetails}  />
          {/* , headerShown: false}} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;