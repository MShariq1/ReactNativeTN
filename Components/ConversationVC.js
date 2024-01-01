import React, { Component, useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList, Image, Alert, TextInput
} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler/lib/commonjs'
import { ActivityIndicator } from 'react-native-paper';
import Moment from 'moment';


const { width, height } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            dataSource: null,
            chatId: props.route.params.item._id,
            messageText: ''
        };
    }

    componentDidMount() {
        console.log("renderrrr", this.state.chatId)
        return fetch('http://104.167.11.190:30000/chats/' + this.state.chatId + '/messages?offset=0&limit=20', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MmI5NzBjOWUwNTZiOTFhMDRlM2VmMzciLCJpcHYiOnRydWUsImlhdCI6MTY2MjU1NjMzMn0.YyQBRlxlgO9cAhgskdI53PpKinAaCzNFb2RoMTpGStU"
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                })
            })

            .catch((error) => {
                console.log(error)
            })
    }

    onSendMsg = (msg) => {
        console.log(this.state.messageText)
        this.textInput.clear()
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator ></ActivityIndicator>
                </View>
            )
        } else {
            // console.warn("render", this.state.dataSource.data)

            return (
                <View style={styles.container}>
                    <FlatList style={{ marginBottom: 20 }}
                        data={this.state.dataSource.data}
                        inverted={true}
                        renderItem={({ item, index }) => (
                            Moment.locale('en'),
                            <TouchableOpacity onPress={() => this.onSelectItem(item)}>
                                <View style={item.to == '62b970c9e056b91a04e3ef37' ? styles.otherMsgStyle : styles.myMsgStyle}>
                                    <Text style={{ marginTop: 10, marginLeft: 10, color: item.to != '62b970c9e056b91a04e3ef37' ? 'black' : 'white' }}>{item.message}</Text>
                                </View>
                                <View style={{ marginLeft: item.to == '62b970c9e056b91a04e3ef37' ? Dimensions.get('window').width - 60 : 10 }}>
                                    <Text style={{ color: 'lightgray', fontSize: 13, fontWeight: '500' }}>{Moment(item.t).format('d-MM-YY')}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                    <View style={styles.vuMsgNBtnStyle}>
                        <View style={styles.vuTfStyle}>
                            <TextInput style={styles.msgTfStyle}
                            ref={ref => {
                                this.textInput = ref;
                              }}
                                placeholder="Please enter message"
                                onChangeText={(value) => this.state.messageText = value}
                                
                            />
                        </View>
                        <TouchableOpacity onPress={() => this.onSendMsg('WOW')}>
                            <Image style={styles.logoImgStyle}
                                source={require('../assets/SendIcon.png')}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }

    }
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',

    },
    myMsgStyle: {
        width: Dimensions.get('window').width - 60,
        height: 60,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 40,
        borderRadius: 10,
        backgroundColor: 'lightgray',
    },
    otherMsgStyle: {
        width: Dimensions.get('window').width - 60,
        height: 60,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 40,
        borderRadius: 10,
        backgroundColor: 'gray',

    },
    vuMsgNBtnStyle: {
        flexDirection: 'row',
        height: 45,
        width: Dimensions.get('window').width,
        marginBottom: 30,
        marginRight: 10,
        marginLeft: 40,
    },
    vuTfStyle: {
        height: 45,
        width: Dimensions.get('window').width - 100,
        marginBottom: 30,
        marginRight: 10,
        borderColor: 'gray',
        borderWidth: 0.7,
        borderRadius: 25,
    },
    msgTfStyle: {
        height: 45,
        width: Dimensions.get('window').width - 60,
        marginLeft: 10,
        justifyContent: 'center',
    },
    logoImgStyle: {
        height: 50,
        width: 50,
        resizeMode: "contain",
      },
})