import React, { Component, useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  // TextInput,
  Image,
  Dimensions,
} from 'react-native'
import { TextInput } from "react-native-paper";


const widthVal = Dimensions.get('window').width-40
const heightVal = 50



export default function App({ navigation }) {

  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

//  render() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
    return (
      <View style={styles.container}>
        <View>
        <Image style={styles.logoImgStyle}
          source={require('../assets/luggage_boomerang.png')}
        />
      </View>

      <View style={styles.vuTfStyle}>
          <TextInput style={styles.emailTfStyle}
          placeholder= "Please enter email" underlineColor='white' activeUnderlineColor='white'
          />
          </View>

          <View style={styles.vuTfStyle}>
          <TextInput style={styles.emailTfStyle}
          placeholder= "Please enter name" underlineColor='white' activeUnderlineColor='white'
          />
          </View>

          <View style={styles.vuTfStyle}>
          <TextInput style={styles.emailTfStyle}
          placeholder= "Please enter number" underlineColor='white' activeUnderlineColor='white'
          />
          </View>

          <View style={styles.vuTfStyle}>
           <TextInput style={styles.passwordTfStyle}
            placeholder="Password" underlineColor='white' activeUnderlineColor='white'
            secureTextEntry={secureTextEntry}
            right={
              <TextInput.Icon
                name="eye"
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                  return false;
                }}
              />
            }
          />
           </View>

           <View style={styles.vuTfStyle}>
           <TextInput style={styles.passwordTfStyle}
            placeholder="Confirm Password" underlineColor='white' activeUnderlineColor='white'
            secureTextEntry={secureTextEntry}
            right={
              <TextInput.Icon
                name="eye"
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                  return false;
                }}
              />
            }
          />
           </View>

        <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate('baseDrawer')} //navigation.navigate({ name: "Home" }) }
        >
         <Text style= {styles.loginBtnStyle}>Register</Text>
        </TouchableOpacity>
        
        {/* <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
        </View> */}


      </View>
    )
  // }
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
    marginTop: 30,
    width: widthVal,
    height: heightVal - 5,
    borderRadius: 10
  },
 vuTfStyle: {
    height: heightVal,
    width: widthVal,
    marginBottom: 20,
    borderColor: 'red',
    borderWidth: 0.7,
    borderRadius: 10
 },
 passwordTfStyle: {
  height: heightVal-10,
  width: widthVal-30,
  marginLeft: 10,
  justifyContent: 'center',
  backgroundColor: 'white',
  borderBottomColor: 'white'
},
emailTfStyle: {
  height: heightVal-10,
  width: widthVal-30,
  marginLeft: 10,
  justifyContent: 'center',
  backgroundColor: 'white',
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
 }
})

// export default App;