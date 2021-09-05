import React from 'react';
import { 
    View,
    Text,
    Image,
    Pressable
    } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Post = (props) => {

    const post = props.post;
    const navigation = useNavigation();


    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id});
    }

return (
    <Pressable onPress={goToPostPage} style={styles.container}>
       <Image source={{uri: post.image}} style={styles.image}/>
            
        <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
        <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>
        <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post.oldPrice}</Text>
            <Text style={styles.price}> ${post.newPrice}</Text>
            / night
        </Text>
                <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </Pressable>
)
}

export default Post;

