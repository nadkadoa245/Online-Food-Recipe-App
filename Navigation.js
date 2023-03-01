import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../Screens/Auth/LoginScreen";
import SplashScreen from "../Screens/SplashScreen";
import CategoryScreen from "../Screens/Home/CategoryScreen";
import AllMealScreen from "../Screens/Home/AllMealScreen";
import AllMealDetailedScreen from "../Screens/Home/AllMealDetailedScreen";



const Stack=createStackNavigator();
const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen options={{headerShown: false}}
                name="SplashScreen" component={SplashScreen} />
                <Stack.Screen options={{headerStyle: {
                    backgroundColor:"lightgray"}}}
                name="LoginScreen" component={LoginScreen} />
                <Stack.Screen options={{headerStyle: {
                backgroundColor:"lightgray"}}}
                name="CategoryScreen" component={CategoryScreen} /> 
                <Stack.Screen options={{headerStyle: {
                backgroundColor:"lightgray"}}}
                name="AllMealScreen" component={AllMealScreen} /> 
                <Stack.Screen options={{headerStyle: {
                backgroundColor:"lightgray"}}}
                name="AllMealDetailedScreen" component={AllMealDetailedScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};
export default Navigation;
