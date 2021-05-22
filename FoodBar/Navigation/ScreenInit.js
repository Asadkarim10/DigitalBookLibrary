
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../Screens/Cart';
import Home from '../Screens/home';
import Food from '../Screens/Food';
import Order from '../Screens/Order';
import Signin from '../Screens/signin';
import Trackorder from '../Screens/trackorder';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Reviews from '../Screens/Reviews';
 



const Stack = createStackNavigator();


const screenOptionStyle = {
  headerTransparent: false,
  headerTitle: null,
  headerLeft: null,
};

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};

const Tab = createBottomTabNavigator();


 function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator 
      initialRouteName="signin"
        tabBarOptions={{
        activeTintColor: '#ff5603', 

        labelStyle: { textTransform: "none", fontSize: 11, marginBottom:5 , fontWeight: "bold" },
        style: {
          
          justifyContent:'center',
        },
      }}>
        
        <Tab.Screen name="Food" 
        component={Food}
          options={{
            tabBarLabel: 'Food',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="restaurant-menu" color={color} style = {{ marginBottom:-5  }} size={size} />
            ),}}/>
        
  
        <Tab.Screen name="home"
         component={Home} 
         options={{
          tabBarLabel: 'Reviews',
          tabBarVisible: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons    name="star" color={color} size={size} style = {{ marginBottom:-5  }} />) }}/>


<Tab.Screen name="Order"
         component={Order} 
         options={{
          tabBarLabel: 'Order',
          tabBarVisible: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons  name="reorder-three" color={color} size={size} style = {{ marginBottom:-5  }} />
          )
        }}/>


<Tab.Screen name="signin"
         component={Signin} 
         options={{
          tabBarVisible: false,
          tabBarLabel: 'you',
          tabBarIcon: ({ color, size }) => (
            <Entypo   name="user" color={color} size={size} style = {{ marginBottom:-5  }} />
          )
        }}/>        


<Tab.Screen name="Cart"
         component={Cart} 
         options={{
          tabBarLabel: 'Cart',
          tabBarVisible: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons  name="cart" color={color} size={size} style = {{ marginBottom:-5  }} />
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signin">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Trackorder" component={Trackorder} />
        <Stack.Screen name="signin" component={Signin} />        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const SettingStackNavigator = () => {

  navigation.setOptions({ tabBarVisible: false })


  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
 
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Trackorder" component={Trackorder} />
        <Stack.Screen name="signin" component={Signin} /> 

    </Stack.Navigator>
  );
}


export default App;



