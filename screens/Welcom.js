import * as react from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert,Dimensions} from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient'
 var he= Dimensions.get("window").height;
var wi= Dimensions.get("window").width;


function LoginScreen({navigation}){
  
  return(
  
    <SafeAreaView style={styles.container}>
     
   
    <View style={styles.Container}>
       <View style={styles.contentCenter}>

        <Image 
         style={styles.imsize}
        source={
          require('../assets/1.png')
        }

      />
      <View style={styles.hh}>

            <TouchableOpacity 
               style={styles.buttonContainer}
               onPress={() => {
           
     
               navigation.navigate('Login');
     
                }}>
              <Text style={styles.buttonText}>GO</Text>
    

              <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
  
              </TouchableOpacity>
 
         </TouchableOpacity>

   </View>
  </View>


   
    
  



    </View>

</SafeAreaView> 


   
  );
  
}


const styles=StyleSheet.create({
  
  Container :
  {
    backgroundColor:'#fffff',
    width:wi,
     height:he
  },
  contentCenter:{
    justifyContent:'center',
    alignItems:'center',
  },
  imsize:{
    width:500,
    height:400
  },
 
 
  buttonContainer :{


    backgroundColor:'#2980b9',
    paddingVertical:40,
    width:100,
    height:100,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
     borderBottomLeftRadius:100,
     borderTopRightRadius: 100,
     

         
  },
  buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
  },
  hh:{
    paddingTop:0
  }
});
export default LoginScreen;