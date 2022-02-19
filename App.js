// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuProvider } from "react-native-popup-menu";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ClientHomeScreen from "./screens/client/ClientHomeScreen";
import ClientGeneralSettingsScreen from "./screens/client/ClientGeneralSettingsScreen";
import ClientSkipSettings from "./screens/client/ClientSkipSettings";
import Podcast from "./screens/podcast/Podcast";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Podcast">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="ClientHome"
            component={ClientHomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ClientGeneralSettings"
            component={ClientGeneralSettingsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ClientSkipSettings"
            component={ClientSkipSettings}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Podcast" component={Podcast} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
