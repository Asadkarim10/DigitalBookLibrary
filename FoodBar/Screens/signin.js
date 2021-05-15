import React from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';



const Signin = () => {
  return (
    <View style = {{
        backgroundColor:'white'
    }}>
        <View style = {{
            height:50,
            justifyContent:'center'
        }}>

            <View style = {{
                flexDirection:'row',
                justifyContent:'flex-start',

            }}>
            <Icon name="rocket" size={30} color="#900" />
            <Icon name="rocket" size={30} color="#900" />
            </View>
        </View>

        <View style = {{
            height:60,
            justifyContent:'center',
            width:wp('98%'),
            alignSelf:'center'
        }}>
            <Text style = {{
                color:'#4a4a4a',
                fontSize:20,
                fontWeight:'700'
            }}>SIGN IN</Text>
            <Text style = {{
                color:'#b5b4b9',
                fontWeight:'400'
            }}>Log in using your email address or mobile</Text>
        </View>


        <View>
            <TextInput 
            style = {{
                width:wp("98%"),
                borderBottomWidth:1,
                borderBottomColor:"#fcfcfc",
                fontSize:15,
                alignSelf:'center'
            }}
            placeholder={"Mobile number or email"}
            placeholderTextColor={"#d2d2d2"} />
            
            <TextInput style = {{
                width:wp("98%"),
                borderBottomWidth:1,
                borderBottomColor:"#fcfcfc",
                fontSize:15,
                alignSelf:'center'
            }} 
            placeholder={"Password"}
            placeholderTextColor={"#d2d2d2"} />
        </View>

        <View style = {{
            height:55,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:"row"
        }}>
            <Text style = {{
                color:'#6fd39a'
            }}>Forgot Password?</Text>
        </View>

        <View>

            <TouchableOpacity style = {{
                backgroundColor:"#ef6524",
                height:45,
                width:wp('98%'),
                alignSelf:'center',
                borderRadius:2,
                justifyContent:'center',
                flexDirection:'row',
                alignItems:'center'
            }}>
                <Text style = {{
                    color:'white',
                    fontSize:18,
                    fontWeight:'700'
                }}>Sign in</Text>
            </TouchableOpacity >

            <View style = {{
                height:55,
                justifyContent:'center',
                flexDirection:"row",
                alignItems:"center"
            }}>
            <Text style = {{
                color:'#bfbfc1'
            }}>or sign in with</Text>
            </View>

    <View style = {{
        flexDirection:'row',
        justifyContent:'space-around'
    }} >
        <TouchableOpacity style = {{
            width:wp('48%'),
            height:45,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#415eae',
            borderRadius:2,
        }}>
            <Text style = {{
                color:'white',
                fontWeight:'700'
            }}>FACEBOOK</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {{
            backgroundColor:'#cf4334',
            width:wp('48%'),
            height:45,
            borderRadius:2,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text style = {{
                color:'white',
                fontWeight:'700'
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
      backgroundColor: "yellow"
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