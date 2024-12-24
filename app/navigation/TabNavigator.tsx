import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/HomeScreen";
import CategoryNavigator from "./CategoryNavigator";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ 
      tabBarStyle: {
        backgroundColor: "#3E4B47",
        borderTopWidth: 0
      },
      tabBarActiveTintColor: '#F5D8A6', // Creamy gold for active tab
          tabBarInactiveTintColor: '#A6A6A6',
     }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CategoriesNavigator"
        component={CategoryNavigator}
        options={{
          headerShown: false,
          title: "Categories",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="folder" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
