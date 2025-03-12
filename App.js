import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen.js';
import IndustryHome from './src/screens/IndustryHome.js';
import IndustryTrans from './src/screens/IndustryTrans.js';
import IndustryHelp from './src/screens/IndustryHelp.js';
import IndustryProfile from './src/screens/IndustryProfile.js';
import IndustryProfileEdit from './src/screens/IndustryProfileEdit.js';
import IndustryMaterial from './src/screens/IndustryMaterial.js';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="IndustryHome" component={IndustryHome} />
        <Stack.Screen name="IndustryTrans" component={IndustryTrans} />
        <Stack.Screen name="IndustryHelp" component={IndustryHelp} />
        <Stack.Screen name="IndustryProfile" component={IndustryProfile} />
        <Stack.Screen name="IndustryProfileEdit" component={IndustryProfileEdit} />
        <Stack.Screen name="IndustryMaterial" component={IndustryMaterial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
