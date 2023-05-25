import { View, Text } from "react-native";

import styles from './styles';
import React from "react";

const CategoriesItem = ({item, onSelected}) => {
    return (
        <View style={styles.categoriesItem}>
            <TouchableOpacity
             style={styles.container} 
             onPress={() => onSelected(item)} 
            >
              <View style={styles.textContainer}>
                <Text>{item.title}</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.img }} />
              </View>
            
            </TouchableOpacity>
        </View>
    );
};

export default CategoriesItem;