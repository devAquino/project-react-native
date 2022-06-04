import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { TitleHead } from "../header/TitleHead";
import styleButton from "../styleButton";
import { CommonActions } from '@react-navigation/native';
import { styles } from "./style";


function HomeAssunto({navigation}){
    
    const cadAssunto = () =>{      
        navigation.dispatch(
            CommonActions.reset({
              index: 3,
              routes: [
                { name: 'HomeAssunto' },
                {
                  name: 'CadastrarAssunto',
                  //params: { user: 'jane' },
                },
              ],
            })
          );
    }
    return (
        <View >
            <View >
                <TitleHead title="Assunto"/>
            </View>
            <View style={styles.containerForm}>
                <TouchableOpacity 
                    style={styleButton.buttonCadastrar}
                    onPress={() => navigation.navigate("CadastrarAssunto")}>
                    <Text style={styleButton.text}>Cadastrar Assunto</Text>
                        
                </TouchableOpacity>
            
                <TouchableOpacity 
                    style={styleButton.buttonListar}
                    onPress={() => navigation.navigate("ListarAssunto")}
                >
                    <Text style={styleButton.text}>Listar Assuntos</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styleButton.buttonExcluir}
                    onPress={()=>navigation.navigate('ExcluirAssunto')}
                >
                    <Text style={styleButton.text}>Excluir Assunto</Text>
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

export {HomeAssunto};
