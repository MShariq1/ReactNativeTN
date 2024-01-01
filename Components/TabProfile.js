import React, { Component, useState } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Button,
    Text,
    Dimensions,
    ImageBackground
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler/lib/commonjs'
import { FlatList } from 'react-native-gesture-handler/lib/commonjs'

export default function App({ navigation }) {

    const [people, setPeople] = useState([
        { name: 'Shaun', key: '1', image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600' },
        { name: 'Michael', key: '2', image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Big', key: '3', image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600' },
        { name: 'Show', key: '4', image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Roman', key: '5', image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600' },
        { name: 'Reigns', key: '6', image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ])
    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.secondContainer}>
                    <Image style={styles.profileImgStyle}
                        source={require('../assets/F2.png')}
                    />
                    <View style={{ marginTop: -70, marginLeft: 100, }}><Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>John Doe</Text></View>
                    <View style={{ marginTop: 20, marginLeft: 100, }}><Text style={{color: 'black', fontWeight: '500', fontSize: 10}}>Albany, New york</Text></View>
                    <View style={style=styles.editBtnStyle}>
                        <Image style={{ height: 45, width: 45, marginLeft: 20}} source={require('../assets/Like.png')}/>
                        <View style={{ marginTop: 12, marginLeft: 0, }}><Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Edit Profile</Text></View>
                    </View>
                    <View style={{ marginTop: -28, marginLeft: 220, }}><Text style={{color: 'black', fontWeight: '600', fontSize: 12}}>Profile completed</Text></View>
                    <View style={{ marginTop: 30, marginLeft: 20, height: 1, width: Dimensions.get('window').width - 40, backgroundColor: 'lightgray'}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{ marginTop: 12, height: 15, width: 15, marginLeft: 20}} source={require('../assets/redPhone.png')}/>
                        <View style={{ marginTop: 12, marginLeft: 20, }}><Text style={{color: 'black', fontWeight: '500', fontSize: 12}}>+123 123321</Text></View>
                        <Image style={{ marginTop: 12, height: 15, width: 15, marginLeft: 20, resizeMode: 'contain'}} source={require('../assets/redMail.png')}/>
                        <View style={{ marginTop: 12, marginLeft: 20, }}><Text style={{color: 'black', fontWeight: '500', fontSize: 12}}>John@doe.com</Text></View>
                    </View>
                    <View style={{ marginTop: 20, marginLeft: 20, height: 1, width: Dimensions.get('window').width - 40, backgroundColor: 'lightgray'}}></View>
                    <View style={{ marginTop: 20, marginLeft: 20, }}><Text style={{color: 'red', fontWeight: '600', fontSize: 20}}>About</Text></View>
                    <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20,}}><Text style={{color: 'black', fontWeight: '300', fontSize: 14}}>The ahgasd asd asdasdas dasd asdsad sad sadasd asdas dasd</Text></View>
                    <View style={{ marginTop: 30, marginLeft: 20, }}><Text style={{color: 'red', fontWeight: '600', fontSize: 20}}>Activities</Text></View>
                <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 20, height: ((Dimensions.get('window').height / 2.5)+20)*people.length}}>
      <FlatList
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        data={people}
        renderItem={({ item }) => (
            
          <View style={styles.item}>
            <ImageBackground style={styles.mainImgStyle}
              source={{ uri: item.image }}>
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

          </View>
        )}
      />
                </View>
                </View>
            </ScrollView>
        </View>

    )
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',

    },
    secondContainer: {
        // height: Dimensions.get('window').height - 80,
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        marginTop: 80,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    profileImgStyle: {
        height: 80,
        width: 80,
        marginTop: -40,
        marginLeft: 12,
        resizeMode: "contain"
    },
    editBtnStyle: {
        flexDirection: 'row',
        height: 45,
        width: Dimensions.get('window').width/2,
        marginTop: 50,
        marginLeft: 12,
        borderRadius: 22,
        backgroundColor: 'black'
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
