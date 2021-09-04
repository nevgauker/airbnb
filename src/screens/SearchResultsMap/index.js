import React, {useState, useEffect, useRef} from "react";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import places from '../../../assets/data/feed';
import { 
    View,
    } from 'react-native';

import styles from './styles';
import CustomMarker from '../../components/CustomMarker';

const SearchResultsMapScreen = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

return (
    <View style={{height:'100%', width:'100%'}}>
          <MapView
            style={{height:'100%', width:'100%'}}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
            latitude: 28.327982,
            longitude: -16.5124847,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }}>
            {places.map(place => <CustomMarker
                                    price={place.newPrice}
                                    coordinate={place.coordinate}
                                    isSelected={place.id === selectedPlaceId}
                                    onPress={() => setSelectedPlaceId(place.id)}
                                   />)
        }
        </MapView>
    </View>
    );
};

export default SearchResultsMapScreen;
