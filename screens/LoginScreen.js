import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login button clicked');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10, marginTop: 10 }}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/images/Login.png')} style={{ width: 200, height: 200 }} />
          <TextInput
            style={{ backgroundColor: '#ccc', padding: 10, marginTop: 20, width: '80%', borderRadius: 5 }}
            placeholder="Email Address"
          />
          <TextInput
            style={{ backgroundColor: '#ccc', padding: 10, marginTop: 10, width: '80%', borderRadius: 5 }}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'yellow', padding: 10, marginTop: 20, borderRadius: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Login</Text>
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
