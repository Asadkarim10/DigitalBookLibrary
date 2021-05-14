import React from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo'


const SignUp = (props) => {
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
          color: "brown"
        }}>Digital Book Library</Text>
      </View>


      <View style={{
        flex: 6,
        justifyContent: 'center',
      }}>

        <View style={{

          width: wp('96%'),
          justifyContent: 'center',
          alignSelf: 'center',
          height: 55,
          paddingLeft: 10
        }}>
          <Text style={{
            fontSize: 17,
            color: '#765b53',
            fontWeight: 'bold'
          }}>
            Sign Up to continue
          </Text>
        </View>



        <View style={{
          width: wp("95%"),
          height: 70,
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#919193',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          alignContent: 'flex-end'
        }}>

          <View style={{
            width: wp('15%'),
            height: 42,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>

            <FontAwesome5 name="user-alt" size={25} color="#767678" />
          </View>
          <View style={{ width: wp("80%") }}>
            <TextInput placeholder={"First Name"} style={{
              paddingLeft: 10,
              fontSize: 19,
            }} />
          </View>


        </View>





        <View style={{
          width: wp("95%"),
          height: 70,
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#919193',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          alignContent: 'flex-end'
        }}>

          <View style={{
            width: wp('15%'),
            height: 42,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>

            <FontAwesome5 name="user-alt" size={25} color="#767678" />
          </View>
          <View style={{ width: wp("80%") }}>
            <TextInput placeholder={"Last Name"} style={{
              paddingLeft: 10,
              fontSize: 19,
            }} />
          </View>


        </View>


        <View style={{
          width: wp("95%"),
          height: 70,
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#919193',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          alignContent: 'flex-end'
        }}>

          <View style={{
            width: wp('15%'),
            height: 42,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>

            <Entypo name="email" size={25} color="#767678" />
          </View>
          <View style={{ width: wp("80%") }}>
            <TextInput placeholder={"Email"} style={{
              paddingLeft: 10,
              fontSize: 19,
            }} />
          </View>


        </View>



        <View style={{
          width: wp("95%"),
          height: 70,
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#919193',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          alignContent: 'flex-end'
        }}>

          <View style={{
            width: wp('15%'),
            height: 42,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>

            <Entypo name="lock" size={25} color="#767678" />
          </View>
          <View style={{ width: wp("80%") }}>
            <TextInput placeholder={"Password"} style={{
              paddingLeft: 10,
              fontSize: 19,
            }} />
          </View>


        </View>
        <View style={{
          width: wp("95%"),
          height: 70,
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#919193',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          alignContent: 'flex-end'
        }}>

          <View style={{
            width: wp('15%'),
            height: 42,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>

            <Entypo name="lock" size={25} color="#767678" />
          </View>
          <View style={{ width: wp("80%") }}>
            <TextInput placeholder={"Confirm Password"} style={{
              paddingLeft: 10,
              fontSize: 19,
              fontWeight: '400'
            }} />
          </View>


        </View>
        <View style={{
          width: wp("95%"),
          height: 70,
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#919193',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          alignContent: 'flex-end'
        }}>

          <View style={{
            width: wp('15%'),
            height: 42,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>

            <Zocial name="call" size={25} color="#767678" />
          </View>
          <View style={{ width: wp("80%") }}>
            <TextInput placeholder={"Contact"} style={{
              paddingLeft: 10,
              fontSize: 19,
            }} />
          </View>


        </View>


      </View>

      <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginRight: 10,
          marginTop: 40
        }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("home")}
            style={{
              width: wp("30%"),
              borderRadius: 15,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',

              backgroundColor: '#787bf4',

            }}>
            <Text style={{
              fontWeight: '700',
              fontSize: 16,
              color: 'white'
            }}>Sign Up</Text>
          </TouchableOpacity>
        </View >

      </View>


      <View style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Text style={{
          fontWeight: "700"
        }}>If you Have An Account ?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignIn")}>
          <Text style={{
            color: '#8363d5',
            fontWeight: 'bold',
            fontSize: 15
          }}> Sign In </Text>
        </TouchableOpacity>
      </View>


    </View>



  );
}





export default SignUp;