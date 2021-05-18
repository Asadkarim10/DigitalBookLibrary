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
        paddingRight:15,
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
        flex:3,
        justifyContent:'flex-end'
        
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

        <View style = {{
            height:40,
            alignItems:'center',
            flexDirection:'row',
            alignSelf:'center'
        }}>
            <Text style = {{
            color:'#d4d4d6',
            fontWeight:'800',
            fontSize:15
            }}>Your order has been placed.Refrence # 3582</Text>
        </View>
        
        </View>

        
    <View style = {{
        flex:5,

    }}>

<TouchableOpacity>
        <View style = {{
            width:wp('90%'),
            height:60,
            borderRadius:5,
            alignSelf:'center',
            justifyContent:'center',
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'#f06625',
        }}>
            <Text style = {{
                color:'white',
                fontWeight:'600',
                fontSize:20
            }}>TRACK ORDER</Text>

        </View>
        </TouchableOpacity>


        <View style = {{
            alignSelf:'center',
            alignItems:'center',
            flexDirection:'row',
            marginTop:10,
        }}>

            
        <View
  style={{
      width:wp("35%"),
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
  }}
/>

<View style = {{
    height:20,
    width:wp('15%'),
    borderWidth:1,
    borderColor:'#f3f3f3',
    backgroundColor:'white'
}}>
    <Text style = {{
        alignSelf:'center',
        fontWeight:'bold',
        paddingTop:-5,
        fontSize:17,
        
    }}>Or</Text>
</View>

<View
  style={{
    width:wp("35%"),
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
  }}
/>
            </View>     

<View style = {{
height:100,
flexDirection:'row',
alignItems:'center',
justifyContent:"center"
}}>
    <TouchableOpacity>
    <Text style = {{
        color:'#f06625',
        fontWeight:"700",
        fontSize:16
    }}>
        BACK TO HOME
    </Text>
    </TouchableOpacity>
</View>


        </View>


    </View>
  );
}

export default Trackorder;