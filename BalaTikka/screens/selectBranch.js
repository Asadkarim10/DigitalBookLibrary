import React, { useState } from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SelectBranch = () => {
  return (

    <View style={{
      flex: 1,
      backgroundColor: '#ededed'
  }}>

  <View style={{
          flex: .3,
          justifyContent: "center",
          backgroundColor:'#fdfdfd'
      }}>
<Ionicons name="close" size={30} color="#dc8284" />
  </View>

      <View style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: "center",
      }}>

          <Image
              style={{
                  width: 200,
                  height: 200
              }}
              source={require('../Assets/logo.png')}
          />

      </View>
      <View style={{
          flex: 2,
justifyContent:'center',
backgroundColor:'green'
      }}>

<Text style = {{
  alignSelf:'center',
  fontSize:40,
  fontWeight:'800'
}}>Select Branch</Text>

<Text style = {{
    alignSelf:'center',
    marginTop:-7
}}>Please select your desired branch</Text>


      </View>

      <View style={{
          flex: 1,
          backgroundColor:'yellow',
justifyContent:'center'
      }}>
      </View>
      <View style={{
          flex: .5,
justifyContent:'center'
      }}>
      </View>

  </View>



  );
}

export default SelectBranch;