import React, { Component } from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class SignIn extends Component {
  render(Props) {
    return (

      <View style={{
        flex: 1,
        backgroundColor: 'white'
      }}>

        <View style={{
          flex: 1,
          justifyContent: 'flex-end'
        }}>
          <Image
            style={{ width: 100, marginLeft: 40, height: 100 }}
            source={require('../Assets/logo.jpg')}
          />
        </View>
        <View style={{
          flex: 1,
        }}>
          <View style = {{
            height:140,
            width:wp('90%'),
            alignSelf:'center',
            justifyContent:'center',
          }}>
            <Text style = {{
              fontSize:25,
              fontWeight:'700'
            }}>Proceed with your</Text>
            <Text style = {{
              fontSize:25,
              fontWeight:'700',
              marginTop:20
            }}>Login</Text>
          </View>
        </View>
        <View style={{
          flex: .5,
          
        }}>
          <TextInput placeholder={'Email*'} placeholderTextColor={"#afb0bb"} style = {{ width:wp('96%'), height:45, fontWeight:'400', backgroundColor:'white', borderWidth:1, borderColor:'#f4f7f6', alignSelf:'center', fontSize:20, paddingLeft:10,marginBottom:8  }} />
          <TextInput placeholder={'Password*'} placeholderTextColor={"#afb0bb"} style = {{ width:wp('96%'), height:45, fontWeight:'400', backgroundColor:'white', borderWidth:1, borderColor:'#f4f7f6', alignSelf:'center', fontSize:20, paddingLeft:10  }} />
        </View>
        <View style={{
          flex: 1.5,
          justifyContent:'center',
      
        }}>
          
<TouchableOpacity onPress={() => this.props.navigation.navigate('IndianCuisine')} 
 style = {{
  width:wp('95%'),
  alignSelf:'center',
  borderWidth:1,
  marginBottom:15,
  borderColor:'#dddfe4',
  height:40,
  alignItems:'center',
  borderRadius:20,
  backgroundColor:"#ff3b31",
  justifyContent:'center',
  flexDirection:'row'
}}>
  <Text style = {{
    fontWeight:'500',
    fontSize:15,
    color:'white'
  }}> Login </Text>
</TouchableOpacity>

<Text style = {{
  alignSelf:'center',
  fontWeight:'500',
  fontSize:17,
  marginBottom:10
}}>Or</Text>

<TouchableOpacity 
style = {{
  width:wp('95%'),
  alignSelf:'center',
  borderWidth:1,
  height:40,
  borderColor:'#dddfe4',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:"white",
  justifyContent:'center',
  flexDirection:'row'
}}>
  <Text style = {{
    fontWeight:'500',
    fontSize:15,
    color:'black'
  }}> Sign Up </Text>
</TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignIn;