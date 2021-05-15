import React from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const HappyMeal = () => {
  return (

    <View style = {{
        flex:1,
        backgroundColor:'white'
    }}>

   <View style = {{
       flex:.5,
       backgroundColor:'yellow'
   }}>

    <View>
        <Text>Asad</Text>
    </View>

    <View >
        <Text>Asad</Text>
        <Text>Asad</Text>
    </View>

    </View>


   <View style = {{
       flex:2,
       backgroundColor:'green'
   }}>

       <Text>Swipper</Text>

   </View>

   <View style = {{
       flex:4,
       backgroundColor:"white"
   }}>

       <View style = {{
           height:90,
           marginTop:10,
           width:wp('98%'),
           alignSelf:'center',
           backgroundColor:'white',
           flexDirection:'row',
           borderWidth:1,

       }}>

           <View style = {{
               
           }}>
               
           <Image style = {{ width:wp('28%') , height:88}}
            source={require('../Assets/bf.jpg')}/>
           </View>


           <View>
            <View style = {{
                marginLeft:5,
                marginTop:5,
            }}>
                <Text>BreakFast</Text>
            </View>

            
            <View style = {{
                marginTop:10,
                marginLeft:5
            }}>
                <Text>Lorem ipsum pipsum</Text>
            </View>

            </View>
       </View>

       

   </View>




    </View>
  );
}

export default HappyMeal;