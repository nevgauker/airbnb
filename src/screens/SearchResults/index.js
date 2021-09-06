import React from 'react';
import { 
    View,
    FlatList
    } from 'react-native';

import { API  ,graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';
import styles from './styles';

const SearchResultsScreen = (props) => {

    const { posts } = props;   
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item}/>} 
            />
        </View>
    )
}

export default SearchResultsScreen;
