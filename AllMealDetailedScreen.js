import React from "react";
import {View, Text, ScrollView, FlatList, Dimensions, Image } from "react-native";

const AllMealDetailedScreen = (props) => {
    const MealsData = props.route.params.mealsdata;
    return(
        <ScrollView style={{flex:1, backgroundColor:"lightgray"}}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            data={MealsData.imagesUrl}
            renderItem={(itemData) => {
                return(
                    <View style={{height:150, width:Dimensions.get("screen").width, marginHorizontal:10, marginTop:10}}>
                        <Image
                        borderRadius={20}
                        source={{uri: itemData.item.image}}
                        style={{flex:1}}
                        />

                    </View>
                )
            }}
            />
            <Text style={{color:"red", fontWeight:"bold", fontSize:18, paddingHorizontal:10}}>{`Time Duration`}</Text>
            <Text style={{marginVertical:9, color:"black", fontWeight:"bold", paddingHorizontal:10}}>{MealsData.timeDuration}</Text>
            <View style={{width:"100%", paddingHorizontal:10}}>
                <Text style={{color:"red", fontWeight:"bold", fontSize:18}}>{`Steps To Make ${MealsData?.name}`}</Text>
                <View>
                    {
                        MealsData.steps.map((item) => {
                            return(
                                <View
                                 key={item.id}
                                 style={{width:"100%", paddingHorizontal:10}}>
                                    <Text style={{color:"red", fontWeight:"bold", fontSize:17, marginTop:5}}>{`* ${item.stepCount}`}</Text>
                                    <Text style={{marginVertical:5, color:"red", fontWeight:"bold"}}>{`.. ${item?.stepNeed}`}</Text>
                                    <Text>{item.stepDescription}</Text>                 

                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
       
    );
};
export default AllMealDetailedScreen;
