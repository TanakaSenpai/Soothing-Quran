import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoryScreen from "../screens/categories/Categories";
import ShowByCategory from "../screens/categories/ShowByCategory";

const CategoryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator  screenOptions={{
        headerStyle: {
          backgroundColor: '#6A8C85'
        },
        headerTintColor: '#fff', // White color for the header text and icons
        headerTitleStyle: {
          fontWeight: 'semibold',
        }
      }}>
      <Stack.Screen
        name="Categories"
        component={CategoryScreen}
      />
      <Stack.Screen
        name="ShowByCategory"
        component={ShowByCategory}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CategoryNavigator;
