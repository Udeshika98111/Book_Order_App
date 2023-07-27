import React,{useState} from 'react';
import {Text,View,TextInput,Image,TouchableOpacity,StyleSheet,Alert,ImageBackground,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import Welcom from './screens/Welcom';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import AdminDashboard from './screens/AdminDashboard';
import Childhood from './screens/AddChildhood';
import Novels from './screens/AddNovel';
import Interpreter from './screens/AddInterpreter';
import Education from './screens/AddEducation';
import ChildhoodBook from './screens/ChildhoodBook';
import NovelBook from './screens/NovelBook';
import EducationBook from './screens/EducationBook';
import InterpreterBook from './screens/InterpreterBook';
import Payment from './screens/Payment';

const Stack=createStackNavigator();

function App(){
  return(<NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Welcom" component={Welcom} options={{ headerShown: false }} />
  <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
  <Stack.Screen name="Dashboard" component={Dashboard} />
  <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
  <Stack.Screen name="Childhood" component={Childhood} />
  <Stack.Screen name="Novels" component={Novels} />
  <Stack.Screen name="Interpreter" component={Interpreter} />
  <Stack.Screen name="Education" component={Education} />
  <Stack.Screen name="ChildhoodBook" component={ChildhoodBook} />
  <Stack.Screen name="NovelBook" component={NovelBook} />
  <Stack.Screen name="EducationBook" component={EducationBook} />
  <Stack.Screen name="InterpreterBook" component={InterpreterBook}/>
  <Stack.Screen name="Payment" component={Payment}/>
  </Stack.Navigator>
  </NavigationContainer>);
}
export default App;