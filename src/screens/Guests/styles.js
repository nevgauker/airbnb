import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        marginHorizontal:20,
        borderBottomWidth:1,
        borderColor:'lightgrey'
    },
    title: {
        fontWeight:'bold'
    },
    subtitle: {
        color:'#8d8d8d'
    },
    button: {
        width:30,
        height:30,
        borderRadius:15,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#676767'
    }
});

export default styles;
