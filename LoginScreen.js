import React,{useState} from "react";
import {View, Text, Image, TextInput} from "react-native";
import MyAuthButton from "../../Component/MyAuthButton";
import MyInput from "../../Component/MyInput";

const LoginScreen = (props) => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const LoginHandler = () => {
        // if (email==="") {
        //     alert("Please enter your email first");
        // }else if (password==="") { 
        //     alert("Please enter your password first");
        // }else if(email==="ahsanghauri2001@gmail.com" && password==="messi123"){
        //     props.navigation.navigate("CategoryScreen");
        // }
        // else{
        //     alert("Please enter your valid email or password");
        // }
        props.navigation.navigate("CategoryScreen");
    };
    return(
        <View style={{flex:1, backgroundColor:"white"}}>
            <View style={{height:"35%",width:"100%",backgroundColor:"lightgray",alignItems:"center",justifyContent:"center"}}>
                <Image
                style={{height:190,width:168}}
                source={require("../../assets/Images/ahsan.png")}
                />
                <Text style={{color:"orange", fontSize:22, fontWeight:"bold"}}>FOOD RECEPIE APP</Text>
            </View>
            <View style={{height:"75%",width:"100%",backgroundColor:'lightgray', paddingHorizontal:10}}>
                <MyInput
                onChangeText={(text) => {
                    setEmail(text);
                }}
                Don="Email Address" 
                placeholder="Please enter your email address" />
                <MyInput
                secureTextEntry
                onChangeText={(text)=>{
                    setPassword(text);
                }}
                Don="Password" placeholder="Please enter your password"/>
                <MyAuthButton 
                onPress={LoginHandler}
                Messi="LOGIN"/>
                 <MyAuthButton 
                onPress={LoginHandler}
                Messi="SIGN UP"/>
                

            </View>
        </View>
    );
};
export default LoginScreen;