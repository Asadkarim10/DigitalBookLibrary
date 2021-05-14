import React, { Component } from 'react';
import { Text,TextInput, View, Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SliderBox } from "react-native-image-slider-box";
import SwiperComponent from './imgSwipper' 
import { ImageComponent } from 'react-native';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTNFa9HFQcmJDexhAtXYcT_mFRgPQ40sP-g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4XgwvyI4zVTVg6lp9ZAYo6cMut6pODbhVw&usqp=CAU", 
                 
      ]
    };
  }
  render(props) {
    return (
      <View style = {{
        flex:1
      }}>

<View style = {{
        flex:2,
        backgroundColor:"blue"
      }}>

<View style = {{
  flexDirection:'row',
  justifyContent:'space-between',
  alignSelf:'center',
  alignItems:'center',
  width:wp('95%')
}}>
  <TouchableOpacity>
   <FontAwesome5 name="bars" size={30} color="white" />
</TouchableOpacity>

<View>
  <Text style = {{
    fontSize:20,
    fontWeight:'800',
    color:'white'
  }}>Home</Text>
</View>
</View>

<View  style = {{
  height:70,
  justifyContent:'center',
}}>
<TextInput placeholder={"Search books, Digest, Noval Dictionary"} style = {{
  width:wp('94%'),
  height:40,
  paddingLeft:10,
  alignSelf:'center',
borderRadius:10,
  backgroundColor:'white'
}} />
</View>
      
      </View>

      <View style = {{
        flex:4,
        backgroundColor:'white',
      

      }}>
      
      <SliderBox
  images={this.state.images}
  sliderBoxHeight={300}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  currentImageEmitter={index => console.warn(`current pos is: ${index}`)}/>
      </View>


      <View style = {{
        flex:7,
        backgroundColor:"white"
      }}>

        <ScrollView>

        <View style = {{
          flexDirection:'row',
          width:wp("98%"),
          alignSelf:'center',
          height:40,
          alignItems:'center',
          justifyContent:'space-between'
        }}>
          <Text style = {{
          fontSize:20,
          fontWeight:"400"
          }}>Category</Text>
          <TouchableOpacity>
            <Text style = {{
            color:'red'
            }}>
            ViewAll
            </Text>
            </TouchableOpacity>
        </View>
        <SwiperComponent navigation={this.props.navigation} />

        <View style = {{
          flexDirection:'row',
          width:wp("98%"),
          alignSelf:'center',
          height:40,
          alignItems:'center',
          justifyContent:'space-between'
        }}>
          <View>
          <Text style = {{
          fontSize:20,
          fontWeight:"400"
          }}>Latest</Text>
          <Text style = {{
            color:'red',
          fontSize:15
          }}>Books are recently Added</Text>
          </View>
          <TouchableOpacity>
            <Text style = {{
            color:'red'
            }}>
            ViewAll
            </Text>
            </TouchableOpacity>
            </View>

            <SwiperComponent navigation={this.props.navigation} />

            <View style = {{
          flexDirection:'row',
          width:wp("98%"),
          alignSelf:'center',
          height:40,
          alignItems:'center',
          justifyContent:'space-between'
        }}>
          <Text style = {{
          fontSize:20,
          fontWeight:"400"
          }}>Author</Text>
          <TouchableOpacity>
            <Text style = {{
            color:'red'
            }}>
            ViewAll
            </Text>
            </TouchableOpacity>
            </View>

            <SwiperComponent navigation={this.props.navigation}  />


        </ScrollView>
      </View>
    
      </View>
    );
  }
}

export default Home;