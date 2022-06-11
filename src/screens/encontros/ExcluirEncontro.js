import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import { TitleHead } from "../header/TitleHead";


function ExcluirEncontro(){

    const [encontro, setEncontro] = useState("");

    const delEncontro = () =>{
        api.delete('encontro/delete/:id').then((res)=>{
            setEncontro(encontro)
        })
    }

    return (
        <View >
            <View >
                <TitleHead title="Excluir Encontro"/>
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
                    onPress={delEncontro}>
                    <Text style={styles.textButton}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export {ExcluirEncontro};