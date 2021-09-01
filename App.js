/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home';

import SearchResultsScreen from './src/screens/SearchResults';

import DestinationsSearchScreen from './src/screens/DestinationsSearch';

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView>
        {/* <HomeScreen/> */}
        {/* <SearchResultsScreen/> */}
        <DestinationsSearchScreen/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
