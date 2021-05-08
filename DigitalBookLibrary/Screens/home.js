import React, { Component } from 'react';
import { Text,TextInput, View, Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SliderBox } from "react-native-image-slider-box";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?tree", // Network image
                 // Local image
      ]
    };
  }
  render() {
    return (
      <View style = {{
        flex:1
      }}>

<View style = {{
        flex:2,
        backgroundColor:"green"
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
        flex:3.5,
        backgroundColor:'white'

      }}>
      
      <SliderBox
  images={this.state.images}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
/>

      </View>


      <View style = {{
        flex:7,
        backgroundColor:"white"
      }}>

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


            


      
      </View>
      
      </View>
    );
  }
}

export default Home;