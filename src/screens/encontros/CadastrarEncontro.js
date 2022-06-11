import React, {useState, useEffect}from "react";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity, View, Text } from "react-native";
import { TitleHead } from "../header/TitleHead";
import { styles } from "./style";
import api from "../../service/api";


function CadastrarEncontro(){
    
    const [encontro, setEncontro] = useState('');

    const postEncontro = (e)=>{
        api.post('assunto/cadastrar',{
            encontro,
            
        }).then(res => renderOutput(res))
    }

   
    return (
        <View >
            <View >
                <TitleHead title="Cadastrar Encontro"/>
            </View>
            <View style={styles.containerForm}>
                {/* <DatePicker
                    onSelectedChange={date => setEncontro(date)}
                /> */}
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
                    }}
                    onPress={postEncontro}>
                    <Text style={styles.textButton}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export {CadastrarEncontro};