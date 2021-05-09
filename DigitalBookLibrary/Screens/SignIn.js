import React, { Component } from 'react';
import { Text,TextInput, View, Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class SignIn extends Component {
  render() {
    return (
      <View style = {{
        flex:1,
        backgroundColor:"white"
      }}>
      
      <View style = {{
        flexDirection:'row',
        justifyContent:'center',
        flex:1,
        alignItems:'center',
      }}>

      <Text style = {{
        fontSize:30,
        fontWeight:'bold',
        color:"brown"
      }}>Digital Book Library</Text>
      </View>


      <View style = {{
        flex:3,
        justifyContent:'center',
}}>

    <View style = {{
      flexDirection:'row',
      width:wp('96%'),
      justifyContent:'flex-start',
      alignSelf:'center',
      height:45
    }}>
        <Text style = {{
          fontSize:15,
          fontWeight:'bold'
        }}>
          Sign in to continue
        </Text>
        </View>
        <View style = {{
          width:wp("95%"),
          alignSelf:'center',
          borderBottomWidth:1,
          borderBottomColor:'black',
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center'
        }}>

        <Text>Icon</Text>

        <TextInput  placeholder={"User Name"} style = {{
          paddingLeft:15,
          fontSize:15
        }} />

        </View>

        <View style = {{
          width:wp("95%"),
          marginTop:20,
          alignSelf:'center',
          borderBottomWidth:1,
          borderBottomColor:'black',
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center'
        }}>

        <Text>Icon</Text>

        <TextInput  placeholder={"Password"} style = {{
          paddingLeft:15,
          fontSize:15
        }} />

        </View>

        <View style = {{
          flexDirection:'row',
          justifyContent:'flex-start',
          width:wp("95%"),
          alignSelf:'center',
          height:40,
          alignContent:'center',
          alignItems:'center'
        }}>
          <Text> icon </Text>
          <Text style = {{
            fontSize:15,
            color:'purple'
          }}>Remember password</Text>
        </View>
      </View>

          <View style = {{
            flex:1,
          }}>

             <View style = {{
               flexDirection:'row',
               justifyContent:'flex-end',
               marginRight:10,
               marginTop:-10
             }}> 
            <TouchableOpacity style = {{
              width:wp("30%"),
              borderRadius:15,
              height:45,
              alignItems:'center',
              justifyContent:'center',
              borderWidth:3,
              
            }}>
              <Text style = {{
                fontWeight:'700',
                fontSize:16
              }}>Sign In</Text>
            </TouchableOpacity>
            </View >
            <View  style = {{
               flexDirection:'row',
               justifyContent:'flex-end',
               marginRight:10
             }}>
            <Text style = {{
              fontSize:16,
              paddingTop:10
            }}>Forget your password ?</Text>
            </View>
          </View>

          <View style = {{
            flex:2,
            justifyContent:'center'
          }}>

            <TouchableOpacity style = { {
              width:wp("95%"),
              borderWidth:1,
              flexDirection:'row',
              height:50,
              marginTop:10,
              alignSelf:'center',
              justifyContent:'center',
              alignItems:'center',
              borderRadius:5,
              borderColor:"purple"
            }
            }>
            <Text>Icon</Text>
            <Text style = {{
              paddingLeft:20
            }}>Login With Google</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style = { {
              width:wp("95%"),
              borderWidth:1,
              flexDirection:'row',
              height:50,
              marginTop:10,
              alignSelf:'center',
              justifyContent:'center',
              alignItems:'center',
              borderRadius:5,
              borderColor:"purple"
            }
            }>
            <Text>Icon</Text>
            <Text style = {{
              paddingLeft:20
            }}>Login With Facebook</Text>
            </TouchableOpacity>

          </View>
      
            <View style = {{
              flex:1,
              justifyContent:'center',
              flexDirection:'row',
              alignItems:'center'
            }}>
              <Text>Dont Have an Account ?</Text>
              <TouchableOpacity>
                <Text> Sign Up </Text> 
                </TouchableOpacity>
            </View>


      </View>
    );
  }
}

export default SignIn;