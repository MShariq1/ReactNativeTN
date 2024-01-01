import React, { Component, useState } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tabChatScreen from './TabChat'
import tabHomeScreen from './TabHome'
import tabProfileScreen from './TabProfile'
import tabSearchScreen from './TabSearch'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Chat') {
            iconName = 'ios-list';
            // iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name == "Profile") {
            iconName = 'ios-list-box';
          } else {
            iconName = 'add-circle'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        
        <Tab.Screen name="Home" component={tabHomeScreen} />
        <Tab.Screen name="Chat" component={tabChatScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Search" component={tabSearchScreen} options={{headerBackVisible: false, headerShown: false}} />
        <Tab.Screen name="Profile" component={tabProfileScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}