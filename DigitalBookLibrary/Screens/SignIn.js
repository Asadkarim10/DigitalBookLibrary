import React from 'react';
import { Text, TextInput, View,Linking,KeyboardAvoidingView ,Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const SignIn = (props) => {
  return (
    
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
     style={styles.container}
     >

      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}>

        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: "#6d6e70"
        }}>Digital Book Library</Text>
      </View>


      <View style={{
        flex: 3,
        justifyContent: 'center',
      }}>

        <View style={{
          flexDirection: 'row',
          width: wp('90%'),
          justifyContent: 'flex-start',
          alignSelf: 'center',
          height: 45
        }}>
          <Text style={{
            fontSize: 19,
            fontWeight: '700',
            color: '#92746b'
          }}>
            Sign in to continue
      </Text>
        </View>
        <View style={{
          width: wp("95%"),
          height:70,
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#919193',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          alignContent:'flex-end'
        }}>
          
          <View style = {{
            width:wp('15%'),
            height:42,
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'flex-end',
          }}>

          <FontAwesome5 name="user-alt" size={25} color="#767678" />
          </View>
            <View style = {{ width:wp("80%")}}>
          <TextInput placeholder={"User Name"} style={{
            paddingLeft: 10,
            fontSize: 19,
          }} />
          </View>
          

        </View>

        <View style={{
          width: wp("95%"),
          height:90,
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#919193',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          alignContent:'flex-end'
        }}>
          
          <View style = {{
            width:wp('15%'),
            height:62,
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'flex-end',
 
            
          }}>

          <Entypo 
name="lock" size={25} color="#767678" />
          </View>
            <View style = {{ width:wp("80%")}}>
          <TextInput placeholder={"Password"} style={{
            paddingLeft: 10,
            fontSize: 19,
          }} />
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: wp("66%"),
          marginLeft:25,
          height: 40,
          alignContent: 'center',
          alignItems: 'center'
        }}>
         
          <Entypo name="eye" size={25} color="#767678" />
          

            

          <Text style={{
            fontSize: 17,
            marginLeft:16,
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
          marginTop: 10
        }}>
          <TouchableOpacity  onPress={() => props.navigation.navigate("home")} 
           style={{
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

        <TouchableOpacity  onPress= {()=> Linking.openURL("https://www.google.com/")}  
        style={{
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

          <View style = {{
            flexDirection:'row',
            width:wp('10%'),
            justifyContent:"space-between",
            alignItems:'center'
          }}>
          <Entypo name="google--with-circle" size={30} color="#787bf4" />
  </View>
            <View>
          <Text style={{
            paddingLeft:20,
            color: "#919191",
            fontSize: 18,
            
          }}>Login With Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress= {()=> Linking.openURL("https://www.facebook.com/")} 
        
        style={{
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

          <View style = {{
            flexDirection:'row',
            width:wp('10%'),
            paddingLeft:10,
            justifyContent:"space-between",
            alignItems:'center'
          }}>
          <Entypo name="facebook-with-circle" size={30} color="#787bf4" />
  </View>
            <View>
          <Text style={{
            paddingLeft:25,
            color: "#919191",
            fontSize: 18,
            
          }}>Login With Facebook</Text>
          </View>
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
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={{
            color: '#8363d5',
            fontWeight: 'bold',
            fontSize: 15
          }}> Sign Up </Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
  );
}


export default SignIn;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});