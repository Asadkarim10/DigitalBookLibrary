import React, { Component } from 'react';
import { Text,TextInput, View, Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class WelcomeChef extends Component {
  render(props) {
    return (

      <View style = {{
        flex:1,
        backgroundColor:'white'
      }}>


      <View style = {{
        height:80,
        alignSelf:'center',
        justifyContent:'center'
      }}>
      <Text style = {{
        fontSize:22,
        fontWeight:'500'
      }}>Welcome Chef</Text>
      </View>

      <View style = {{
        alignSelf:'center',
        width:wp('50%')
      }}>
      <Text style = {{
        textAlign:'center',
        fontSize:17,
        fontWeight:'400'
      }}>Please choose your favourite cusine</Text>
      </View>


      <View style = {{
  height:350,
  justifyContent:'center',
  
}} >

<TouchableOpacity  
 onPress={() => this.props.navigation.navigate('AboutDish')}
style = {{
  width:wp('95%'),
  alignSelf:'center',
  borderWidth:1,
  borderColor:'#f0a108',
  height:45,
  alignItems:'center',
  borderRadius:20,
  marginBottom:40,
  backgroundColor:"#f0a108",
  justifyContent:'center',
  flexDirection:'row'
}}>
  <Text style = {{
    fontWeight:'600',
    fontSize:17,
    color:"white"
  }}> Indian Cusine </Text>
</TouchableOpacity>


<TouchableOpacity style = {{
  width:wp('95%'),
  alignSelf:'center',
  borderWidth:1,
  height:45,
  marginBottom:40,
  borderColor:'#d53d40',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:"#d53d40",
  justifyContent:'center',
  flexDirection:'row'
}}>
  <Text style = {{
    fontWeight:'600',
    fontSize:17,
    color:"white"
  }}> Chinese Cuisine </Text>
</TouchableOpacity>



<TouchableOpacity style = {{
  width:wp('95%'),
  alignSelf:'center',
  borderWidth:1,
  marginBottom:40,
  height:45,
  alignItems:'center',
  borderRadius:20,
  borderColor:'#359546',
  backgroundColor:"#359546",
  justifyContent:'center',
  flexDirection:'row'
}}>
  <Text style = {{
    fontWeight:'600',
    fontSize:17,
    color:"white"
  }}> Italian Cuision </Text>
</TouchableOpacity>



<TouchableOpacity style = {{
  width:wp('95%'),
  alignSelf:'center',
  borderWidth:1,
  height:45,
  alignItems:'center',
  borderRadius:20,
  backgroundColor:"#494d8c",
  justifyContent:'center',
  flexDirection:'row'
}}>
  <Text style = {{
    fontWeight:'600',
    fontSize:17,
    color:"white"
  }}> Arabiam Cuision </Text>
</TouchableOpacity>



</View>
        

      
      </View>
    );
  }
}

export default WelcomeChef;