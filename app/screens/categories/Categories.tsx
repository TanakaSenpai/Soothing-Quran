import React from 'react';
import { FlatList } from 'react-native';

import categories from '../../datas/categories';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

const CategoryScreen = () => {
    type categoryScreenNavProp = StackNavigationProp<RootStackParamList, "CategoryScreen">
    const navigation = useNavigation<categoryScreenNavProp>();
  return (
    <FlatList
    style={{ backgroundColor: "#faf4ed" }}
      data={categories}
      keyExtractor={(item) => item.name}
      numColumns={2} // Two items per row
      renderItem={({ item }) => (
        <Card item={item} onPress={(category) => navigation.navigate("ShowByCategory", {category})} />
      )}
    />
  );
};



export default CategoryScreen;
