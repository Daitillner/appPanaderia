import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";

const formatDay = date => {
    const newDate = new Date(date);
    return newDate.toLocalDateString();
};

const OrderItem = () => {
    return (
        <View> 
            <View>
                <Text>Date</Text>
                <Text>Total</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Ionicons name="md-trash" color={"red"} size={22} />
                </TouchableOpacity>
            </View>
           
        </View>

    );

};

export default OrderItem; 