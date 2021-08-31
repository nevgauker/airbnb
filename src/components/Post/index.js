import React from 'react';
import { 
    View,
    Text,
    Image,
    Pressable
    } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const Post = (props) => {
return (
    <View style={styles.container}>
       <Image source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"}} style={styles.image}/>
            
        <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
        <Text style={styles.description} numberOfLines={2}>Bright room in the heart of the city</Text>
        <Text style={styles.prices}>
            <Text style={styles.oldPrice}>$36</Text>
            <Text style={styles.price}> $30</Text>
            / night
        </Text>
                <Text style={styles.totalPrice}>$234 total</Text>
    </View>
)
}

export default Post;

