import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";


const SplashScreen = (props) => {
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.replace("LoginScreen");
        }, 3000);
    }, []);
    return(
    <View style={{flex:1, justifyContent:"flex-end", alignItems:"center", backgroundColor:"lightgray"}}>
        <Text style={{fontSize:41, color:"orange", fontWeight:"bold"}}>FOOD RECIPE APP</Text>
        <Image
        source={require("../assets/Images/ahsan.png")}
        style={{height:290, width:280, marginTop:70}}
        />
    </View>
    );
};
export default SplashScreen;