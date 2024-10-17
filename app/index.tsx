import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const index = () => {
    return(
        <View style={style.container}>
            <Text className='text-blue-700 font-bold'>index</Text>

            <Link href="/about" style={style.button}>go to about</Link>
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

export default index;