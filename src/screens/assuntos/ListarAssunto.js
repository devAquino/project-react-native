import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import React, {useState, useEffect} from 'react';
import api from "../../service/api";
import { styles } from "./style";

function ListarAssunto(){
    
    const [assuntos, setAssunto] = useState([]);

    useEffect(()=>{
        api.get('assuntos').then(({data})=>{
            setAssunto(data)
        });

    },[])
   
    return (
        <View style={styles.containerForm}>
            
            <FlatList 
                
                data={assuntos}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                <View style={styles.assunto}>
                    <Text style={styles.textAssunto}>{item.name}</Text>
                </View>}
            />
           
        </View>
    )
}

export {ListarAssunto};