import React, { Component } from 'react';
import { Text,TextInput, View, Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Download extends Component {
  render() {
    return (
      <View style = {{
        flex:1
      }}>
        <View style = {{
          flex:1,
          backgroundColor:'blue',
          justifyContent:'center'
        }}>
      <Text style = {{
        fontSize:30,
        paddingLeft:10,
        color:'white'
      }}>Downloads</Text>
      </View>
      <View style = {{
        flex:7,
        marginTop:60
      }}>



  



      

<View style = {{
      borderWidth:1,
      width:wp('96%'),
      alignSelf:'center',
      height:120,
      borderColor:'black',
      flexDirection:'row'
    }}>
<View  style = {{
      backgroundColor:'yellow',
      width:wp("40%"),
      marginLeft:22,
      marginTop:-50,
      height:150,
      borderWidth:1
    }}>
</View>

<View>

<View style = {{
  width:wp("50%"),
  justifyContent:'center',
  height:60,
  borderBottomWidth:1,
  borderBottomColor:'black'
}}>
<Text style = {{
  paddingLeft:10,
  fontWeight:'700',
  fontSize:19
}}>Android Live tv</Text>
<Text style = {{
  paddingLeft:10
}}>By ABC</Text>
</View>

<View style = {{
  justifyContent:'center',
  height:30,
  paddingLeft:10
}}>
<Text style = {{
  fontSize:15,
}}>Lorem ipsum ......</Text>
</View>

</View>

</View>
      </View>
      </View>

    );
  }
}

export default Download;