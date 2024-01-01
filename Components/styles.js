import { StyleSheet,StatusBar,TabBarIOSItem} from 'react-native';
import { Dimensions } from 'react-native';
// const { width, height } = Dimensions.get("window");
// import {I18nManager} from 'react-native';
// import myColors from '../res/color.js';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
  
    },
    item: {
      width: Dimensions.get('window').width - 20,
      height: 70,
      marginBottom: 10,
      marginTop: 10,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#c0cbc0',
  
    },
    nameText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18
    },
    msgText: {
      color: 'white',
      fontWeight: '500',
      fontSize: 16
    },
    profileImgStyle: {
      height: 60,
      width: 60,
      borderRadius: 30,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center'
    },
    deleteBtnStyle: {
      fontWeight: 'bold',
      fontSize: 12,
    },
    
  });

  export default styles;