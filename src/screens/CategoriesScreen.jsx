import {  FlatList, StyleSheet, View } from "react-native";
import { categories }  from "../data/categories";

import React from 'react';
import CategoriesItem from "../components/CategoriesItem";

 
const CategoriesScreen = ({ navigation }) => {
    const handleSelectedCategory = (item) => {
       navigation.navigate("Products", {
        categoryId: item.id,
        name: item.title, 
       });
    };

    const renderCategoriesItem = ({ item }) => (
        <View>
            <CategoriesItem item={item} onSelected={handleSelectedCategory} />
        </View> 
    );

    return (
        <View>
        <FlatList 
        data={categories} 
        renderItem={renderCategoriesItem} 
        keyExtractor={item=> item.id} 
        />
        </View>
    );

  };

export default CategoriesScreen;

const styles = StyleSheet.create({});