import React, { useState } from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const Delivery = () => {
  return (
    <View style = {{
      flex:1,
      backgroundColor:'white'
    }}>    
      <View style = {{
        flex:.7,
        backgroundColor:'green'
      }}></View>
      <View style = {{
        flex:3,
        backgroundColor:'yellow'
      }}></View>
      <View style = {{
        flex:1,
        backgroundColor:'blue'
      }}></View>
      <View  style = {{
        flex:2,
        backgroundColor:'green'
      }}></View>
      <View style = {{
        flex:1,
        backgroundColor:'red'
      }}></View>

    </View>

  );
}

export default Delivery;