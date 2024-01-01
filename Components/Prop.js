import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    center: {
      alignItems: 'center'
    }
  })
  
  export const Greeting = (props) => {
    console.warn(props);
    return (
      <View style={styles.center}>
        <Text>Hello {props.name}!</Text>
      </View>
    );
  }
  
  export const LotsOfGreetings = () => {
    return (
      <View style={[styles.center, {top: 50}]}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
  
  