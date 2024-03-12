import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRoutName='Welcome'>
        <Stack.Screen name='Home'    options={{headerShown: false}}   component={HomeScreen}/>
        <Stack.Screen name='Welcome' options={{ headerShown: false }} component={WelcomeScreen}/>
        <Stack.Screen name='SignUp'  options={{ headerShown: false }} component={SignUpScreen}/>
        <Stack.Screen name='Login'   options={{headerShown: false}}   component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}