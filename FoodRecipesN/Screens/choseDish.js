import React, { Component } from 'react';
import { Text,TextInput, View, Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class ChooseDish extends Component {
  render() {
    return (
      <View style = {{
        flex:1
      }}>
      
      <View style = {{
        alignSelf:'center'
      }}>
        <Text style = {{
          fontSize:20
        }}>Choose Your Dish to prepare</Text>
      </View>

        <View style = {{
          alignSelf:'center',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          
          elevation: 5,
        }}>

        <TouchableOpacity>
        <Image
          style = {{ height:280, width:400}}
          source={require('../Assets/samosa.jpg')}
        />

        <Text style = {{
          alignSelf:'center',
          fontSize:20
        }}>Samosa</Text>
        </TouchableOpacity>

        </View>

        <View style = {{
          alignSelf:'center',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          
          elevation: 5,
        }}>

        <TouchableOpacity>
        <Image
          style = {{ height:280, width:400}}
          source={require('../Assets/chaat.jpg')}
        />
        </TouchableOpacity>

        <Text style = {{
          alignSelf:'center',
          fontSize:20
        }}>Chaat</Text>
        </View>


        <View>

        </View>

      </View>
    );
  }
}

export default ChooseDish;