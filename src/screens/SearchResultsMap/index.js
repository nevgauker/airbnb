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
import { API  ,graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

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

     const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts)
                )
                setPosts(postsResult.data.listPosts.items);
            }catch(e){
                console.log(e);
            }     
        };
        fetchPosts();
    },[]);

    useEffect(() => {
        if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = posts.findIndex(post => post.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});

    const selectedPlace = posts[index];
     const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
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
            {posts.map(post => <CustomMarker
                                    price={post.newPrice}
                                    coordinate={{latitude: post.latitude, longitude: post.longitude }}
                                    isSelected={post.id === selectedPlaceId}
                                    onPress={() => setSelectedPlaceId(post.id)}
                                   />)
        }
        </MapView>
        <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={posts}
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
