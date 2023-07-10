import React from "react";
import Started from "./src/Started";
import Login from "./src/Login";
import Register from "./src/Register"
import Home from "./src/Home";
import Canteen from "./src/Canteen";
import Foodtruck from "./src/Foodtruck";
import Bakery from "./src/Bakery";
import Razorpay from "./src/Razorpay";
import Userdata from "./src/Userdata";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontLoaded] = useFonts({
    'poppins': require('./assets/fonts/Poppins-Medium.ttf')
  })
  if(!fontLoaded){
    return <AppLoading />
  }
  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName="Started">

        <Stack.Screen name="Started" component={Started} />

        <Stack.Screen name="Login" component={Login} />
        
        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Canteen" component={Canteen} />

        <Stack.Screen name="Foodtruck" component={Foodtruck} />

        <Stack.Screen name="Bakery" component={Bakery} />

        <Stack.Screen name="Razorpay" component={Razorpay} />

        <Stack.Screen name="Userdata" component={Userdata} />

      </Stack.Navigator>
      
      }</NavigationContainer>
  );
}