import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  Dimensions,
  FlatList,
  StatusBar, RefreshControl
} from 'react-native'
import { ActivityIndicator } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler/lib/commonjs'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      currentPage: 0,

    };



  }

   async _onRefresh() {
    console.log('refresh pressed')
    // const isConnected = this.isNetworkConnected()
    // if (isConnected) {
    //   this.getDatafromServer();
    //   this.state.currentPage = 0

    // }

  }

  render() {
    return (

      <View style={styles.container}>
        <StatusBar animated={true} backgroundColor='transparent' barStyle={'light-content'} showHideTransition={'fade'} hidden={false} />
        <ScrollView contentContainerStyle={{ paddingBottom: 70 }} ref={ref => this.scroll = ref} refreshControl={
          <RefreshControl refreshing={this.state.isLoading} onRefresh={this._onRefresh.bind(this)} />
        }  >
          <View>
        <Image style={styles.logoImgStyle}
          source={require('../assets/luggage_boomerang.png')}
        />
        <Button style={styles.logoutBtnStyle} onPress={() => 
            this.props.navigation.navigate({ name: "Login", key: "MainHome" }) } 
            title="LOGOUT" />
       </View>
        </ScrollView>
       
      </View>
    )
  }
    
}

const styles = StyleSheet.create({
  // container: {flexGrow: 1 ,backgroundColor: 'black',},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    
  },
 logoImgStyle: {
    height: 100,
    width: 100,
    marginBottom: 30,
    resizeMode: "contain"
 },
 logoutBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: "bold",
    color: 'white'
  },
})