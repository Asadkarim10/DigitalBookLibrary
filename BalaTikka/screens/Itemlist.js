import React, { useState } from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Itemlist = () => {
    return (
        <View style = {{
            flex:1,
            backgroundColor:'#e4e4e4'
        }}>
      
        <View style = {{
            flex:.5,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingRight:5,
            paddingLeft:5
        }} >
            <View style = {{
                flexDirection:'row',
                alignItems:'center'}}>
                <Text style = {{
                    fontSize:20,
                    fontWeight:'bold'
                }}>Branch</Text>
                <Text style = {{
                    marginLeft:10
                }}>Banni,Rawalpindi</Text> 
            </View>

            <View style = {{
                flexDirection:'row',
                alignItems:'center'
            }}>
            <TouchableOpacity>
            <AntDesign name="search1" size={30} color="#a1a1a1" />
            </TouchableOpacity>
            <TouchableOpacity>
            <AntDesign name="staro" size={30} color="#121212" />
            </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome name="user-circle-o" size={30} color="#dfdfdf" />
            </TouchableOpacity>
            </View>

        </View>
        <View style = {{
            flex:2,
            backgroundColor:'green'
        }} >

<ImageBackground  source={require('../Assets/bg.jpg')}
style={{height:200,width:wp('100%')}} > 
<Text></Text>
</ImageBackground>


        </View>
        <View style = {{
            flex:.4,
            backgroundColor:'red'
        }} >

        </View>
        <View style = {{
            flex:4,
            backgroundColor:'pink'
        }} >

        </View>
        <View style = {{
            flex:1,
            backgroundColor:'purple'
        }} >

        </View>




      </View>
    );
  }
  
  export default Itemlist;