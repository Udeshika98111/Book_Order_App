import * as react from 'react';
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Alert,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
var he = Dimensions.get('window').height;
var wi = Dimensions.get('window').width;

function LoginScreen({ navigation }) {
  const [username1, setUsername1] = useState('');
  const [password1, setPassword1] = useState('');

  const route = useRoute();
  const { username, password } = route.params ?? {};

  const loginhandle = () => {
   

if(username===username1 && password===password1){
navigation.navigate('Dashboard');
}else{
  Alert.alert('Incorrect username or Password');
}

  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentCenter}>
        <Image
          source={require('../assets/1.png')}
          style={{
            width: 300,
            height: 300,
          }}
        />
      </View>

      <View style={styles.paddingContainer}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
         
          onChangeText={setUsername1}
          returnKeyType="next"></TextInput>

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        
          onChangeText={setPassword1}
          returnKeyType="go"></TextInput>

        <TouchableOpacity style={styles.buttonContainer} onPress={loginhandle}>
          <Text style={styles.buttonText}>Login</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Dashboard')}></TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.tal}>
          OR
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={styles.tcolor}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paddingContainer: {
    padding: 20,
    width: wi,
    height: he,
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#00000',
    marginBottom: 20,
    fontSize: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#2596be',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
  },
  tcolor: {
    textAlign: 'center',
    color: '#2596be',
    fontSize: 25,
    textDecorationLine: 'Underline',
  },
  tal: {
    textAlign: 'center',
    color: '#2596be',
    fontSize: 20,
  },
});
export default LoginScreen;
