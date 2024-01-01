import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import test from './Components/Prop'
import widget from './Components/LoginVC'
import home from './Components/HomeScreen'
// import home from './Components/dafrahNav'
import drawer from './Components/SideMenuScreen'
import homeTab from './Components/BottomTab'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => home);
