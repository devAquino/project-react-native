import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerForm: {
        width:'100%',
        height:'100%',
        borderTopLeftRadius: 0,
        alignItems: 'center',
        marginTop: 50, 
    },
    inputName:{
        width: 300,
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingHorizontal: 10,
        marginTop: 60, 
        marginBottom:20,
    },
    excluirButton:{
        width: 300,
        height: 45,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#C60000 ',

    },
    textButton:{
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    assunto:{
        backgroundColor: "#AE3BF8",
        marginTop: 15,
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textAssunto:{
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    }
   
})

export {styles}