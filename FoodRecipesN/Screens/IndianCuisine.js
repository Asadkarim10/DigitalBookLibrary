import React, { Component } from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class IndianCuisine extends Component {
  render(props) {
    return (
      <View style = {{
        flex:1,
        backgroundColor:'white'
      }}>
      
      <View style = {{
        flex:1
      }}>

<Text style = {{
  alignSelf:'center',
  fontSize:22
}}>Indian Cuisine</Text>

<Image
       style = {{ height:300}}   
          source={require('../Assets/indianC.jpg')}/>

      </View>

      <View style = {{
        flex:1
      }}>

      <View style = {{
        height:60,
        justifyContent:'center',
        width:wp('92%'),
        alignSelf:'center'
      }}>
        <TouchableOpacity  
          onPress={() => this.props.navigation.navigate('welcomeChef')}
        style = {{
          height:35,
          backgroundColor:'#ba4363',
          width:wp('40%'),
          justifyContent:'center',
          borderRadius:5,
        }}>
          <Text style = {{
            alignSelf:'center',
            color:'white',
            fontWeight:'600'
          }}>About Indian Food</Text>
        </TouchableOpacity>
        </View>
        <View style = {{
          width:wp("80%"),
          alignSelf:'center'
        }}>
          <Text style = {{
            fontSize:18,
            fontWeight:'bold'
          }}>Indian Food Categories</Text>
        </View>

          <View style = {{
            height:200,
            width:wp('60%'),
            
          }}>

            <TouchableOpacity style = {{
              height:35,
              borderRadius:6,
              borderWidth:1,
              borderColor:"#feffbd",
              width:wp('40%'),
              marginTop:10,
              justifyContent:'center',
              alignSelf:'center',
              backgroundColor:'#feffbd'
            }}>

            <Text style = {{
              alignSelf:'center',
              fontWeight:'bold'
            }}>Appetizer's</Text>


            </TouchableOpacity>

          
            <TouchableOpacity style = {{
              height:35,
              borderRadius:6,
              borderWidth:1,
              borderColor:"#feffbd",
              width:wp('40%'),
              marginTop:15,
              justifyContent:'center',
              alignSelf:'center',
              backgroundColor:'#feffbd'
            }}>

            <Text style = {{
              alignSelf:'center',
              fontWeight:'bold'
            }}>Entree's</Text>


            </TouchableOpacity>


            
            <TouchableOpacity style = {{
              height:35,
              borderRadius:6,
              borderWidth:1,
              borderColor:"#feffbd",
              
              width:wp('40%'),
              marginTop:15,
              justifyContent:'center',
              alignSelf:'center',
              backgroundColor:'#feffbd'
            }}>

            <Text style = {{
              alignSelf:'center',
              fontWeight:'bold'
            }}>Biryani's</Text>


            </TouchableOpacity>

          </View>

      </View>


      </View>
    );
  }
}

export default IndianCuisine;