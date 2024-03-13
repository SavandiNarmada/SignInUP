import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import { themeColors } from '../App';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle signup logic here
    console.log('Signup button clicked');
  };

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'start', marginTop: 60 }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#FFD700', padding: 10, borderRadius: 20, marginLeft: 10 }}>
            <ArrowLeftIcon size={30} color="black" style={{ transform: [{ rotate: '0deg' }] }} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Image source={require('../assets/images/signup.png')} style={{ width: 300, height: 250}} />
        </View>

        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 8, paddingTop: 8, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
          <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
            <Text style={{ color: 'gray', marginLeft: 4, marginBottom:8 }}>Full Name</Text>
            <TextInput
              style={{ padding: 12, backgroundColor: '#E5E5E5', borderRadius: 15, marginBottom: 10 }}
              value={fullName}
              onChangeText={text => setFullName(text)}
              placeholder='Jhon Doe'
            />

            <Text style={{ color: 'gray', marginLeft: 4, marginBottom:8 }}>Email Address</Text>
            <TextInput
              style={{ padding: 12, backgroundColor: '#E5E5E5', borderRadius: 15, marginBottom:10 }}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder='example@gamil.com'
            />

            <Text style={{ color: 'gray', marginLeft: 4, marginBottom:8 }}>Password</Text>
            <TextInput
              style={{ padding: 12, backgroundColor: '#E5E5E5', borderRadius: 15 }}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
              placeholder='*********'
            />
          </View>

          <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#FFD700', padding: 15, marginTop: 10, borderRadius: 15, alignItems:"center", width:100, marginLeft: 285 }}>
            <Text style={{ fontWeight: 'bold' }}> SignUp </Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  );
}
