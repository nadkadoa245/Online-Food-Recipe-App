import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import MyInput from "../../Component/MyInput";
import MyAuthButton from "../../Component/MyAuthButton";


const SignUpScreen=()=>{
    const LoginHandler=()=>{
        alert("Yahoo Its Press");
    }
    return(
        <View style={{flex:1, backgroundColor:"white"}}>
            <View style={{height:"35%",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"lightgray"}}>
                <Image 
                source={require("../../assets/Images/gif.png")}
                style={{height:130,width:140}}
                />
                <Text style={{fontWeight:"bold",color:"black"}}>CHAT APPLICATION</Text>
            </View>
            <View style={{height:"75%",width:"100%",backgroundColor:"lightgray", paddingHorizontal:20}}>
                <MyInput Don="UserName"
                placeholder="Please enter your email address"
                />
                <View style={{marginTop:10}}>
                <MyInput Don="Email Address"
                placeholder="Please enter your Password"
                />
                <View style={{marginTop:10}}>
                <MyInput Don="Password"
                placeholder="Please enter your Password"
                />
                <MyAuthButton onPress={LoginHandler}
                />
                <Text style={{textAlign:"center",fontWeight:"bold"}}>Do you have an Account? LOGIN</Text>
                </View>
                </View>
            </View>
        </View>
    );
};
export default SignUpScreen;