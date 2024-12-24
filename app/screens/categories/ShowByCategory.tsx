import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
} from "react-native";

import ShowVerse from "../../components/ShowVerse";
import { getVersesByCategory } from "../../api/verses";

type RouteParams = {
  category: string;
};

const ShowByCategory = () => {
  const route = useRoute();
  const { category } = route.params as RouteParams;
  const verses = getVersesByCategory(category);
  if (!verses)
    return (
      <Text style={styles.notFound}>No verses found for this category.</Text>
    );
    
  return (
    <View style={styles.container}>
      <FlatList
        data={verses}
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ShowVerse showHeader verse={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notFound: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginVertical: 20,
  },
});

export default ShowByCategory;
