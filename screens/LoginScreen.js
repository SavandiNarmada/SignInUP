 import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
 import React from 'react';
 import {themeColors}from '../App';
 import {ArrowLeftIcon}from 'react-native-heroicons/solid';
 import {useNavigation}from '@react-navigation/native';
 
 export default function LoginScreen() {
  const navigation = useNavigation();
   return (
     <View className="flex-1 bg-white" style={{backgroundColor:themeColors.bg}}>
        <SafeAreaView className="flex">
          <View className="flex-row justify-start">
            <TouchableOpacity onPress={()=> navigation.goBack()}   className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
              <ArrowLeftIcon size="20" color="black"/>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center">
            <Image source={require('../assets/images/Login.png')} style={{width: 200, height: 200}} />
          </View>
        </SafeAreaView>  

          <View 
            className="flex-1 bg-white px-8 pt-8"
            style={{borderTopLeftRadius:50, borderTopRightRadius: 50}}>  
           
            <View className="form space-y-2">
              <Text className="text-gray-700 ml-4">Email Address</Text>
              <TextInput 
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value='savandi.narmada@gmail.com'
                placeholder='Enter Email'
              />

              <Text className="text-gray-700 ml-4">Password</Text>
              <TextInput 
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                secureTextEntry
                value='test12345'
                placeholder='Enter Password'
              />

              <TouchableOpacity className="flex items-end mb-5">
                <Text className="text-gray-700">Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
                <Text className="font-xl font-bold text-center text-gray-700">
                  Log in
                </Text>
              </TouchableOpacity>
            </View> 

            <Text className="text-xl text-gray-700 font-bold text-center py-5"> Or </Text>

            <View className="flex-row justify-center">
              <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/images/gmail.png')}
                  className="w-10 h-10"
                />
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                <Text className="font-semibold text-yellow-500">Sign Up</Text>
              </TouchableOpacity>
          </View>
          </View>        
     </View>
   );
 }