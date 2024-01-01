import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground, ActivityIndicator, TouchableOpacity, StatusBar, RefreshControl, ScrollView
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler/lib/commonjs'
import AwesomeAlert from 'react-native-awesome-alerts';
import ImageLoad from 'react-native-image-placeholder';
// import App from './TabProfile';
import api from './Api';
import NetworkUtils from './NetworkUtils'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: [],
      hasLoaded: false,
      showAlert: false,
      allLoaded: false,
      alertMsg: "",
      offset: 0,
      limit: 20,
    }
  }

  componentDidMount() {
    const isConnected = this.isNetworkConnected()
    if (isConnected) {
      this.getDatafromServer()
    }
  }

   getDatafromServer() {
      //MARK:-  ======= GET API CALL ========
      return fetch('http://104.167.11.190:30000/posts/?offset=' + this.state.offset + '& limit=' + this.state.limit, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MmI5NzBjOWUwNTZiOTFhMDRlM2VmMzciLCJpcHYiOnRydWUsImlhdCI6MTY2MjU1NjMzMn0.YyQBRlxlgO9cAhgskdI53PpKinAaCzNFb2RoMTpGStU"
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // const longeur = res.data.length;
          var count = Object.keys(responseJson).length;
          if (count < 1) {
            this.state.allLoaded = true
          } else {
            this.setState({
              isLoading: false,
              // dataSource: responseJson,
              alertMsg: "",
              dataSource: [
                ...this.state.dataSource,
                ...responseJson
              ],
            })
          }
        })
  
        .catch((error) => {
          console.log(error)
          throw error;
        })
    // try {
    //   let response = await api.getAllPostsData();
    //   this.setState({
    //     isLoading: false,
    //     dataSource: response,
    //   })
    // } catch (error) {
    //   console.warn(error);
    //   // throw error;
    // } finally {
    //   this.setState({ isLoading: false });
    // }
  }

  async isNetworkConnected() {
    const isConnected = await NetworkUtils.isNetworkAvailable()
    if (isConnected) {
      return true
    } else {
      this.showAlert("You are offline!");
      this.setState({ isLoading: false });
      return false
    }
  }

  onSelectItem = (item) => {
    this.props.navigation.navigate('HomeDetail', { item: item });
  }

  async _onRefresh() {
    const isConnected = this.isNetworkConnected()
    if (isConnected) {
      this.getDatafromServer();
      this.state.offset = 0
    }
  }

  onPagination() {
    if (!this.state.allLoaded) {
      this.state.offset += 20 
    this.getDatafromServer();
    } else {
      console.log('====== all loaded true' + this.state.offset);
    }
  }

  showAlert = (msg) => {
    this.setState({
      showAlert: true
    });
    this.setState({
      alertMsg: msg
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    const {showAlert} = this.state;
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator ></ActivityIndicator>
          <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Alert"
          message={state.alertMsg}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.getDatafromServer();
          }}
        />
        </View>
      )
    } else {
      console.warn("render", this.state.dataSource)
      return (
        <View style={styles.container}>
        <StatusBar animated={true} backgroundColor='transparent' barStyle={'light-content'} showHideTransition={'fade'} hidden={false} />
        <ScrollView contentContainerStyle={{ paddingBottom: 70 }} ref={ref => this.scroll = ref} refreshControl={
          <RefreshControl refreshing={this.state.hasLoaded} onRefresh={this._onRefresh.bind(this)} />
        }  >
          <FlatList
            keyExtractor={(item) => item.id}
            // scrollEnabled={false}
            data={this.state.dataSource}
            onEndReachedThreshold={0.01}
            onEndReached={
              !this.state.allLoaded ? this.onPagination() : ''
              
            }
            renderItem={({ item }) => (
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.onSelectItem(item)}>
                <ImageBackground style={styles.mainImgStyle}
                defaultSource={require('../assets/homePlaceholder.png')}
                  source={{ uri: item.images != null ? item.images[0] : 'http://104.167.11.190:30000/www1\\images\\65fbfd04-eedf-4f7b-903d-9d18b949c85e_pic.jpeg' }}>
                  {/* <ImageLoad style={styles.mainImgStyle}
                    loadingStyle={{ size: 'large', color: 'blue' }}
                    source={{ uri: item.images[0] }}
                  /> */}
                  <View style={styles.likeMainVuStyle}>

                    <View style={styles.likeVerticalVuStyle}>
                      <View style={styles.likeVuColStyle}>
                        <Image style={styles.likeeImgStyle}
                          source={require('../assets/Like.png')}
                        />
                        <View style={styles.likeTxtVuStyle}>
                          <Text style={styles.likeTxtStyle}>  Like</Text>
                        </View>
                      </View>
                      <View style={styles.likeVuColStyle}>
                        <Image style={styles.likeeImgStyle}
                          source={require('../assets/Like.png')}
                        />
                        <View style={styles.likeTxtVuStyle}>
                          <Text style={styles.likeTxtStyle}>Comment</Text>
                        </View>
                      </View>
                      <View style={styles.likeVuColStyle}>
                        <Image style={styles.likeeImgStyle}
                          source={require('../assets/Comment.png')}
                        />
                        <View style={styles.likeTxtVuStyle}>
                          <Text style={styles.likeTxtStyle}>Share</Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.likeHorizontalVuStyle}>
                      <View style={styles.likeVuRowStyle}>
                        <Image style={styles.likeImgStyle}
                          source={require('../assets/Like.png')}
                        />
                        <View style={styles.likeTxtVuStyle}>
                          <Text style={styles.likeTxtStyle}>  Like</Text>
                        </View>
                      </View>
                      <View style={styles.likeVuRowStyle}>
                        <Image style={styles.likeImgStyle}
                          source={require('../assets/Comment.png')}
                        />
                        <View style={styles.likeTxtVuStyle}>
                          <Text style={styles.likeTxtStyle}>Comment</Text>
                        </View>
                      </View>
                      <View style={styles.likeVuRowStyle}>
                        <Image style={styles.likeImgStyle}
                          source={require('../assets/Comment.png')}
                        />
                        <View style={styles.likeTxtVuStyle}>
                          <Text style={styles.likeTxtStyle}>  Share</Text>
                        </View>
                      </View>


                    </View>

                  </View>
                </ImageBackground>
                </TouchableOpacity>

              </View>
            )}
            

          />
        </ScrollView>
        
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Alert"
          message={this.state.alertMsg}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Reload"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.getDatafromServer();
            this.hideAlert();
          }}
        />
      </View>
      )
    }

  }
}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',


  },
  item: {
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 2.5,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1
  },
  mainImgStyle: {
    width: Dimensions.get('window').width - 20 - 10,
    height: Dimensions.get('window').height / 2.5 - 10,
    margin: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeMainVuStyle: {
    flexDirection: 'row-reverse',
    // backgroundColor: '#f2f2f2',
    // opacity: 0.2,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height / 2.5 - 10,
  },
  likeHorizontalVuStyle: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: Dimensions.get('window').width - 80,
    height: 60,
    marginTop: Dimensions.get('window').height / 2.5 - 50,
    // marginLeft: 150
  },
  likeVerticalVuStyle: {
    flexDirection: 'column',
    // backgroundColor: 'red',
    width: 45,
    height: Dimensions.get('window').height / 2.5 - 90,
  },
  likeVuColStyle: {
    backgroundColor: 'black',
    width: 40,
    height: 40,
    marginTop: 40,
    borderRadius: 20
  },
  likeVuRowStyle: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: 100,
    height: 35,
    marginLeft: 15,
    borderRadius: 7
  },
  likeImgStyle: {
    height: 25,
    width: 25,
    marginTop: 5,
    marginLeft: 2
  },
  likeTxtStyle: {
    color: 'white',
    fontWeight: '600'
  },
  likeTxtVuStyle: {
    marginTop: 8,
    marginLeft: 2
  }
})
















