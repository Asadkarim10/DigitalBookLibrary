
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import AboutDish from '../Screens/AboutDish'
import ChoseDish from '../Screens/choseDish';
import SignIn from '../Screens/signin';
import SignUp from '../Screens/signUp';
import WelcomeChef from '../Screens/welcomeChef'
import Home from '../Screens/home'
import IndianCuisine from '../Screens/IndianCuisine'



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
        <Stack.Screen name="AboutDish" component={AboutDish} />
        <Stack.Screen name="choseDish" component={ChoseDish} />
        <Stack.Screen name="IndianCuisine" component={IndianCuisine} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="welcomeChef" component={WelcomeChef} />

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

