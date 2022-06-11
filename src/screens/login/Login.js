
import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity} from "react-native";

import {stylesLogin} from "./style";
import { CommonActions } from '@react-navigation/native';

function Login({navigation}){

    const fazerLogin = () =>{

        navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'Login' },
                {
                  name: 'NavigationTab',
                  //params: { user: 'jane' },
                },
              ],
            })
          );
    }

    return (
        <View style={stylesLogin.container}>
            <Text style={stylesLogin.titleLogin}>Login</Text>

            <TextInput 
                style={stylesLogin.inputName}
                placeholder={'usuário'}
            />
            <TextInput 
                style={stylesLogin.inputSenha}
                placeholder={'senha'}
            />
            <TouchableOpacity 
                style={stylesLogin.buttonLogin}
                onPress={fazerLogin}>
                <Text
                style={stylesLogin.textLogin}
                > Entrar </Text>
                
            </TouchableOpacity>
            
        </View>
    )
}



export {Login};