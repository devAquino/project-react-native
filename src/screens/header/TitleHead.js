import React from "react";
import { View, Text } from "react-native";
import stylesHead from './style';


function TitleHead({title}){
    return (
        <View style={stylesHead.container}>
            <Text style={stylesHead.textTitle}>{title} </Text>
        </View>
    )
}

export {TitleHead};