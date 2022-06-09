import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./style";
import React, {useState, useEffect} from 'react';
import api from "../../service/api";

function ListarEncontro(){
    
    const [encontro, setEncontro] = useState([]);

    useEffect(()=>{
        api.get('encontros').then(({data})=>{
            setEncontro(data)
        });

    },[])
    // const encontros = [
    //     {dat:"21/05/2022"},
    //     {dat:"25/05/2022"}

    // ]
    return (
        <View style={styles.containerForm}>
            <Text>Listar Encontros</Text>
            {/* <FlatList
                data={encontros}
                keyExtractor={item => item.}
                renderItem={({item}) =><View><Text>{item.dat}</Text></View>}
            /> */}
            {encontro.map(item =>(
                <Text>{item.name}</Text>
            ))}
        </View>
    )
}

export {ListarEncontro};