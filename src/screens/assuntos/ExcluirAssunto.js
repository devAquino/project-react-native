import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity, View, Text } from "react-native";

import { TitleHead } from "../header/TitleHead";
import { styles } from "./style";

function ExcluirAssunto(){
    return (
        <View >
            <View >
                <TitleHead title="Excluir Assunto"/>
            </View>
            <View style={styles.containerForm}>
                <TextInput 
                    style={styles.inputName}
                    placeholder={"Encontro"}/>

                <TouchableOpacity 
                    style={{
                        backgroundColor:'#C60000',
                        width: 300,
                        height: 45,
                        alignItems:'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                    }}
                    onPress={()=>navigation.navigate('ExcluirAssunto')}>
                    <Text style={styles.textButton}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export {ExcluirAssunto};