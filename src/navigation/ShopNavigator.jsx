import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProductsScreen from "../screens/ProductsScreen";
import { COLORS } from "../constants/colors";
 
const ShopNavigator= () => {

    const Stack = createNativeStackNavigator();

return (
   <NavigationContainer>
    <Stack.Navigator
        initialRouteName="Home" 
        screenOptions={{
        headerStyle: {
        backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.quaternary,
        headerTitleStyle: {
        fontWeight: "bold",
        },
    }}
  >

    <Stack.Screen
     name='Home'
     component={CategoriesScreen} 
     options={{
     title:"Categories",
    }}
    />
    <Stack.Screen name='Products' component={ProductsScreen} />
    <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
   </NavigationContainer>
 );

};

export default ShopNavigator;

const styles = StyleSheet.create({});