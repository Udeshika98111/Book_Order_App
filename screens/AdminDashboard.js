import * as react from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert,Dimensions } from 'react-native';
import Constants from 'expo-constants';
var he= Dimensions.get("window").height;
var wi= Dimensions.get("window").width;

function LoginScreen({navigation}){
 
  
  return(
      <ImageBackground
       style= {{flex:1, height:he}}
     source={require('../assets/bg3.jpg')
   
      }>
    <SafeAreaView style={styles.container}>
    

     

<View style={styles.blance}>
<View style={styles.alin}>
<Image
   style={styles.imsize}
   source={require('../assets/1.png')}/>
</View>

<View style={styles.alin}>
<Text style={styles.t}>Dash board</Text>

</View>



            <View style={styles.paddingContainer}>
            <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => {
                  
               
                navigation.navigate('Childhood');
            
            }}>
            <Text style={styles.buttonText}>Mange Childhood</Text>
            </TouchableOpacity>
            

            
                <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => {
                  
              
                navigation.navigate('Novels');
            
            }}>
            <Text style={styles.buttonText}>Mange Novels</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.paddingContainer}>

                 <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => {
                  
              
                navigation.navigate('Interpreter');
            
            }}>
            <Text style={styles.buttonText}>Mange Interpreter</Text>
            </TouchableOpacity>
            

            
                <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => {
                  
               
                navigation.navigate('Education');
            
            }}>
            <Text style={styles.buttonText}>Manage Education</Text>
                    
            </TouchableOpacity>
            </View>

          
            </View>



</SafeAreaView> 
</ImageBackground>

   
  );
}


const styles=StyleSheet.create({
  container:{
    backgroundColor:'#fffff',
    width:wi,
     height:he

  },

  paddingContainer :
  {
   
    justifyContent:'space-between',
    flexDirection:"row" ,
    padding:20,
    paddingBottom:20  ,
    paddingTop:20  
  },
 blance:{
   paddingTop:40
 },
  buttonContainer :{
        backgroundColor:'#2980b9',
    paddingVertical:40,
    paddingHorizontal:40,
    borderTopLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius:10,
          borderTopRightRadius: 10,
          width:128,
          height:115
  },
  buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
    fontSize:10
 
  },
  t:{
    
     color:'#2980b9',
     fontSize:30
    
  }
  ,
  alin:{
     justifyContent:'center',
     alignItems:'center',

  },
   imsize:{
    width:200,
    height:90,
    
  }
});
export default LoginScreen;