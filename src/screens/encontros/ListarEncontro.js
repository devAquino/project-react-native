import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./style";
import React, {useState, useEffect} from 'react';
import api from "../../service/api";

function ListarEncontro(){
    
    const [encontros, setEncontro] = useState([]);

    useEffect(()=>{
        api.get('encontros').then(({data})=>{
            setEncontro(data)
        });

    },[])
   
    return (
        <View style={styles.containerForm}>
            
            <FlatList 
                
                data={encontros}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                <View style={styles.encontro}>
                    <Text style={styles.textEncontro}>{item.date}</Text>
                </View>}
            />
           
        </View>
    )
}

export {ListarEncontro};