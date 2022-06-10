import React, {useState, useEffect}from "react";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity, View, Text } from "react-native";
import { TitleHead } from "../header/TitleHead";
import { styles } from "./style";
import api from "../../service/api";

//import DatePicker from "react-datepicker";
import DatePicker from 'react-native-modern-datepicker';

//import "react-datepicker/dist/react-datepicker.css";


function CadastrarEncontro(){
    
    const [encontro, setEncontro] = useState('');

    // useEffect(()=>{
    //     api.get('encontro/cadastrar').then(({data})=>{
    //         setEncontro(data)
    //     });

    // },[]);
    // const BasicUsage = () => {
    //     const [selectedDate, setSelectedDate] = useState('');
      
    // };

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
                    }}>
                    <Text style={styles.textButton}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export {CadastrarEncontro};