// const Drawer = createDrawerNavigator();

// function App2({ navigation }) {

//   const [people, setPeople] = useState([
//     { name: 'Shaun', key: '1', image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600' },
//     { name: 'Michael', key: '2', image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
//     { name: 'Big', key: '3', image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600' },
//     { name: 'Show', key: '4', image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
//     { name: 'Roman', key: '5', image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600' },
//     { name: 'Reigns', key: '6', image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
//   ])

//   return (
//     <View style={styles.container}>
//       <FlatList
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <ImageBackground style={styles.mainImgStyle}
//               source={{ uri: item.image }}>
//               <View style={styles.likeMainVuStyle}>

//                 <View style={styles.likeVerticalVuStyle}>
//                   <View style={styles.likeVuColStyle}>
//                     <Image style={styles.likeeImgStyle}
//                       source={require('../assets/Like.png')}
//                     />
//                     <View style={styles.likeTxtVuStyle}>
//                     <Text style={styles.likeTxtStyle}>  Like</Text>
//                     </View>
//                   </View>
//                   <View style={styles.likeVuColStyle}>
//                     <Image style={styles.likeeImgStyle}
//                       source={require('../assets/Like.png')}
//                     />
//                     <View style={styles.likeTxtVuStyle}>
//                     <Text style={styles.likeTxtStyle}>Comment</Text>
//                     </View>
//                   </View>
//                   <View style={styles.likeVuColStyle}>
//                     <Image style={styles.likeeImgStyle}
//                       source={require('../assets/Comment.png')}
//                     />
//                     <View style={styles.likeTxtVuStyle}>
//                     <Text style={styles.likeTxtStyle}>Share</Text>
//                     </View>
//                   </View>
//                 </View>

//                 <View style={styles.likeHorizontalVuStyle}>
//                   <View style={styles.likeVuRowStyle}>
//                     <Image style={styles.likeImgStyle}
//                       source={require('../assets/Like.png')}
//                     />
//                     <View style={styles.likeTxtVuStyle}>
//                     <Text style={styles.likeTxtStyle}>  Like</Text>
//                     </View>
//                   </View>
//                   <View style={styles.likeVuRowStyle}>
//                     <Image style={styles.likeImgStyle}
//                       source={require('../assets/Comment.png')}
//                     />
//                     <View style={styles.likeTxtVuStyle}>
//                     <Text style={styles.likeTxtStyle}>Comment</Text>
//                     </View>
//                   </View>
//                   <View style={styles.likeVuRowStyle}>
//                     <Image style={styles.likeImgStyle}
//                       source={require('../assets/Comment.png')}
//                     />
//                     <View style={styles.likeTxtVuStyle}>
//                     <Text style={styles.likeTxtStyle}>  Share</Text>
//                     </View>
//                   </View>


//                 </View>

//               </View>
//             </ImageBackground>

//           </View>
//         )}
//       />
//     </View>
//   )
//   // }
// }



// export default App2;