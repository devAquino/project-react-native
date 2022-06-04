import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { TitleHead } from "../header/TitleHead";
import { styles } from "./style";

function CadastrarAssunto(){
   
    return (
        <View >
            <View >
                <TitleHead title="Cadastrar Assunto"/>
            </View>
            <View style={styles.containerForm}>
                <TextInput 
                    style={styles.inputName}
                    placeholder={"Assunto"}/>

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


export {CadastrarAssunto};