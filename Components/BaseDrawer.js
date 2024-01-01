import 'react-native-gesture-handler';
import React, { Component, useState } from 'react'
import { createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    ImageBackground
  } from 'react-native'
  import HomeTab from './BottomTab'
  import MainStack from './HomeScreen'


const Drawer = createDrawerNavigator();

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

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </DrawerContentScrollView>
    );
  }

function MyDrawer() {
    return (
      // <NavigationContainer>
          <Drawer.Navigator useLegacyImplementation>
        {/* <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}></Drawer.Navigator> */}
        {/* <Drawer.Screen name="MAIN" component={MainStack} /> */}
        <Drawer.Screen name="HomeVC" component={HomeTab} options={{headerBackVisible: false}} />
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
      /* </NavigationContainer> */
      
    ); 
  }
  
  function App() {
    return (
      // <NavigationContainer>
        <MyDrawer />
      // </NavigationContainer>
    );
  }
  
  export default App;