import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from'react-native';

import { Category } from '../datas/categories';

const Card = ({item, onPress}: {item: Category; onPress: (category: string) => void}) => {
    return (
        <TouchableOpacity
        onPress={() => onPress(item.name)}
          style={[
            styles.categoryContainer,
            { backgroundColor: item.color }
          ]}
        >
          <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    categoryContainer: {
      flex: 1,
      margin: 10,
      padding: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 150
    },
    categoryText: {
      color: '#2E2E2E',
      fontSize: 17,
      fontWeight: 'bold'
    },
  });

export default Card;