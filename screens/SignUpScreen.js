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

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'start', marginTop: 70 }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#FFD700', padding: 10, borderRadius: 20, marginLeft: 10 }}>
            <ArrowLeftIcon size={35} color="black" style={{ transform: [{ rotate: '3deg' }] }} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Image source={require('../assets/images/signup.png')} style={{ width: 400, height: 400 }} />
        </View>

        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 8, paddingTop: 8, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
          <View style={{ marginHorizontal: 8, marginBottom: 20 }}>
            <Text style={{ color: 'gray', marginLeft: 4 }}>Full Name</Text>
            <TextInput
              style={{ padding: 12, backgroundColor: '#E5E5E5', borderRadius: 20, marginBottom: 8 }}
              value={fullName}
              onChangeText={text => setFullName(text)}
              placeholder='Enter Name'
            />

            <Text style={{ color: 'gray', marginLeft: 4 }}>Email Address</Text>
            <TextInput
              style={{ padding: 12, backgroundColor: '#E5E5E5', borderRadius: 20, marginBottom: 8 }}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder='Enter Email'
            />

            <Text style={{ color: 'gray', marginLeft: 4 }}>Password</Text>
            <TextInput
              style={{ padding: 12, backgroundColor: '#E5E5E5', borderRadius: 20 }}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
              placeholder='Enter Password'
            />
          </View>

          <TouchableOpacity style={{ backgroundColor: '#FFD700', padding: 14, borderRadius: 20, marginBottom: 20, alignItems: 'center' }}>
            <Text style={{ color: 'gray', fontWeight: 'bold' }}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={{ textAlign: 'center', color: 'gray', marginBottom: 20 }}>Or</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
            <TouchableOpacity style={{ backgroundColor: '#E5E5E5', padding: 10, borderRadius: 20 }}>
              <Image source={require('../assets/images/gmail.png')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ color: 'gray', fontWeight: 'bold' }}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: 'yellow', fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
