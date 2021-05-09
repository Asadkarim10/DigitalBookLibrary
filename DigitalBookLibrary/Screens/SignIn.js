import React, { Component } from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';


class SignIn extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: "white"
      }}>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        }}>

          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: "#656965"
          }}>Digital Book Library</Text>
        </View>


        <View style={{
          flex: 3,
          justifyContent: 'center',
        }}>

          <View style={{
            flexDirection: 'row',
            width: wp('96%'),
            justifyContent: 'flex-start',
            alignSelf: 'center',
            height: 45
          }}>
            <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#92746b'
            }}>
              Sign in to continue
        </Text>
          </View>
          <View style={{
            width: wp("95%"),
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#919193',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>

            <FontAwesome5 name="user-alt" size={30} color="#767678" />

            <TextInput placeholder={"User Name"} style={{
              paddingLeft: 15,
              fontSize: 15
            }} />

          </View>

          <View style={{
            width: wp("95%"),
            marginTop: 20,
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#919193',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>

            <FontAwesome5 name="lock" size={30} color="#767678" />

            <TextInput placeholder={"Password"} style={{
              paddingLeft: 15,
              fontSize: 15
            }} />

          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: wp("95%"),
            alignSelf: 'center',
            height: 40,
            alignContent: 'center',
            alignItems: 'center'
          }}>
            <Entypo name="lock" size={30} color="#767678" />
            <Text style={{
              fontSize: 15,
              color: '#bcb4e5'
            }}>Remember password</Text>
          </View>
        </View>

        <View style={{
          flex: 1,
        }}>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 10,
            marginTop: -10
          }}>
            <TouchableOpacity style={{
              width: wp("30%"),
              borderRadius: 15,
              backgroundColor: '#787bf4',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',


            }}>
              <Text style={{
                fontWeight: '700',
                fontSize: 16,
                color: 'white'
              }}>Sign In</Text>
            </TouchableOpacity>
          </View >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 10
          }}>
            <Text style={{
              fontSize: 16,
              paddingTop: 10,
              color: '#b5b2df'
            }}>Forget your password ?</Text>
          </View>
        </View>

        <View style={{
          flex: 2,
          justifyContent: 'center'
        }}>

          <TouchableOpacity style={{
            width: wp("95%"),
            borderWidth: 1,
            flexDirection: 'row',
            height: 50,
            marginTop: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderColor: "#acafc2"
          }
          }>
            <Entypo name="google--with-circle" size={30} color="#787bf4" />
            <Text style={{
              paddingLeft: 20,
              color: "#919191",
              fontSize: 18
            }}>Login With Google</Text>
          </TouchableOpacity>


          <TouchableOpacity style={{
            width: wp("95%"),
            borderWidth: 1,
            flexDirection: 'row',
            height: 50,
            marginTop: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderColor: "#acafc2"
          }
          }>
            <Entypo name="facebook-with-circle" size={30} color="#787bf4" />
            <Text style={{
              paddingLeft: 20,
              color: "#919191",
              fontSize: 18
            }}>Login With Facebook</Text>
          </TouchableOpacity>

        </View>

        <View style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Text style={{
            fontWeight: "700"
          }}>Dont Have an Account ?</Text>
          <TouchableOpacity>
            <Text style={{
              color: '#8363d5',
              fontWeight: 'bold',
              fontSize: 15
            }}> Sign Up </Text>
          </TouchableOpacity>
        </View>


      </View>
    );
  }
}

export default SignIn;