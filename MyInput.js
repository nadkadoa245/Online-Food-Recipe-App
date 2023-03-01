import React from "react";
import {View, Text, TextInput} from "react-native";
const MyInput = (props) => {
    return(
        <View>
            <Text style={{fontSize:18, fontWeight:"bold"}}>{props.Don}</Text>
            <View style={{height:60, width:"100%",backgroundColor:"gray", borderRadius:20, borderWidth:0.5, borderColor:"lightgray", marginTop:10, paddingHorizontal:10}}>
            <TextInput
            onChangeText={props.onChangeText} 
            secureTextEntry={props.secureTextEntry}
            style={{height:"100%",width:"100%"}}
            placeholder={props.placeholder}/>
            </View>
            </View>

    );
};
export default MyInput;