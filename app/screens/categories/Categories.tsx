import React from 'react';
import { FlatList } from 'react-native';

import categories from '../../datas/categories';
import Card from '../../components/Card';

const CategoryScreen = () => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.name}
      numColumns={2} // Two items per row
      renderItem={({ item }) => (
        <Card item={item} onPress={() => console.log("no")} />
      )}
    />
  );
};



export default CategoryScreen;
