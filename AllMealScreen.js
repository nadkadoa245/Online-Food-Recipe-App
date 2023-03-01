import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import { ALLMEALS } from "../../Data/DummyData";


const AllMealScreen = (props) => {
    const CatId = props.route.params.catId;
    const MyMeals = ALLMEALS.filter((item) => item.catId === CatId);
    return(
    <View style={{flex:1, backgroundColor:"lightgray"}}>
        <View style={{marginHorizontal:10, marginTop:10}}>
                <FlatList
                data={MyMeals}
                keyExtractor={(item, index)=> index.toString()}
                renderItem={(itemData) => {
                    return(
                        <TouchableOpacity 
                        onPress={() => {
                            props.navigation.navigate("AllMealDetailedScreen",{
                                mealsdata: itemData.item,
                            });
                        }
                        }
                        style={{height:120, width:"96%", margin:10}}>
                            <ImageBackground
                            borderRadius={20} 
                            style={{height:"100%",width:"100%", justifyContent:"flex-end"}}
                            source={{uri: itemData.item.image}}>
                                <Text style={{fontSize:20, color:"white", fontWeight:"bold", textAlign:"center"}}>
                                    {itemData.item.name}
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    )
                }}
                />
            </View>
        </View>
    );
};
export default AllMealScreen;