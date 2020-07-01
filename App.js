import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategorySelect from "./CategorySelect";
import Welcome from "./Welcome";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CategorySelect" component={CategorySelect} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
