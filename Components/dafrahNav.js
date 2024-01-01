/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *https://betterprogramming.pub/creating-a-multi-language-app-in-react-native-9828b138c274
 * @format https://www.youtube.com/watch?v=-x9sHrkzRyw
 * @flow strict-local
 */

 import React, { Component, useEffect, useState } from 'react';
 import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { createNativeStackNavigator, } from '@react-navigation/native-stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 const Drawer = createDrawerNavigator();
 const Stack = createNativeStackNavigator();
 const MaterialBottomTabs = createMaterialBottomTabNavigator();
 const Tab = createBottomTabNavigator();
 export const navigationRef = createNavigationContainerRef()

 import LoginScreen from './LoginVC';
import RegisterScreen from './RegisterVC'
import tabChatScreen from './TabChat'
import tabHomeScreen from './TabHome'
import tabProfileScreen from './TabProfile'
import tabSearchScreen from './TabSearch'

 
 export default function App() {
 
   createHomeStack = () =>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} key="MainHome" options={{headerBackVisible: false, swipeEnabled: false, gesturesEnabled: false, }}/>
          <Stack.Screen name="Register" component={RegisterScreen} />
          {/* <Stack.Screen name="baseDrawer" component={baseDrawer} options={{headerBackVisible: false, headerShown: false}} /> */}
          {/* <Stack.Screen name="HomeVC" component={HomeTab} options={{headerBackVisible: false}} /> */}
          <Stack.Screen name="Bottom-Tabs" children={MyTabs} />
     </Stack.Navigator>
 
   MyTabs = () => {
     return <Tab.Navigator
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
   }
 
 
   return (
 
     <NavigationContainer>

       <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="MAIN" children={createHomeStack} />
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>

     </NavigationContainer>
   );
 }

 function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
  }

  function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    );
  }
  
  function Article() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Article Screen</Text>
      </View>
    );
  }
 
 