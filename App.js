import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import FarmerDashboard from "./src/screens/FarmerDashboard"; // Create this file
import IndustryDashboard from "./src/screens/IndustryDashboard"; // Create this file

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="FarmerDashboard" component={FarmerDashboard} />
        <Stack.Screen name="IndustryDashboard" component={IndustryDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
