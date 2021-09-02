/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home';

import SearchResultsScreen from './src/screens/SearchResults';

import DestinationsSearchScreen from './src/screens/DestinationsSearch';
import GuestsScreen from './src/screens/Guests';


import Router from './src/navigation/Router';



const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content"/>
        <Router/>
       
    
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
