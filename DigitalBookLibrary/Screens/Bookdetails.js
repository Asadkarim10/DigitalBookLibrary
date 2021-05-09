import React, { Component } from 'react';
import { Text,TextInput, View, Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

class BookDetails extends Component {
  render() {
    return (

      <View style = {{
        flex:1
      }}>


      <View style = {{
        flex:1,
        justifyContent:'center',
        backgroundColor:'blue'
      }}>

        
  <Text style = {{ fontSize:40,color:'white', paddingLeft:10, fontWeight:'700' }}>
        Book Details
          </Text>  
        

      </View>

      
      <View style = {{
        flex:2.5,
        backgroundColor:'red'
      }}>

      </View>

      
      <View style = {{
        flex:4
      }}>

        <View style = {{
          justifyContent:'center',
          alignSelf:'center'
        }}>
          <Text style = {{ textAlign:'center', fontSize:17, fontWeight:'bold'}}>English 1</Text>
          <Text style = {{ fontSize:15}}>Author By ABC</Text>
        </View>


        <View style = {{
          flexDirection:'row',
          alignSelf:'center',
          marginTop:10
        }}>


        <View style = {{
          borderTopWidth:1,
          borderLeftWidth:1,
          borderBottomWidth:1,
          width:wp('30%'),
          height:60,
          borderColor:'black',
          justifyContent:'center',
          flexDirection:'row',
          alignItems:'center'
        }}> 
           <Entypo name="heart" size={25} color="red" /> 
          </View>
        <View style = {{
          borderTopWidth:1,
          borderLeftWidth:1,
          borderBottomWidth:1,
          width:wp('30%'),
          height:60,
          borderColor:'black',
          justifyContent:'center',
          flexDirection:'row',
          alignItems:'center'
        }}> 
       <Entypo name="eye" size={25} color="#808080" /> 
 
          </View>
        <View style = {{
          borderTopWidth:1,
          borderLeftWidth:1,
          borderBottomWidth:1,
          borderRightWidth:1,
          width:wp('30%'),
          height:60,
          borderColor:'black',
          justifyContent:'center',
          flexDirection:'row',
          alignItems:'center'
        }}> 
       <Entypo name="download" size={25} color="#018101" /> 
          </View>
        </View>

        



        <View style = {{
          height:50,
          justifyContent:'center'
        }}>
          <Text style = {{
            fontSize:17,
            paddingLeft:10,
            color:'blue',
            fontWeight:'bold'
          }}>Description</Text>
        </View>

        <View style = {{
          flexDirection:'row',
          width:wp("80%"),
          alignSelf:'center',
          alignItems:'center',
          justifyContent:'space-between'
        }}>

          <Text style = {{
            fontSize:20,
            color:'blue',
            fontWeight:'bold'
          }}> Title </Text>
          <Text> English </Text>

        </View>


        <View style = {{
          flexDirection:'row',
          width:wp("80%"),
          alignSelf:'center',
          alignItems:'center',
          justifyContent:'space-between'
        }}>

          <Text style = {{
            fontSize:20,
            color:'blue',
            fontWeight:'bold'
          }}> Author </Text>
          <Text> ABC </Text>

        </View>

        <View style = {{
          flexDirection:'row',
          width:wp("80%"),
          alignSelf:'center',
          alignItems:'center',
          justifyContent:'space-between'
        }}>

          <Text style = {{
            fontSize:20,
            color:'blue',
            fontWeight:'bold'
          }}> Writer </Text>
          <Text> XYZ </Text>

        </View>

        <View style = {{
          flexDirection:'row',
          width:wp("80%"),
          alignSelf:'center',
          alignItems:'center',
          justifyContent:'space-between'
        }}>

          <Text style = {{
            fontSize:20,
            color:'blue',
            fontWeight:'bold'
          }}> Edition  </Text>
          <Text> 01 </Text>

        </View>

        <View style = {{
          flexDirection:'row',
          width:wp("80%"),
          alignSelf:'center',
          alignItems:'center',
          justifyContent:'space-between'
        }}>

          <Text style = {{
            fontSize:20,
            color:'blue',
            fontWeight:'bold'
          }}> Deparment </Text>
          <Text> English </Text>

        </View>

        <View style = {{
          flexDirection:'row',
          justifyContent:'center',
          height:40,
          alignItems:'center'
        }}>

          <Text style = {{ fontWeight:"bold"}}>Back to <Text style = {{
            fontWeight:'bold',
            color:'blue',
            fontSize:18
          }}> Home</Text> </Text>
        </View>


      </View>



      </View>
    );
  }
}

export default BookDetails;