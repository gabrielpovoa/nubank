import { StyleSheet, Text, View } from "react-native"

const about = () => {
    return(
        <View style={style.container}>
            <Text style={style.heading}>About us🔱</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    heading:{
        fontSize:22,
        color:'blue',
        marginBottom:20,
        fontWeight:'700',
        textTransform:"uppercase",
        textDecorationLine:'underline',
    },
    button:{
        backgroundColor:'gray',
        padding:10,
        textTransform:"capitalize",
        borderRadius:15,
    }
})

export default about;