import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, View, Text, TouchableOpacity,
  StyleSheet, FlatList, ActivityIndicator,
  StatusBar, RefreshControl, ScrollView,
  Pressable, Dimensions, Image, ImageBackground
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { color } from 'react-native-reanimated';
import CarouselItem from './CarouselItem';
// import Carousel from "react-native-snap-carousel";
// import PropTypes from 'prop-types'
// import {ViewPropTypes} from 'react-native';
// import {ViewPropTypes} from 'deprecated-react-native-prop-types';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      bannerData: [
        { name: 'Shaun', key: '1', image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600' },
        { name: 'Michael', key: '2', image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Big', key: '3', image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600' },
        { name: 'Show', key: '4', image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Roman', key: '5', image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600' },
        { name: 'Reigns', key: '6', image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ],
      //  dataBanner: [
      //   {
      //     title: "Coral Reef",
      //     description: "Location: Red Sea",
      //     source:
      //       "https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      //   },
      //   {
      //     title: "Phone",
      //     description: "iPhone 6 on the table",
      //     source:
      //       "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      //   },

      //   {
      //     title: "Old building",
      //     description: "Location: Germany",
      //     source:
      //       "https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      //   },
      // ],
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
    // return fetch('http://104.167.11.190:30000/posts/?offset=' + this.state.offset + '& limit=' + this.state.limit, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MmI5NzBjOWUwNTZiOTFhMDRlM2VmMzciLCJpcHYiOnRydWUsImlhdCI6MTY2MjU1NjMzMn0.YyQBRlxlgO9cAhgskdI53PpKinAaCzNFb2RoMTpGStU"
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     // const longeur = res.data.length;
    //     var count = Object.keys(responseJson).length;
    //     if (count < 1) {
    //       this.state.allLoaded = true
    //     } else {
    //       this.setState({
    //         isLoading: false,
    //         // dataSource: responseJson,
    //         alertMsg: "",
    //         dataSource: [
    //           ...this.state.dataSource,
    //           ...responseJson
    //         ],
    //       })
    //     }
    //   })

    //   .catch((error) => {
    //     console.log(error)
    //     throw error;
    //   })
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


  render() {
    const { showAlert } = this.state;
    // console.log('======= Provider', Carousel);
    const settings = {
      sliderWidth: Dimensions.get('window').width,
      sliderHeight: Dimensions.get('window').width,
      itemWidth: Dimensions.get('window').width - 80,
      // ref=ref => this.carouselRef = ref,
      data: this.state.dataBanner,
      renderItem: CarouselItem,
      hasParallaxImages: true,
    };

    if (!this.state.isLoading) {
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
      return (
        <View style={styles.container}>
          <StatusBar animated={true} backgroundColor='transparent' barStyle={'light-content'} showHideTransition={'fade'} hidden={false} />
          <ScrollView contentContainerStyle={{ paddingBottom: 70 }} ref={ref => this.scroll = ref} refreshControl={
            <RefreshControl refreshing={this.state.hasLoaded} onRefresh={this._onRefresh.bind(this)} />
          }  >
            <View style={styles.container}>
              {/* <Carousel {...settings} /> */}
              
              <ImageBackground style={styles.bannerImageStyle}
                defaultSource={require('../assets/homePlaceholder.png')}
                source={{ uri: this.state.bannerData[0].image }}>
                  <View style={{flexDirection: 'row', height: 200, marginTop: (Dimensions.get('window').height / 3) - 100}}>

                  <View style={{backgroundColor: ''}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', marginLeft: 10}} >
                      Spending Holidays With {'\n'}
                       Family</Text>
                  <View style={styles.profileVuStyle}>
                    <Image style={{height: 40, width: 40, marginTop: 10, marginLeft: 10}}
                      defaultSource={require('../assets/ProfilePlaceholder.png')}
                      source={require('../assets/F2.png')}
                      />
                      <View style={{backgroundColor: '', flexDirection: 'column', marginLeft: 10}}>
                        <Text style={{fontWeight: '700', fontSize: 17, color: 'white', marginTop:5}}>Dale Houston</Text>
                        <Text style={{fontWeight: '500', fontSize: 14, color: 'white', marginTop:5}}>10 min ago</Text>
                      </View> 
                  </View>
                  </View>

                  <View style={{flexDirection: 'column', backgroundColor: '', marginLeft: 80, marginTop: -100}}>
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
                          source={require('../assets/Comment.png')}
                        />
                        <View style={{marginTop: 8, marginLeft: -10, width: 70,}}>
                          <Text style={styles.likeTxtStyle}>Comment</Text>
                        </View>
                      </View>
                  </View>

                  </View>
                  
                  
              </ImageBackground>

              <View style={{flexDirection: 'row', height: 60, width: Dimensions.get('window').width, backgroundColor: 'green'}}>
                  <View style={{flexDirection: 'row', height: 50, width: (Dimensions.get('window').width/3)-20 , backgroundColor: 'yellow', marginTop: 5, marginLeft: 12}}>
                  </View>

                  <View style={{flexDirection: 'row', height: 50, width: (Dimensions.get('window').width/3)-20 , backgroundColor: 'yellow', marginTop: 5, marginLeft: 12}}>
                  </View>

                  <View style={{flexDirection: 'row', height: 50, width: (Dimensions.get('window').width/3)-20 , backgroundColor: 'yellow', marginTop: 5, marginLeft: 12}}>
                  </View>
              </View>



              <View style={{backgroundColor: 'red', width: Dimensions.get('window').width, height: Dimensions.get('window').height/2}}>
              </View>
              
            </View>
          </ScrollView>
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
  bannerImageStyle: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width - 0,
  },
  profileVuStyle: {
    height: 60,
    // width: Dimensions.get('window').width,
    backgroundColor: '',
    flexDirection: 'row'
  },
  likeVuColStyle: {
    backgroundColor: 'black',
    width: 40,
    height: 40,
    marginTop: 40,
    borderRadius: 20
  },
  likeTxtStyle: {
    color: 'white',
    fontWeight: '600'
  },
  likeTxtVuStyle: {
    marginTop: 8,
    marginLeft: 2,
    width: 40,
  }
})






















// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [dataSource, setDataSource] = useState([]);
//   const [offset, setOffset] = useState(1);

//   useEffect(() => getData(), []);

//   const getData = () => {
//     console.log('getData');
//     setLoading(true);
//     //Service to get the data from the server to render
//     fetch('https://aboutreact.herokuapp.com/getpost.php?offset=' + offset)
//       //Sending the currect offset with get request
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Successful response from the API Call
//         setOffset(offset + 1);
//         //After the response increasing the offset for the next API call.
//         setDataSource([...dataSource, ...responseJson.results]);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const renderFooter = () => {
//     return (
//       //Footer View with Load More button
//       <View style={styles.footer}>
//         <TouchableOpacity
//           activeOpacity={0.9}
//           onPress={getData}
//           //On Click of button calling getData function to load more data
//           style={styles.loadMoreBtn}>
//           <Text style={styles.btnText}>Load More</Text>
//           {loading ? (
//             <ActivityIndicator color="white" style={{marginLeft: 8}} />
//           ) : null}
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const ItemView = ({item}) => {
//     return (
//       // Flat List Item
//       <Text style={styles.itemStyle} onPress={() => getItem(item)}>
//         {item.id}
//         {'.'}
//         {item.title.toUpperCase()}
//       </Text>
//     );
//   };

//   const ItemSeparatorView = () => {
//     return (
//       // Flat List Item Separator
//       <View
//         style={{
//           height: 0.5,
//           width: '100%',
//           backgroundColor: '#C8C8C8',
//         }}
//       />
//     );
//   };

//   const getItem = (item) => {
//     //Function for click on an item
//     alert('Id : ' + item.id + ' Title : ' + item.title);
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <FlatList
//           data={dataSource}
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={ItemSeparatorView}
//           enableEmptySections={true}
//           renderItem={ItemView}
//           ListFooterComponent={renderFooter}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     flex: 1,
//   },
//   footer: {
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   loadMoreBtn: {
//     padding: 10,
//     backgroundColor: '#800000',
//     borderRadius: 4,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnText: {
//     color: 'white',
//     fontSize: 15,
//     textAlign: 'center',
//   },
// });

// export default App;
