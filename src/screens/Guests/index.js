import React,{useState} from 'react';
import { 
    View,
    Text,
    Pressable
    } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const GuestsScreen = (props) => {
const [adults,setAdults] = useState(0);
const [children,setChildren] = useState(0);
const [infants,setInfants] = useState(0);

const navigation = useNavigation();


return (
    <View style={{justifyContent:'space-between', height:'100%'}}>
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>Adults</Text>
                    <Text style={styles.subtitle}>Ages 13 or above</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Pressable
                    onPress={() => {
                        if (adults>0){
                            setAdults(adults-1);
                        }
                    }}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>-</Text>
                </Pressable>
                <Text style={{marginHorizontal:20, fontSize:16}}>{adults}</Text>
                <Pressable
                    onPress={() => setAdults(adults+1)}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>+</Text>
                </Pressable>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>Children</Text>
                    <Text style={styles.subtitle}>Ages 2-12</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Pressable
                    onPress={() => {
                        if (children>0){
                            setChildren(children-1);
                        }
                    }}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>-</Text>
                </Pressable>
                <Text style={{marginHorizontal:20, fontSize:16}}>{children}</Text>
                <Pressable
                    onPress={() => setChildren(children+1)}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>+</Text>
                </Pressable>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>Infants</Text>
                    <Text style={styles.subtitle}>Under 2</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Pressable
                    onPress={() => {
                        if (infants>0){
                            setInfants(infants-1);
                        }
                    }}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>-</Text>
                </Pressable>
                <Text style={{marginHorizontal:20, fontSize:16}}>{infants}</Text>
                <Pressable
                    onPress={() => setInfants(infants+1)}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>+</Text>
                </Pressable>
                </View>
            </View>
        </View>
        <Pressable
        onPress={() => navigation.navigate('Home',{
                screen: 'Explore',
                params: {
                    screen:'SearchResults'
                }
                })
        }  
        style={{
        marginBottom:20,
        backgroundColor:'#f15454',
        alignItems:'center',
        justifyContent:'center',
            height:50,
        marginHorizontal:20,
        borderRadius:10
        }}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Search</Text>
        </Pressable>
        

    </View>
)
}

export default GuestsScreen;
