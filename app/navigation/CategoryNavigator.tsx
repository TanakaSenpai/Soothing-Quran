import React from 'react';
import { View, StyleSheet } from'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import CategoryScreen from '../screens/categories/Categories';
import ShowByCategory from '../screens/categories/ShowByCategory';

const CategoryNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoryScreen} />
            <Stack.Screen name ="ShowByCategory" component={ShowByCategory} />
        </Stack.Navigator>
    );
};

export default CategoryNavigator;