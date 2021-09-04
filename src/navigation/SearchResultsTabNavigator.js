import React, {useState, useEffect} from "react";
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMapScreen from '../screens/SearchResultsMap';



import { useRoute } from "@react-navigation/native";
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import { 
    View,
    Text
    } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  return (
       <Tab.Navigator
       tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
        backgroundColor: '#f15454',
      }
      }}>
        <Tab.Screen name={"list"} component={SearchResultsScreen}/>
        <Tab.Screen name={"map"} component={SearchResultsMapScreen}/>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;