import React , {useEffect, useState} from 'react';
import {TouchableOpacity, AppRegistry,Image, StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen' 
import Swiper from 'react-native-swiper'





const SwiperComponent = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]
    );

  useEffect(() => {
    fetch('https://suretostop.com/BookLibrary/getbooks')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (

    
    <View style = {{
      height:200}}>
        
<Swiper  showsButtons={true}    >
  <View style={styles.slide1}>
    
<TouchableOpacity onPress={() => props.navigation.navigate("Bookdetails")} > 
 <Image style = {{ width:80, height:150 ,  marginLeft:10,}} alt="image" source={require('../Assets/book.jpg')} 
   />
</TouchableOpacity>  



<TouchableOpacity onPress={() => props.navigation.navigate("Bookdetails")}> 
 <Image style = {{ width:80, height:150 , marginLeft:10,}} source={require('../Assets/book.jpg')}/>
</TouchableOpacity>

<TouchableOpacity onPress={() => props.navigation.navigate("Bookdetails")}> 
 <Image style = {{ width:80, height:150 , marginLeft:10,}} source={require('../Assets/book.jpg')}/>
</TouchableOpacity>  
  
  
  
  </View>
  <View style={styles.slide2}>
  <TouchableOpacity onPress={() => props.navigation.navigate("Bookdetails")}> 
 <Image style = {{ width:80, height:150 , marginLeft:10,}} source={require('../Assets/book.jpg')}/>
</TouchableOpacity>  


<TouchableOpacity onPress={() => props.navigation.navigate("Bookdetails")}> 
 <Image style = {{ width:80, height:150 , marginLeft:10,}} source={require('../Assets/book.jpg')}/>
</TouchableOpacity>

<TouchableOpacity onPress={() => props.navigation.navigate("Bookdetails")}> 
 <Image style = {{ width:80, height:150 , marginLeft:10,}} source={require('../Assets/book.jpg')}/>
</TouchableOpacity>
  </View>
  <View style={styles.slide3}>
  <TouchableOpacity onPress={() => props.navigation.navigate("Bookdetails")}> 
 <Image style = {{ width:80, height:150 , marginLeft:10,}} source={require('../Assets/book.jpg')}/>
</TouchableOpacity>  


<TouchableOpacity onPress={() => props.navigation.navigate("Bookdetails")}> 
 <Image style = {{ width:80, height:150 , marginLeft:10,}} source={require('../Assets/book.jpg')}/>
</TouchableOpacity>

<TouchableOpacity onPress={() => props.navigation.navigate("Bookdetails")}> 
 <Image style = {{ width:80, height:150 , marginLeft:10,}} source={require('../Assets/book.jpg')}/>
</TouchableOpacity>
  </View>
</Swiper>
</View>
)
}

 export default SwiperComponent;
  
  
const styles = StyleSheet.create({
  wrapper: { 
  
   },

buttonWrapperStyle : {
    backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center'},

  slide1: {
    flex:1,
    justifyContent: 'center',
    flexDirection:"row",
    alignItems: 'center',
   
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row",
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row"
  },
})
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
