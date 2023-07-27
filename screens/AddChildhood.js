import * as react from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert,Dimensions } from 'react-native';
import Constants from 'expo-constants';
 var he= Dimensions.get("window").height;
var wi= Dimensions.get("window").width;


function LoginScreen({navigation}){
  const [bookname, setText]=useState('');
  const [discription, setText1]=useState('');
  const [author, setText2]=useState('');
  const [price, setText3]=useState('');
  const [quntity, setText4]=useState('');
  
  return(
    <SafeAreaView style={styles.container}>
    
       <View style={styles.contentCenter}>
         <Image
         style={{
          width: 250,
          height: 250}}
        source={
         require('../assets/1.png')
        }

   />
    
  </View>

    <View style={styles.paddingContainer}>
    <TextInput
     style={styles.input}
    placeholder='Book Name'
    onChangeText={bookname=> setText(bookname)}
    defaultValue={bookname}
    returnKeyType="next">
    </TextInput>

    <TextInput 
    placeholder='Discription'
     style={styles.input}
     onChangeText={discription=> setText1(discription)}
    defaultValue={discription}
    returnKeyType="go">
    </TextInput>

    <TextInput 
    placeholder='Author'
   // secureTextEntry
     style={styles.input}
     onChangeText={author=> setText2(author)}
    defaultValue={author}
    returnKeyType="go">
    </TextInput>

      <TextInput 
    placeholder='Price'
    //secureTextEntry
     style={styles.input}
     onChangeText={price=> setText3(price)}
    defaultValue={price}
    returnKeyType="go">
    </TextInput>

     <TextInput
     style={styles.input}
    placeholder='Quntity'
    onChangeText={quntity=> setText4(quntity)}
    defaultValue={quntity}
    returnKeyType="next">
    </TextInput>


    <TouchableOpacity 
    style={styles.buttonContainer}
    onPress={() => {
           
            Alert.alert('successfully Added!!');
     
        navigation.navigate('AdminDashboard');
     
    }}>
    <Text style={styles.buttonText}>Register</Text>
    
 
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
    /*height:35,
    backgroundColor:'rgba(255,255,255,0.2)',
    color :'#2596be',
    marginBottom:20,
    fontSize:20,
    paddingHorizontal:1*/
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