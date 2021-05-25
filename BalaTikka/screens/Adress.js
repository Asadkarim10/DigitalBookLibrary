import React, { useState } from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const Address = () => {
  return (
    <View style={{ flex:1, backgroundColor:"#f3f3f3" }}>


      <View style={{flex:2 , justifyContent:'center', flexDirection:'row', alignItems:'center'}}> 

      <Image
              style={{
                  width: 150,
                  height: 150
              }}
              source={require('../Assets/logo.png')}
          />

      </View>
      
      <View style={{flex:.7,backgroundColor:'green' , justifyContent:'center'}}> 

<View style = {{
  flexDirection:'row',
  justifyContent:'space-around'
}}>

      <View style = {{
        width:wp('30'),
        alignItems:'center',
        alignItems:'center'
      }}>
        <Text>Icons</Text>
        <Text>@ballaTikkahouse</Text>
      </View>

      <View style={{
    width: 1,
    height:30,
    backgroundColor: '#909090',}}>
      
    </View>

    <View style = {{
        width:wp('30'),
        alignItems:'center',
        alignItems:'center'
      }}>
        <Text>Icons</Text>
        <Text>#ballaTikkahouse</Text>
      </View>


      <View style={{
    width: 1,
    height:30,
    backgroundColor: '#909090',}}>
      
    </View>

    <View style = {{
        width:wp('30'),
        alignItems:'center',
        alignItems:'center'
      }}>
        <Text>Icons</Text>
        <Text>ballaTikkahouse.com</Text>
      </View>


      </View>

      
      

      




      </View>
      
      
      <View style={{flex:3}}> 

      <Image
              style={{
                  width: 120,
                  height: 150
              }}
              source={require('../Assets/bala.png')}
          />



      </View>
      
      <View style={{flex:2,backgroundColor:'pink'}}> 

      </View>
      
      <View style={{flex:.5,backgroundColor:'purple'}}> 

      </View>










    </View>
  );
}

export default Address;