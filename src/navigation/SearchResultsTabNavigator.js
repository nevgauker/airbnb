import React, {useState, useEffect} from "react";
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMapScreen from '../screens/SearchResultsMap';
import { API  ,graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries';


import { useRoute } from "@react-navigation/native";


import { 
    View,
    Text
    } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {

    const [posts,setPosts] = useState([]);
    const route = useRoute();
    const { guests, viewport }  = route.params;

    useEffect(() => {
        console.log(viewport);
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts,{
                      filter: {
                        and: {
                            maxGuests: {
                                ge: guests
                            },
                            latitude: {
                                between: [viewport.southwest.lat,viewport.northeast.lat]
                            },
                            longitude: {
                                between: [viewport.southwest.lng,viewport.northeast.lng]
                            }
                        }
                      }
                    })
                )
                setPosts(postsResult.data.listPosts.items);
            }catch(e){
                console.log(e);
            }     
        };
        fetchPosts();
    },[]);


  return (
       <Tab.Navigator
       tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
        backgroundColor: '#f15454',
      }
      }}>
        <Tab.Screen name={"list"}>
            {() => (
                <SearchResultsScreen posts={posts}/>
            )}
        </Tab.Screen>
        <Tab.Screen name={"map"}>
            {() => (
                <SearchResultsMapScreen posts={posts}/>
            )}
        </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;