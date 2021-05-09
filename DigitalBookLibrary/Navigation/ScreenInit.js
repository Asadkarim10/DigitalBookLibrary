
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../Screens/home'
import Download from '../Screens/Download';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import Bookdetails from '../Screens/Bookdetails'





const Stack = createStackNavigator();


const screenOptionStyle = {
  headerTransparent: false,
  headerTitle: null,
  headerLeft: null,
};

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};


function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Bookdetails" component={Bookdetails} />
        <Stack.Screen name="Download" component={Download} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="heartylunch" component={Heartylunch} />
    <Stack.Screen name="weightLossTips" component={WeightLossTips} />
    

    </Stack.Navigator>
  );
}




export default MyStack;

