import React, { Component, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList, Image, Alert
} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler/lib/commonjs'
import { ActivityIndicator } from 'react-native-paper';
import api from './Api';
import axios from 'axios';
import styles from './styles'


class App extends React.Component {
  constructor() {
    super();
    this.state={
      isLoading: true,
      dataSource: null,
    }
  }

    componentDidMount()
    {
      this.getDatafromServer()
    }

    async getDatafromServer() {
         //MARK:-  ======= GET API CALL ========
         return fetch('http://104.167.11.190:30000/chats/?offset=0&limit=20' , {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MmI5NzBjOWUwNTZiOTFhMDRlM2VmMzciLCJpcHYiOnRydWUsImlhdCI6MTY2MjU1NjMzMn0.YyQBRlxlgO9cAhgskdI53PpKinAaCzNFb2RoMTpGStU"
          },
        })
        .then ( (response) => response.json () )
        .then ( (responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          })
        })
  
        .catch( (error) => {
          console.log(error)
        })
    }
  
    onDelete = (id) => {
      // alert(message= id)
      let data  = this.state.dataSource.data
      let newDataArr = data.filter((val, i) => {
        if (val.id != id) {
          return val
        }
      })
  
      this.setState({ data: newDataArr })
    }
  
    onSelectItem = (item) => {
      this.props.navigation.navigate('ConvoVC', { item: item });
    } 

  render() 
  {
    if (this.state.isLoading) {
      return(
        <View style={styles.container}>
          <ActivityIndicator ></ActivityIndicator> 
        </View>
      )
    } else {
      // console.warn("render", this.state.dataSource.data)
      return(
        <View style={styles.container}>  
        <FlatList style={styles.flatListStyle}
          // keyExtractor={(item) => item.id}
          data={this.state.dataSource.data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.onSelectItem(item)}>
              <View style={styles.item}>
                <Image style={styles.profileImgStyle}
                defaultSource={require('../assets/ProfilePlaceholder.png')}
                  source={{ uri: item.members[0].id != "62b970c9e056b91a04e3ef37" ? item.members[0].img : item.members[1].img }}
                />

                <View style={{ flexDirection: 'row', width: 280, justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.nameText} >{item.members[0].id != "62b970c9e056b91a04e3ef37" ? item.members[0].name : item.members[1].name}</Text>
                    <Text style={styles.msgText} >{item.latest_msg}</Text>
                  </View>

                  <TouchableOpacity onPress={() => this.onDelete(item.id)}>
                    <Text style={styles.deleteBtnStyle}>Delete</Text>

                  </TouchableOpacity>
                </View>


              </View>
            </TouchableOpacity>
          )}
        />

      </View>
      )
    }
    
  }
}

 export default App;



 