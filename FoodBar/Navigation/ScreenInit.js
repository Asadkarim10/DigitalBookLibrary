
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';




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
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        

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

