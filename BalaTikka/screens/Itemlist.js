import React, { useState } from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
            backgroundColor:'#f1f2f2',
            justifyContent:'center'
        }} >

        <View style = {{
            flexDirection:'row',
            justifyContent:'space-around',
        }}>

        <Text>Offers</Text>
        <Text>Bar B.Q</Text>
        <Text>Chicken Pulao</Text>
        <Text>Sweet</Text>
        <Text>Naan</Text>

        </View>


        </View>
        <View style = {{
            flex:4,
            marginTop:10,
            backgroundColor:'#e2e2e2'
        }} >

        <View style = {{
            backgroundColor:'white',
            height:180,
            flexDirection:'row',
            borderRadius:10,
            alignSelf:'center',
            width:wp("96%")
        }}>

            <View style = {{
                width:wp("40%"),
                borderRadius:10,
                height:180
            }}>

            <Image
            style={{
            width:wp("40%"),
            height: 180,
            borderRadius:10,
          }}
          source={require('../Assets/logo.png')}
        />



            </View>
            <View style = {{
                width:wp("55%"),
                borderTopRightRadius:5,
                borderBottomRightRadius:5,
                height:180
            }}>

            <View style = {{
                height:30,
            flexDirection:'row',
            alignItems:'flex-end',
            justifyContent:'space-around'
        }}>
            <Text> Chicken Seekh Kabab</Text>
            <TouchableOpacity>
            <AntDesign name="staro" size={25} color="#121212" />
            </TouchableOpacity>
        </View>

        <View style = {{
            marginLeft:18
        }}> 
            <Text>1 Dosens</Text>
        </View>

        <View style = {{
            
            height:120,
            
            justifyContent:'flex-end'
        }}>   
               <View style = {{
            flexDirection:'row',
            justifyContent:'space-around'
        }}>
            <Text>Rs 600</Text>
            
          <View>
            <TouchableOpacity style = {{
              width:wp('17%'),
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'row',
              height:35,
              borderRadius:10,
              backgroundColor:'#f90000'
                          }}>
                <Text style = {{
                color:'#fffdff',
                marginLeft:10,
                fontSize:20
              }}>Add</Text>
            <Ionicons name="cart" size={20} color="#fffdff" />
              
            </TouchableOpacity>
          </View>
        </View>
        </View>
  





            </View>



        </View>




        </View>
        <View style = {{
            flex:1,
            justifyContent:'flex-end'
        }} >

        
<View style={{
          flexDirection: 'row',
          width:wp('95%'),
          justifyContent:'space-between'
        }}>

          <View style = {{
            flexDirection:"row",
            justifyContent:'center',
            alignItems:'center'
          }}>
          <View style={{
            width: wp('10%'),
            alignItems: 'center',
            alignItems: 'center'
          }}>
            <EvilIcons name="sc-facebook" size={30} color="#000000" />

          </View>

          <View style={{
            width: 1,
            height: 25,
            backgroundColor: '#909090',
          }}>

          </View>

          <View style={{
            width: wp('10%'),
            alignItems: 'center',
            alignItems: 'center'
          }}>
            <AntDesign name="instagram" size={26} color="#000000" />

          </View>


          <View style={{
            width: 1,
            height: 25,
            backgroundColor: '#909090',
          }}>

          </View>

          <View style={{
            width: wp('10%'),
            alignItems: 'center',
            alignItems: 'center'
          }}>
            <Ionicons name="md-globe-outline" size={26} color="#000000" />
          </View>
          </View>

          <View>
            <TouchableOpacity style = {{
              width:wp('20%'),
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'row',
              height:40,
              borderRadius:10,
              backgroundColor:'#f90000'
                          }}>
            <Ionicons name="ios-call" size={20} color="#fffdff" />
              <Text style = {{
                color:'#fffdff',
                marginLeft:10,
                fontSize:20
              }}>Call</Text>
            </TouchableOpacity>
          </View>


        </View>






        </View>




      </View>
    );
  }
  
  export default Itemlist;