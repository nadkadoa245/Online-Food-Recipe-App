import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const MyAuthButton = (props) => {
    return(
        <TouchableOpacity
        onPress={props.onPress}
         style={{height:60, width:"88%",backgroundColor:"gray", borderRadius:28, borderColor:"Lightgray", borderWidth:0.5, justifyContent:"center",alignItems:"center", marginTop:50, marginHorizontal:20}}>
            <Text style={{fontSize:22, fontWeight:"bold", color:"white"}}>{props.Messi}</Text>
        </TouchableOpacity>
    );
};
export default MyAuthButton;