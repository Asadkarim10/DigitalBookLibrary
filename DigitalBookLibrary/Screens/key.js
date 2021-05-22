import React, { useEffect, useState } from 'react';
import { ActivityIndicator,TouchableOpacity,Image, FlatList, Text, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'


export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://suretostop.com/BookLibrary/getbooks')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log({data})

  return (

    
    <View style={{ flex: 1 }}>
      

{/* 
      <Swiper  showsButtons={true}     >
         <FlatList style = {{ }}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
            <Text>{item.id}</Text>
            <Text>{item.author}</Text>
            <Text>{item.description}</Text>
            </View>
          )}
        /> 

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

  </Swiper>     */}


<Swiper autoplay={true} loop={true} style={styles.wrapper} showsButtons={true}>

{data.map((data) => {
    return(
      <View style = {{
        flex:1
      }}>
        <View style={styles.slide3}>
            <View style = {{
              flexDirection:'column',
              justifyContent:'center'
            }}>
            <Image style = {{
              height:150,
              width:150}}  
              source={{ uri: data.book_image}}/>
              <Text>{data.author}</Text>
              </View>
        </View>
        </View>
        
    );
})}
</Swiper>



    </View>
  );
};

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

