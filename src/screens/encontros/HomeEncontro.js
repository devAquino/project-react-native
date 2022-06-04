import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Button } from "react-native-web";
import { TitleHead } from "../header/TitleHead";
import styleButton from "../styleButton";

import { styles } from "./style";


function HomeEncontro({navigation}){
    
    return (
        <View >
            <View >
                <TitleHead title="Encontro"/>
            </View>
            <View style={styles.containerForm}>
                <TouchableOpacity 
                    style={styleButton.buttonCadastrar}
                    onPress={()=> navigation.navigate("CadastrarEncontro")}
                
                    >
                    <Text style={styleButton.text}>Cadastrar Encontro</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                    style={styleButton.buttonListar}
                    onPress={()=> navigation.navigate("ListarEncontro")}
                >
                    <Text style={styleButton.text}>Listar Encontro</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styleButton.buttonExcluir}
                    onPress={()=>navigation.navigate('ExcluirEncontro')}
                >
                    <Text style={styleButton.text}>Excluir Encontro</Text>
                </TouchableOpacity>

                <TouchableOpacity    
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{
                        fontSize:24,
                        alignItems: 'flex-end'
                    }}>Sair</Text>
                </TouchableOpacity>
        

            </View>
            
            
        </View>
    )
}

export {HomeEncontro};
