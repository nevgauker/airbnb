import React from 'react';
import { 
    View,
    } from 'react-native';

import styles from './styles';

//import searchResults from '../../../assets/data/search';
import { useNavigation } from '@react-navigation/native';

// import Entypo from 'react-native-vector-icons/Entypo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import SuggestionRow from './SuggestionRow';


    const DestinationsSearchScreen = (props) => {
    const navigation = useNavigation();


return (
    <View style={styles.container}>
        <GooglePlacesAutocomplete
            placeholder='Where are you going?'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(details.geometry.viewport);

                navigation.navigate('Guests',{ viewport: details.geometry.viewport });
            }}
            fetchDetails
            styles={{
                textInput:styles.textInput
            }}
            query={{
                key: 'AIzaSyB69l2pxn0rhXDVkCR1eF2VroiCHnsC7nE',
                language: 'en',
                types:'(cities)'
            }}
            suppressDefaultStyles
            renderRow={(item) => <SuggestionRow item={item}/>}
            />
    </View>
)
}

export default DestinationsSearchScreen;
