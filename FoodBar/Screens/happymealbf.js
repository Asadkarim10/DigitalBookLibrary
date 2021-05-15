import React from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Happymealbf = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>

            <View style={{
                flex: .6,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomColor: '#f3f3f3',
                borderWidth: 1
            }} >
                <Ionicons name="arrow-back" size={30} color="black" />
                <Text style={{
                    marginLeft: 20,
                    fontSize: 20,
                    fontWeight: '700'
                }}>Happy Meal</Text>

            </View>

            <View style={{
                flex: .6,
                justifyContent: 'center'
            }}>

                <View style={{
                    backgroundColor: '#e7e7e7',
                    width: wp('94%'),
                    height: 45,
                    alignSelf: 'center',
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Ionicons name="search-outline" size={30} color="#858585" />
                    </View>
                    <TextInput placeholder={'Search for item'} placeholderTextColor={'#cbcbcb'} style={{ fontSize: 19, marginLeft: 10 }} />

                </View>

            </View>

            <View style={{
                flex: 5,
            }}>

<ScrollView>

                <View style={{
                    height: 90,
                    width: wp('92%'),
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    flexDirection: 'row'
                }}>

                    <View style={{

                    }}>

                        <Image style={{ width: wp('18%'), height: 70, borderRadius: 5 }}
                            source={require('../Assets/bf.jpg')} />
                    </View>


                    <View style={{
                        width: wp('66%'),
                        borderBottomWidth: 2,
                        borderBottomColor: '#fcfcfc'
                    }}>
                        <View style={{
                            marginLeft: 5,
                            marginTop: 5,
                        }}>
                            <Text style={{
                                color: '#717170',
                                fontWeight: '700'
                            }}>Happy Meal BreakFast</Text>
                        </View>


                        <View style={{
                            marginTop: 2,
                            marginLeft: 5,
                            height: 'auto'
                        }}>
                            <Text style={{
                                color: '#949494',
                                fontWeight: '700'
                            }}>You want best for your family</Text>

                            <Text style={{
                                color: '#949494',
                                fontWeight: '700'
                            }}>$155</Text>
                        </View>

                    </View>
                </View>


                </ScrollView>

            </View>




            <View style={{
                flex: 1.5,
                justifyContent:'flex-end'
            }}>
                <View style={{
                    height: 80,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity style={{
                        width: wp('30%'),
                        height: 40,
                        borderRadius: 18,
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#5d8fd4'
                    }}>

                        <MaterialIcons name="restaurant" size={25} color="white" />
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            marginLeft: 5
                        }}>Menu</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{
                    backgroundColor:'#f06625',
                    height:50,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    width:wp('100%'),
                    
                }}>
                    <View style = {{
                        flexDirection:'row',
                        width:wp('40%'),
                        justifyContent:'space-around'
                    }}>
                    <Text style = {{
                        color:'white'
                    }}>0 item</Text>
                    <Text style = {{
                        borderLeftWidth:1,
                        borderLeftColor:'white',
                        paddingLeft:20,
                        color:'white'
                    }}>$0.00</Text>
                    </View>
                    <View style = {{
                        flexDirection:'row',
                        width:wp('40%'),
                        alignItems:"center",
                        justifyContent:'space-around'
                    }}>
                        <View style = {{
                            flexDirection:'row',
                            justifyContent:'space-around'
                        }}>
                    <Text style = {{
                        color:'white'
                    }}>View Cart</Text>
                    </View>
                    <View>
                    <MaterialIcons name="shopping-basket" size={25} color="white" />
                    </View>
                    </View>
                </View>


            </View>




        </View>
    );
}

export default Happymealbf;