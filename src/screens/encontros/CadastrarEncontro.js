import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity, View, Text } from "react-native";
import { TitleHead } from "../header/TitleHead";
import { styles } from "./style";

function CadastrarEncontro(){
    
    return (
        <View >
            <View >
                <TitleHead title="Cadastrar Encontro"/>
            </View>
            <View style={styles.containerForm}>
                <TextInput 
                    style={styles.inputName}
                    placeholder={"Encontro"}/>

                <TouchableOpacity 
                    style={{
                        backgroundColor:'#058B2E',
                        width: 300,
                        height: 45,
                        alignItems:'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                    }}>
                    <Text style={styles.textButton}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export {CadastrarEncontro};