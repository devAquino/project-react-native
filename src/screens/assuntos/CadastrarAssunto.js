import React, {useState} from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import api from "../../service/api";
import { TitleHead } from "../header/TitleHead";
import { styles } from "./style";

function CadastrarAssunto(){

    const [assunto, setAssunto] = useState('');
    const [dificuldade, setDificuldade] = useState('');
    const [tempo, setTempo] = useState('');

    const postAssunto = (e)=>{
        api.post('assunto/cadastrar',{
            assunto,
            dificuldade,
            tempo
        }).then(res => renderOutput(res))
    }

   
    return (
        <View >
            <View >
                <TitleHead title="Cadastrar Assunto"/>
            </View>
            <View style={styles.containerForm}>
                <TextInput 
                    style={styles.inputName}
                    placeholder={"Assunto"}/>
                <TextInput 
                    style={styles.inputName}
                    placeholder={"Dificuldade"}/>
                <TextInput 
                    style={styles.inputName}
                    placeholder={"Tempo"}/>

                <TouchableOpacity 
                    style={{
                        backgroundColor:'#058B2E',
                        width: 300,
                        height: 45,
                        alignItems:'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                    }}
                    onPress={postAssunto}>
                    <Text style={styles.textButton}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export {CadastrarAssunto};