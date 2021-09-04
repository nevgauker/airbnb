import React, {useState, useEffect, useRef} from "react";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import places from '../../../assets/data/feed';
import { 
    View,
    FlatList,
    useWindowDimensions
    } from 'react-native';

import styles from './styles';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from "../../components/PostCarouselItem";


const SearchResultsMapScreen = (props) => {
    // const { posts } = props;
    const width = useWindowDimensions().width;
    const flatlist = useRef();
    const map = useRef();
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const viewConfig = useRef({itemVisiblePercentThreshold: 70});
    const onViewChanged = useRef(({viewableItems}) => {
        if (viewableItems.length > 0) {
        const selectedPlace = viewableItems[0].item;
        setSelectedPlaceId(selectedPlace.id)
        }
    })
    useEffect(() => {
        if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});

    const selectedPlace = places[index];
     const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    map.current.animateToRegion(region);

    }, [selectedPlaceId]);

return (
    <View style={{height:'100%', width:'100%'}}>
          <MapView
            ref={map}
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
        <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
    );
};

export default SearchResultsMapScreen;
