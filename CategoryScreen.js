import React from "react";
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from "react-native";
import { CATEGORY } from "../../Data/DummyData";

const CategoryScreen = (props) => {
    return(
        <View style={{flex:1, backgroundColor:"lightgray"}}>
            <View style={{marginHorizontal:10, marginTop:10}}>
                <FlatList
                data={CATEGORY}
                keyExtractor={(item, index)=> index.toString()}
                numColumns={2}
                renderItem={(itemData) => {
                    return(
                        <TouchableOpacity 
                        onPress={()=>{
                            props.navigation.navigate("AllMealScreen",{
                                catId: itemData.item.id,
                            });
                        }}
                        style={{height:150, width:"45%", margin:10}}>
                            <ImageBackground
                            borderRadius={20} 
                            style={{height:"100%",width:"100%", justifyContent:"flex-end"}}
                            source={{uri: itemData.item.image}}>
                                <View style={{flex:1, backgroundColor:"rgba(83, 53, 69, 0.12)", justifyContent:"flex-end", borderRadius:20}}>
                                <Text style={{fontSize:20, color:"white", fontWeight:"bold", textAlign:"center"}}>
                                    {itemData.item.name}
                                </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )
                }}
                />
            </View>
        </View>
    );
};
export default CategoryScreen;