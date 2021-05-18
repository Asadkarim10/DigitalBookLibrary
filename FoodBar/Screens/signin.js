import React from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Signin = (props) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{
                height: 60,
                justifyContent: 'center',


            }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',

                }}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                    <Entypo name="user" size={33} color="black" />
                </View>
            </View>

            <View style={{
                height: 80,
                justifyContent: 'center',
                width: wp('98%'),
                alignSelf: 'center'
            }}>
                <Text style={{
                    color: '#4a4a4a',
                    fontSize: 20,
                    fontWeight: '700'
                }}>SIGN IN</Text>
                <Text style={{
                    color: '#b5b4b9',
                    fontWeight: '400'
                }}>Log in using your email address or mobile</Text>
            </View>


            <View style={{
                height: 140,

            }}>
                <TextInput
                    style={{
                        width: wp("98%"),
                        height: 60,
                        borderBottomWidth: 1,
                        borderBottomColor: "#fcfcfc",
                        fontSize: 15,
                        alignSelf: 'center'
                    }}
                    placeholder={"Mobile number or email"}
                    placeholderTextColor={"#d2d2d2"} />

                <TextInput style={{
                    width: wp("98%"),
                    borderBottomWidth: 1,
                    height: 60,
                    borderBottomColor: "#fcfcfc",
                    fontSize: 15,
                    alignSelf: 'center'
                }}
                    placeholder={"Password"}
                    placeholderTextColor={"#d2d2d2"} />
            </View>

            <View style={{
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: "row"
            }}>
                <Text style={{
                    color: '#6fd39a'
                }}>Forgot Password?</Text>
            </View>

            <View>

                <TouchableOpacity onPress={() => props.navigation.navigate('Food')} 
                
                style={{
                    backgroundColor: "#ef6524",
                    height: 45,
                    width: wp('98%'),
                    alignSelf: 'center',
                    borderRadius: 2,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: '700'
                    }}>Sign in</Text>
                </TouchableOpacity >

                <View style={{
                    height: 55,
                    justifyContent: 'center',
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: '#bfbfc1'
                    }}>or sign in with</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }} >
                    <TouchableOpacity style={{
                        width: wp('48%'),
                        height: 45,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#415eae',
                        borderRadius: 2,
                    }}>
                        <Text style={{
                            color: 'white',
                            fontWeight: '700'
                        }}>FACEBOOK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: '#cf4334',
                        width: wp('48%'),
                        height: 45,
                        borderRadius: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: 'white',
                            fontWeight: '700'
                        }}>GOOGLE</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
}

export default Signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "white"
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
})