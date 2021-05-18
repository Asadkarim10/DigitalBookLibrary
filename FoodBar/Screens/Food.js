import React from 'react';
import { Text, TextInput, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import SwiperComponent from './imgSwipper'

const Food = () => {
    return (

        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>

            <View style={{
                width: wp('98%'),
                alignSelf: 'center',
                backgroundColor: 'white',
                flex: .5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>

                <TouchableOpacity>
                    <View>
                        <FontAwesome5 name="bars" size={30} color="black" />
                    </View>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginRight: 8
                }} >
                    <View style={{ marginRight: 10 }}>
                        <TouchableOpacity>
                            <Ionicons name="search-sharp" size={30} color="black" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <FontAwesome name="bell" size={30} color="black" />
                    </TouchableOpacity>
                </View>

            </View>


            <View style={{
                flex: 2,
            }}>

                <SwiperComponent />

            </View>

            <View style={{
                flex: 4,
                backgroundColor: "white"
            }}>

                <View style={{
                    height: 90,
                    marginTop: 10,
                    width: wp('92%'),
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    flexDirection: 'row'    }}>

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
                            }}>BreakFast</Text>
                        </View>


                        <View style={{
                            marginTop: 2,
                            marginLeft: 5
                        }}>
                            <Text style={{
                                color: '#949494',
                                fontWeight: '700'
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Text>
                        </View>

                    </View>
                </View>




                <View style={{
                    height: 90,
                    marginTop: 10,
                    width: wp('92%'),
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    flexDirection: 'row'    }}>

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
                            }}>All Time Favourite</Text>
                        </View>


                        <View style={{
                            marginTop: 2,
                            marginLeft: 5
                        }}>
                            <Text style={{
                                color: '#949494',
                                fontWeight: '700'
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Text>
                        </View>

                    </View>
                </View>


                <View style={{
                    height: 90,
                    marginTop: 10,
                    width: wp('92%'),
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    flexDirection: 'row'    }}>

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
                            }}>HappyMeal</Text>
                        </View>


                        <View style={{
                            marginTop: 2,
                            marginLeft: 5,
                            height:'auto'
                        }}>
                            <Text style={{
                                color: '#949494',
                                fontWeight: '700'
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        </View>

                    </View>
                </View>

    <View style = {{
        height:100,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    }}>
        <TouchableOpacity style = {{
            width:wp('30%'),
            height:40,
            borderRadius:18,
            flexDirection:'row',
            alignContent:'center',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#5d8fd4'
        }}>
            
        <MaterialIcons name="restaurant" size={25} color="white" />
        <Text style = {{
            color:'white',
            fontSize:16,
            marginLeft:5
        }}>Menu</Text>
        </TouchableOpacity>
    </View>

            </View>




















            
        </View>
    );
}

export default Food;