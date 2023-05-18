import { Button, StyleSheet, Text, View } from "react-native"
import React from 'react'
 
const CategoryBreadScreen = ({navigation}) =>{
return (
    <View>
        <Text>Category Bread Screen</Text>
        <Button title="Navegar a Detail" onPress={()=> navigation.navigate("Detail")}/>
    </View>
)

}

export default CategoryBreadScreen

const styles = StyleSheet.create({})