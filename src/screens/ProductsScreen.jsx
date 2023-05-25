import { Button, StyleSheet, Text, View } from "react-native";
import React from 'react';
 
const ProductsScreen = ({navigation}) =>{
return (
    <View>
        <Text>Category Bread Screen</Text>
        <Button title="Navegar a Detail" onPress={()=> navigation.navigate("Detail")}/>
    </View>
);

};

export default ProductsScreen;

const styles = StyleSheet.create({});