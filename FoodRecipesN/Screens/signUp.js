import React, { Component } from 'react';
import { Text,TextInput, View, Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class SignUp extends Component {
  render(props) {
    return (

        <View style = {{
          flex:1,
          backgroundColor:'#ed8a9a'
        }}>
          <View style = {{
            flex:1,
            justifyContent:'flex-end'
          }}>

<View style = {{
  flexDirection:'row',
  justifyContent:'center'
}}>
      <Text style = {{
        fontWeight:'900',
        fontSize:20
      }}>Create Your Account</Text>


</View>

<View style = {{
  flexDirection:'row',
  width:wp('88%'),
  alignSelf:'center',
  marginTop:5,
  justifyContent:'center'
}}>
<Text style = {{
        fontWeight:'600',
        fontSize:15,
        textAlign:'center'
      }}>Enter Your Email ID and password to create your account</Text>
</View>

      </View>
      <View style = {{
            flex:3,  
          }}>

        <View>

          <TextInput 
          style = {{ width:wp('95%'), fontSize:20, paddingLeft:10, backgroundColor:'white', marginTop:20, alignSelf:'center'}}
          placeholder="Email*"
          />

          
<TextInput 
          style = {{ width:wp('95%'), fontSize:20, paddingLeft:10, backgroundColor:'white', marginTop:5, alignSelf:'center'}}
          placeholder="Chose Password*"
          />

          
<TextInput 
          style = {{ width:wp('95%'), fontSize:20, paddingLeft:10, backgroundColor:'white', marginTop:5, alignSelf:'center'}}
          placeholder="Repeat Password*"
          />

<View style = {{
  height:180,
  justifyContent:'center',
  
}} >

<TouchableOpacity  onPress={() => this.props.navigation.navigate('signin')}

style = {{
  width:wp('95%'),
  alignSelf:'center',
  borderWidth:1,
  height:45,
  alignItems:'center',
  borderRadius:20,
  backgroundColor:"white",
  justifyContent:'center',
  flexDirection:'row'
}}>
  <Text style = {{
    fontWeight:'700',
    fontSize:17
  }}> Sign Up </Text>
</TouchableOpacity>


</View>


        </View>



      </View>
    
      </View>
    );
  }
}

export default SignUp;
