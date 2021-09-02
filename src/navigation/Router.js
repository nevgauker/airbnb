import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationsSearchScreen from "../screens/DestinationsSearch";
import GuestsScreen from "../screens/Guests";

import HomeTabNavigator from "./HomeTabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();


const Router = (props) => {
      const Stack = createStackNavigator();

return (
      <NavigationContainer>
            <Stack.Navigator>
                  <Stack.Screen
                              name={"Home"}
                              component={HomeTabNavigator}
                              options={{
                                    headerShown:false
                              }}
                        />
                  <Stack.Screen
                        name={"Destination Search"}
                        component={DestinationsSearchScreen}
                        options={{
                              title:'Search your destination'
                        }}
                  />
                  <Stack.Screen
                        name={"Guests"}
                        component={GuestsScreen}
                        options={{
                              title:'How many people?'
                        }}
                  />
            </Stack.Navigator>
      </NavigationContainer>

);
};

export default Router;