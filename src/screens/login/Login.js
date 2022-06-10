import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Alert } from "react-native";

import { stylesLogin } from "./style";

import api from '../../service/api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitHandler() {
        console.log({ email, password });

        api.post('/students/login', { email, password })
            .then(response => {
                console.log(response.data);

                let { token } = response.data;

                // 1. Armazenar a variável 'token'.
                // 2. Levar para a próxima página.

            }).catch(error => {
                console.log({ error });

                Alert.alert('Ops...', 'E-mail ou senha inválidos.', [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
            });
    };

    return (
        <View style={stylesLogin.container}>
            <Text style={stylesLogin.titleLogin}>Login</Text>
            <TextInput 
                style={stylesLogin.inputName}
                placeholder={'usuário'}
                value={email}
                onChangeText={setEmail}
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                autoComplete={'email'}
            />
            <TextInput 
                style={stylesLogin.inputSenha}
                placeholder={'senha'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity 
                style={stylesLogin.buttonLogin}
                onPress={submitHandler}>
                <Text style={stylesLogin.textLogin}>Entrar</Text>
            </TouchableOpacity> 
        </View>
    )
};

export { Login };