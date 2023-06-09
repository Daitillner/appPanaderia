import { StyleSheet, View, Text } from "react-native";
import CartNavigator from "./CartNavigator";
import ShopNavigator from "./ShopNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator 
           screenOptions={{
             headerShown: false, 
             tabBarShowLabel: false,
             tabBarStyle: styles.tabBar,
          }}
        
        >
        <BottomTabs.Screen name="ShopNavigator" component={ShopNavigator} 
          options={{
            tabBarIcon: () => (
                <View>
                    <Ionicons name="home" size={24} color="black" />
                    <Text>Shop</Text>
                </View>
            ),
          }}
        />
        <BottomTabs.Screen 
         name="Cart" 
          component={CartNavigator}
          options={{
            tabBarIcon: () => (
                <View>
                    <Ionicons name="cart" size={24} color="black" />
                    <Text>Cart</Text>
                </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="OrdersTab" 
          component={odersNavigator}
          options={{
            tabBarIcon: () => (
                <View>
                    <Ionicons name="list" size={24} color="black" />
                    <Text>Ordenes</Text>
                </View>
            ),
          }}
        />
        </BottomTabs.Navigator>
        

    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#fff",
        paddingTop: 15,
        borderBottomEndRadius: 30,
        borderTopStartRadius: 30,
        height: 85,
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,

    },
});