// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeTab from './BottomTab'

//   const Drawer = createDrawerNavigator();

//   const App = () => {
//         return (
//             <NavigationContainer>
//               <Drawer.Navigator>
//                 <Drawer.Screen name="Home" component={HomeTab} />
//                 {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
//               </Drawer.Navigator>
//             </NavigationContainer>
//           );
//   }

//   export default App;








// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Article() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Article Screen</Text>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator useLegacyImplementation>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }