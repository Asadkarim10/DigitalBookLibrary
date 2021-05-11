import React, { Component } from 'react';
import { Text,TextInput, View, Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Home extends Component {
  render() {
    return (
        <View style = {{
            flex:1,
            backgroundColor:'white'
        }}>
      
        <View style = {{
            flex:1.5,
            alignContent:'center',
            alignItems:'center',
            justifyContent:'flex-end',    
        }}>

<Image
        style = {{width:390, height:320}}          
          source={require('../Assets/logo.jpg')}
        />

        </View>

        <View style = {{
            flex:1,
            justifyContent:'center',
            alignContent:'center'
        }}>
            
            <TouchableOpacity style = {{
              width:wp('96%'),
              borderRadius:20,
              height:40,
              alignContent:'center',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'row',
              alignSelf:'center',
              backgroundColor:'#ff3b30'
            }}>
        
        <Text style = {{
          fontSize:20,
          color:'white'
        }}>Login</Text>

            </TouchableOpacity>

           
            <TouchableOpacity style = {{
              width:wp('96%'),
              borderRadius:20,
              marginTop:20,
              height:40,
              alignContent:'center',
              justifyContent:'center',
              alignItems:'center',
              borderWidth:1,
              borderColor:'black',
              flexDirection:'row',
              alignSelf:'center',
            }}>
        
        <Text style = {{
          fontSize:20,
          color:'black'
        }}>SignUp</Text>

            </TouchableOpacity>


        </View>



      </View>
    );
  }
}

export default Home;