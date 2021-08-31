import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container:{
        margin:20,
        flexDirection:'column',
    },
    image: {
        width:'100%',
        aspectRatio:  3/2,
        resizeMode:'cover',
        justifyContent:'center',
         borderRadius:10,
    },
    bedrooms:{
        marginVertical:10,
        fontSize:14,
        color:'#5b5b5b',
    },
    description:{
        fontSize:18,
        lineHeight:26,
    },
    prices: {
        fontSize:18,
    
    },
    oldPrice: {
        color:'#5b5b5b',
        textDecorationLine:'line-through',
    },
    price:{
        fontWeight:'bold',
    },
    totalPrice: { 
        color:'#5b5b5b',
        textDecorationLine:'underline',
    },
}); 

export default styles;