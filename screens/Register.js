import * as react from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert,Dimensions } from 'react-native';
import Constants from 'expo-constants';
 var he= Dimensions.get("window").height;
var wi= Dimensions.get("window").width;


function LoginScreen({navigation}){
  const [username, setText]=useState('');
  const [password, setText1]=useState('');
  const [address, setText2]=useState('');
  const [contact, setText3]=useState('');
  
  return(
    <SafeAreaView style={styles.container}>
    
       <View style={styles.contentCenter}>
         <Image
         style={{
          width: 350,
          height: 350}}
        source={
         require('../assets/1.png')
        }

   />
    
  </View>

    <View style={styles.paddingContainer}>
    <TextInput
     style={styles.input}
    placeholder='User Name'
    onChangeText={username=> setText(username)}
    defaultValue={username}
    returnKeyType="next">
    </TextInput>

    <TextInput 
    placeholder='Password'
    secureTextEntry
     style={styles.input}
     onChangeText={password=> setText1(password)}
    defaultValue={password}
    returnKeyType="go">
    </TextInput>

    <TextInput 
    placeholder='Address'
   // secureTextEntry
     style={styles.input}
     onChangeText={address=> setText2(address)}
    defaultValue={address}
    returnKeyType="go">
    </TextInput>

      <TextInput 
    placeholder='Contact'
    //secureTextEntry
     style={styles.input}
     onChangeText={contact=> setText3(contact)}
    defaultValue={contact}
    returnKeyType="go">
    </TextInput>

            <TouchableOpacity 
    style={styles.buttonContainer}
    onPress={() => {
           
            Alert.alert('successfully Registered!!');
     
        navigation.navigate('Login',{ username,password });
     
    }}>
    <Text style={styles.buttonText}>Register</Text>
    

    <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
  
    </TouchableOpacity>
 
     </TouchableOpacity>

   
    </View>

   
</SafeAreaView> 


   
  );
}


const styles=StyleSheet.create({
  container:{
    backgroundColor:'#fffff',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
     width:wi,
     height:he
   

  },
  paddingContainer :
  {
     padding :10,
     height:he*3/5
  },
  contentCenter:{
    justifyContent:'center',
    alignItems:'center',
  
  },
 
  input:{
  
    height : 40,
    width:he*2/4,
    backgroundColor:'rgba(255,255,255,0.2)',
    color :'#00000',
    marginBottom:20,
    fontSize:20,
    paddingHorizontal:10,
     borderWidth: 1,
    borderColor: '#2596be',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30
  },
    buttonContainer :{
  backgroundColor:'#2980b9',
    paddingVertical:15,
    borderTopLeftRadius: 100,
          borderBottomRightRadius: 100,
          borderBottomLeftRadius:100,
          borderTopRightRadius: 100,
  },
  buttonText:{
   textAlign:'center',
    color:'#FFFFFF',
    fontSize:20
  },
  
});
export default LoginScreen;