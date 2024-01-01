import React, { Component, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import detail from './BottomTab'

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  Button
} from 'react-native'
import { MaterialCoomunityIcons as Icon } from '@expo/vector-icons'


const widthVal = Dimensions.get('window').width - 60;
const heightVal = 40;


class App extends Component {

  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logoImgStyle}
            source={require('../assets/luggage_boomerang.png')}
          />
        </View>

        <View style={styles.vuTfStyle}>
          <TextInput style={styles.emailTfStyle}
            placeholder="Please enter email"
          />
        </View>
        <View style={styles.vuTfStyle}>
          <TextInput style={styles.passwordTfStyle}
            placeholder="Please enter password" secureTextEntry="true"
          />
        </View>



        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Please Enter Credentials")}
        >
          <Text style={styles.loginBtnStyle}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Register')}
        >
          <Text style={styles.loginBtnStyle}>Register</Text>
        </TouchableOpacity>

        {/* <View>
        <Text>
          You clicked { this.state.count } times
        </Text>
      </View> */}
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f20d0d',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    width: widthVal,
    height: heightVal,
    borderRadius: 10
  },
  vuTfStyle: {
    height: heightVal,
    width: widthVal,
    marginBottom: 20,
    borderColor: 'red',
    borderWidth: 0.7,
    borderRadius: 10,
    flexDirection: "row"
  },
  passwordTfStyle: {
    height: heightVal,
    width: widthVal - 30,
    marginLeft: 10,
    justifyContent: 'center',
  },
  emailTfStyle: {
    height: heightVal,
    width: widthVal,
    marginLeft: 10,
    justifyContent: 'center',
  },
  loginBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: "bold",
    color: 'white'
  },
  logoImgStyle: {
    height: 150,
    width: 150,
    marginBottom: 30,
    resizeMode: "contain"
  },
  eyeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: 10,
    backgroundColor: 'red',
    width: 20,
    height: 20
  },
})

export default App;