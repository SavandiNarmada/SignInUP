import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, View } from 'react-native';
import { themeColors } from '../App';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen(){
  const navigation = useNavigation;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>
          Let's Get Started!
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require("../assets/images/welcome.jpg")} style={{ width: 420, height: 150, marginBottom:20 }} />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ backgroundColor: 'purple', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 20 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 80, backgroundColor: 'purple', borderRadius:20, paddingVertical: 10, paddingHorizontal: 25 }}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
