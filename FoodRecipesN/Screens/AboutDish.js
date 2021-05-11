import React, { Component } from 'react';
import { Text,TextInput, View, Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class AboutDish extends Component {
  render() {
    return (
      <View style = {{
        flex:1
      }}>
<View style = {{
  height:50,
  justifyContent:'center'
}}>
  <Text style = {{
    fontWeight:'bold',
    fontSize:22,
    marginLeft:10
  }}>Samosa</Text>
</View>

<View style = {{
  width:wp("98"),
  alignSelf:'center'
}}>

<Text >The triangular shaped flaky pastry filled with spicy potato , chicken or lamb filling is a popular snack not only in india but in several countries of the world</Text>
 
 <Text style = {{
   marginTop:10,
   fontSize:17
 }}>
   But only later i need that it has its origin in middle east and it was introduced to india during the delhi sultanate rule.
 </Text>
      
<Text style = {{
   marginTop:10,
   fontSize:17
 }}>
  Anyway waht ever the origin was , i can confidententily say that samosa , espacillay <Text style = {{ fontWeight:'bold' }}>Aloo Samosa</Text> is the most popular snack back home 
</Text>

<View style = {{
  height:50,
  justifyContent:'center'
}}> 
  <Text style = {{
    fontSize:22,
    marginLeft:6,
    fontWeight:'700'
  }}>Method</Text>
</View>

<Text style = {{
   marginTop:10,
   fontSize:17
 }}>1- Start by making the samosa dough. to a large bowl, add flour, ajwain, salt and mix well.</Text>
<Text style = {{
   marginTop:10,
   fontSize:17
 }}>2- Add the Oil and start mixing with your fingers</Text>
<Text style = {{
   marginTop:10,
   fontSize:17
 }}>3-Rub the floor with oil until the oil is well incorporated in all of the flour.Do thus for 3 to 4 minutes , you dont want to rush this step.</Text>
<Text style = {{
   marginTop:10,
   fontSize:17
 }}>4-Once Incorporated, the mixture resembles crumbs.</Text>
<Text style = {{
   marginTop:10,
   fontSize:17
 }}>5-Press some flour between your palm it should form a shape (& not crumble )</Text>

</View>
      
      </View>
    );
  }
}

export default AboutDish;