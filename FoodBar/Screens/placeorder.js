import React from 'react';
import {ImageBackground, Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Placeorder = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>


        <View style = {{
            flex:1 }}>


<ImageBackground source={require('../Assets/bf.jpg')} style={{width: '100%', height: 180}}>
   <View style={{position: 'absolute', top: -120, left: -350, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
  <TouchableOpacity>
   <Ionicons name="arrow-back" size={30} color="black" />
   </TouchableOpacity>
   </View>
</ImageBackground>

        </View>

        <View style = {{
            flex:3.2,
        }}>

<View style = {{
    height:60,
    width:wp('95%'),
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'space-between'
}}>


<View style = {{
   height:40,
   width:wp('10%'),
   borderRadius:50,
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'#16d555' 
}}>
    <Text style = {{ fontSize:17, color:'white'}}>3</Text>
</View>

<View>
    <Text style = {{ fontSize:16}}>Happy Meal Breakfast</Text>
</View>
<View>
    
<TouchableOpacity>
   <Ionicons name="close" size={27} color="#f3f3f3" />
</TouchableOpacity>
</View>
</View>

<View style = {{
    flexDirection:'row',
    width:wp('95%'),
    alignSelf:'center',
    justifyContent:'space-between'
}}>

<Text style = {{
    color:'#454545',
    fontSize:17,
    fontWeight:'bold'
}}>321.00</Text>
<Text style = {{
    color:'#454545',
    fontSize:17,
    fontWeight:'bold'
}}>$63.00</Text>
</View>

<View style = {{
    marginLeft:10,
    height:40,
    justifyContent:'center'
}}>
    <Text style = {{
        color:'#9e9e9e',
        fontWeight:'bold'
    }}>Drinks</Text>
</View>

<View style = {{
    flexDirection:'row',
    width:wp('95%'),
    alignSelf:'center',
    justifyContent:'space-between'
}}>

<Text style = {{
    color:'#454545',
    fontSize:17,
    fontWeight:'bold'
}}>321.00</Text>
<Text style = {{
    color:'#454545',
    fontSize:17,
    fontWeight:'bold'
}}>$63.00</Text>
</View>

<View style = {{
    marginLeft:10,
    height:40,
    justifyContent:'center'
}}>
    <Text style = {{
        color:'#9e9e9e',
        fontWeight:'bold'
    }}>Drinks</Text>
</View>






        </View>



            
        <View style = {{
            flex:.3,
            justifyContent:'flex-end'

        }}>
<TouchableOpacity>
                <View style = {{
                    backgroundColor:'#f06625',
                    height:50,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                    width:wp('100%'),
                    
                }}>
                   
                   <Text style = {{ color:'white', fontWeight:'900' }}>ADD TO CART</Text>
                  
                </View>
                </TouchableOpacity>


        </View>




        </View>
    );
}

export default Placeorder;