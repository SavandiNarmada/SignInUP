import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';


export default function LoginScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login button clicked');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'start', marginTop: 60 }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#FFD700', padding: 10, borderRadius: 20, marginLeft: 10 }}>
            <ArrowLeftIcon size={30} color="black" style={{ transform: [{ rotate: '0deg' }] }} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/images/Login.png')} style={{ width: 200, height: 200 }} />
          <TextInput
            style={{ backgroundColor: '#E5E5E5', padding: 10, marginTop: 100, width: '80%', borderRadius: 20 }}
            placeholder="  Email Address"
          />
          <TextInput
            style={{ backgroundColor: '#E5E5E5', padding: 10, marginTop: 10, width: '80%', borderRadius: 20 }}
            placeholder="  Password"
            secureTextEntry
          />
          <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#FFD700', padding: 10, marginTop: 40, borderRadius: 20, width:100, alignItems:"center"}}>
            <Text style={{ fontWeight: 'bold' }}> Login </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text style={{ color: 'gray' }}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{ color: 'blue' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
