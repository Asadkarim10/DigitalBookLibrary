import React from 'react';
import {ImageBackground, Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Cart = (props) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>


        <View style = {{
            flex:1 }}>


<ImageBackground source={require('../Assets/bf.jpg')} style={{width: '100%', height: 180}}>
   <View style={{position: 'absolute', top: -120, left: -350, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
  <TouchableOpacity  >
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
}}>3x$0.20 ice lemon tea</Text>
<Text style = {{
    color:'#454545',
    fontSize:17,
    fontWeight:'bold'
}}>$0.60</Text>
</View>

<View style = {{
    marginLeft:10,
    height:40,
    justifyContent:'center'
}}>
    <Text style = {{
        color:'#9e9e9e',
        fontWeight:'bold'
    }}>Desserts & Sides</Text>
</View>


<View style = {{
    flexDirection:'row',
    width:wp('95%'),
    alignSelf:'center',
    borderBottomWidth:1,
    borderBottomColor:'#fcfcfc',
    paddingBottom:17,
    justifyContent:'space-between'
}}>

<Text style = {{
    color:'#454545',
    fontSize:17,
    fontWeight:'bold'
}}>3x$0.20 corn tea</Text>
<Text style = {{
    color:'#454545',
    fontSize:17,
    fontWeight:'bold'
}}>$1.50</Text>
</View>


<View style = {{
    height:50,
    justifyContent:'flex-end',
    alignItems:'center',
    flexDirection:'row',
    marginRight:10
}}>
    <TouchableOpacity>
    <Text>CLEAR CART</Text>
    </TouchableOpacity>
</View>


<View style = {{
    flexDirection:'row',
    width:wp('95%'),
    alignSelf:'center',
    borderBottomWidth:1,
    borderBottomColor:'#fcfcfc',
    paddingBottom:17,
    justifyContent:'space-between'
}}>

<Text style = {{
    color:'#454545',
    fontSize:17,
    fontWeight:'bold'
}}>Discount 10%</Text>
<Text style = {{
    color:'#454545',
    fontSize:17,
    fontWeight:'bold'
}}>($6.51)</Text>
</View>


<View style = {{
    flexDirection:'row',
    width:wp('95%'),
    alignSelf:'center',
    borderBottomWidth:1,
    borderBottomColor:'#fcfcfc',
    paddingBottom:17,
    justifyContent:'space-between'
}}>

<Text style = {{
    color:'#454545',
    fontSize:17,
    fontWeight:'bold'
}}>Sub Total</Text>
<Text style = {{
    color:'#454545',
    fontSize:17,
    fontWeight:'bold'
}}>$58.59</Text>
</View>


<View style = {{
    flexDirection:'row',
    justifyContent:'space-around'
}}>

<TextInput placeholder="Enter voucher here" placeholderTextColor="#bdbdbd" style = {{ borderBottomColor:'#bdbdbd', paddingBottom:-28, borderBottomWidth:1, width:wp('60%'), fontSize:17}} />

<TouchableOpacity style = {{
    width:wp("30%"),
    height:40,
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    marginTop:10,
    borderColor:'#f6f6f6',
    backgroundColor:'white',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.5,
shadowRadius: 1.84,

elevation: 2,
}}>
    <Text style = {{
        color:'#63d38e',
        fontSize:20,
        fontWeight:'700'
    }}>APPLY</Text>
</TouchableOpacity>
</View>

<View style = {{
    height:50,
    justifyContent:'center'
}}>
    <Text style = {{
        color:'#63d38e',
        fontWeight:'bold',
        fontSize:15,
        marginLeft:10
    }}>This ordered earned 63 karendaria points</Text>
</View>



<View style = {{
    flexDirection:'row',
    justifyContent:'space-around'
}}>

<TextInput placeholder="Redeem Points" placeholderTextColor="#bdbdbd" style = {{ borderBottomColor:'#bdbdbd', paddingBottom:-28, borderBottomWidth:1, width:wp('60%'), fontSize:17}} />

<TouchableOpacity style = {{
    width:wp("30%"),
    height:40,
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    marginTop:10,
    borderColor:'#f6f6f6',
    backgroundColor:'white',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.5,
shadowRadius: 1.84,

elevation: 2,
}}>
    <Text style = {{
        color:'#63d38e',
        fontSize:20,
        fontWeight:'700'
    }}>REDEEM</Text>
</TouchableOpacity>
</View>

<View style = {{
    height:50,
    justifyContent:'center'
}}>
    <Text style = {{
        color:'#63d38e',
        fontWeight:'bold',
        fontSize:15,
        marginLeft:10
    }}>Your available points 193</Text>
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
                    justifyContent:'space-around',
                    width:wp('100%'),
                    
                }}>
                   
                   <Text style = {{ color:'white', fontWeight:'bold', fontSize:15 }}>PLACE ORDER</Text>
                   <Text style = {{ color:'white', fontWeight:'bold' , fontSize:15 }}>$65.72</Text>
                </View>
                </TouchableOpacity>


        </View>




        </View>
    );
}

export default Cart;