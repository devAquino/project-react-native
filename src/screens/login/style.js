import { StyleSheet } from "react-native"

const stylesLogin = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
       
        alignItems: 'center',
        borderTopRightRadius:300,
        borderBottomLeftRadius: 350,
        borderBottomEndRadius:22,
        marginTop:100,
        marginBottom: 40,
        backgroundColor: "#AE3BF8",
        
    },
    inputName:{
        width: 300,
        height: 45,
        backgroundColor: '#f1f3f6',
        borderRadius: 6,
        paddingHorizontal: 10,
        marginTop: 60, 
        marginBottom:20,
    },
    inputSenha:{
        width: 300,
        height: 45,
        backgroundColor: '#f1f3f6',
        borderRadius: 6,
        paddingHorizontal: 10,
    },
    buttonLogin:{
        width: 300,
        height: 45,
        marginTop: 30,
        backgroundColor: '#1DE35C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    titleLogin:{
        marginTop: 60,
        color: '#fff',
        fontSize: 34,
        fontWeight: 'bold',
    },

    textLogin:{

        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',

    }
})

export {stylesLogin}