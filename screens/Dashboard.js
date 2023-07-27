import * as react from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert,Dimensions} from 'react-native';
import Constants from 'expo-constants';
var he= Dimensions.get("window").height;
var wi= Dimensions.get("window").width;


function LoginScreen({navigation}){
 
  
  return(
    <SafeAreaView style={styles.container}>
    

      <ImageBackground
       style= {{flex:1, height:he}}
     source={require('../assets/bg3.jpg')
   
      }>
     

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
                  
               
                navigation.navigate('ChildhoodBook');
            
            }}>
            <Text style={styles.buttonText}>Childhood</Text>        
            </TouchableOpacity>
            

            
                <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => {
                  
                
                navigation.navigate('NovelBook');
            
            }}>
            <Text style={styles.buttonText}>Novels</Text>        
            </TouchableOpacity>
            </View>


            <View style={styles.paddingContainer}>
            <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => {
                  
                navigation.navigate('InterpreterBook');
            
            }}>
            <Text style={styles.buttonText}>Interpreter</Text>        
            </TouchableOpacity>
            

            
                <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => {
                  
              
                navigation.navigate('EducationBook');
            
            }}>
            <Text style={styles.buttonText}>Education</Text>        
            </TouchableOpacity>
            </View>

            </View>


            <View style={styles.alin}>
         

</View>

</ImageBackground>

</SafeAreaView> 


   
  );
}


const styles=StyleSheet.create({
  container:{
    backgroundColor:'#fffff',
    flex:1,
   

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
   paddingTop:50
 },
  buttonContainer :{
        backgroundColor:'#2980b9',
    paddingVertical:30,
    paddingHorizontal:30,
    borderTopLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius:10,
          borderTopRightRadius: 10,
          width:150,
          height:90,
  },
  buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
    fontSize:15
 
  },
  t:{
    
     color:'#2980b9',
     fontSize:30
    
  }
  ,
  alin:{
     justifyContent:'center',
     alignItems:'center',
     margin:10

  },
  imsize:{
    width:200,
    height:90,
    
  }
});
export default LoginScreen;