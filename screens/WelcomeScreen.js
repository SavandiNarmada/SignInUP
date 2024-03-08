import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, View } from 'react-native';
import { themeColors } from '../App';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center' }}>
          Let's Get Started!
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require("../assets/images/welcome.jpg")} style={{ width: 350, height: 350 }} />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ backgroundColor: 'yellow', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20 }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: 'yellow', fontWeight: 'bold', marginLeft: 5 }}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
