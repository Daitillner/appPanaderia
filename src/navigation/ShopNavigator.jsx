import { StyleSheet, Text, View } from "react-native"
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoriesScreen from "../screens/CategoriesScreen"
import BreadDetailsScreen from "../screens/BreadDetailsScreen"
import CategoryBreadScreen from "../screens/CategoryBreadScreen"
 
const ShopNavigator= () =>{

    const Stack = createNativeStackNavigator()

return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Home' component={CategoriesScreen} />
    <Stack.Screen name='Bread' component={CategoryBreadScreen} />
    <Stack.Screen name='Detail' component={BreadDetailsScreen} />
    </Stack.Navigator>
   </NavigationContainer>
)

}

export default ShopNavigator

const styles = StyleSheet.create({})