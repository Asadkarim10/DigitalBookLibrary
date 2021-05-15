import React from 'react';
import {ImageBackground, Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Trackorder = () => {
  return (
      <View style = {{
          flex:1,
          backgroundColor:'white'
      }}>
    
    <View style = {{
        flex:1.5,
        
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        paddingBottom:30,
        backgroundColor:'#f2f5fe'
    }}>
        <View>
            <Text style = {{ color:'#53d9bf' , fontWeight:'bold', fontSize:19}}>PAYMENT SUCCESS</Text>
            <Text style = {{color:'#c0c3c8'}}>Your order is on the way</Text>
        </View>

    <View>
    <Image
        style={{height:100,width:wp("10%")}}
        source={require('../Assets/cropped.jpg')}
      />
    </View>
    </View>

    <View style = {{
        flex:3.5,
        justifyContent:'center'
        
    }}>

        <View style = {{
            width:wp('37%'),
            height:150,
            alignSelf:'center',
            borderRadius:70,
            justifyContent:'center',
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'#47cdd0'
        }}>


        <Ionicons name="checkmark-sharp" size={150} color="white" />


        </View>
        
        </View>

        
    <View style = {{
        flex:5,
        
    }}>
        
        </View>

    </View>
  );
}

export default Trackorder;