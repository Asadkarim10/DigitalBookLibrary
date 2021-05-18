import React, { useState } from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Home = (props) => {
    const [count, setCount] = useState(0);


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>

            <View style={{
                flex: .6,
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems: 'center',
                borderBottomColor: '#f3f3f3',
                borderWidth: 1
            }} >
                <View style = {{
                    flexDirection:'row'
                }}>
                <Ionicons name="arrow-back" size={30} color="black" />
                <Text style={{
                    marginLeft: 20,
                    fontSize: 20,
                    fontWeight: '700'
                }}>Happy Meal</Text>
</View>
                <View style = {{
                    marginRight:10
                }}>
                <Ionicons name="heart-outline" size={30} color="red" />

                </View>

            </View>

<View style = {{
    flex:2.5
}}>

<Image
       style = {{width:400, height:250}}  
        source={require('../Assets/bf.jpg')}
      />
</View>
            <View style={{
                flex: 3,
            }}>

<ScrollView>
            <View style = {{
                height:50,
                width:wp('90%'),
                alignSelf:'center',
            }}>
                <Text style = {{
                    fontSize:20,
                    fontWeight:'bold'
                }}>Happy Meal Breakfast</Text>
                <Text style = {{
                    fontSize:15
                }}>$20.00</Text>
            </View>
            <View style = {{
                width:wp('90%'),
                marginTop:10,
                alignSelf:'center'
            }}>
                <Text style = {{
                    fontSize:15
                }}>
                    You want the best for your family.So do we.Our kid-friendly restaurants have great happy meal options,like a hamburger made with a 100% 
                    beef patty that has no filers,additives or preservatives ,or our tender and juicy Chicken McNuggets choose a side and your favourite drink: 1% low -fat white Milk Jug or apple juice drink. And , as always , a happy Meal toy comes in every box.
                </Text>
            </View>

<View style = {{
    backgroundColor:'#f3f3f3',
    height:50,
    marginTop:10,
    justifyContent:'center'
}}>
    <Text style = {{
        marginLeft:20,
        fontSize:20,
        fontWeight:'bold'
    }}>Special Request</Text>
</View>

<Text style = {{
    marginLeft:20,
    fontSize:18,
    color:'#f3f3f3'
}}>Your preference or request</Text>

<View style = {{
    backgroundColor:'#f3f3f3',
    height:50,
    marginTop:10,
    justifyContent:'center'
}}>
    <Text style = {{
        marginLeft:20,
        fontSize:20,
        fontWeight:'bold'
    }}>Drinks</Text>
</View>

<Text style = {{
    marginLeft:20,
    fontSize:18,
    color:'#f3f3f3'
}}>Your preference or request</Text>

                
                </ScrollView>

            </View>




            <View style={{
                flex: .5,
                justifyContent:'center'
            }}>


<View style = {{
    flexDirection:'row',
   justifyContent:'center',
   marginTop:25
}}>

<View style = {{
    borderWidth:1,
    height:50,
    alignItems:'center',
    borderColor:'black',
    width:wp('20%'),
    justifyContent:'center',
    flexDirection:'row'
}}>
<TouchableOpacity onPress={() => setCount(count - 1)}>
<AntDesign name="minus" size={30} color="#19d956" />
</TouchableOpacity>
</View>  

<View style = {{
    
    height:50,
    borderTopWidth:1,
    borderBottomWidth:1,
    alignItems:'center',
    width:wp('50%'),
    justifyContent:'center',
    flexDirection:'row'
}}>

<Text style = {{
    fontSize:20
}}>{count}</Text>


</View>  




<View style = {{
    borderWidth:1,
    height:50,
    alignItems:'center',
    borderColor:'black',
    width:wp('20%'),
    justifyContent:'center',
    flexDirection:'row'
}}>

<TouchableOpacity onPress={() => setCount(count + 1)} >
<AntDesign name="plus" size={30} color="#19d956" />
</TouchableOpacity>

</View>           
</View>

                

            </View>

        <View style = {{
            flex:1,
            justifyContent:'flex-end'

        }}>
<TouchableOpacity onPress={() => props.navigation.navigate('trackorder')}  > 
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

export default Home;