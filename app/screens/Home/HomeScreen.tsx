import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import { getRandomVerses } from "../../api/verses";
import { Verse } from "../../datas/verses";
import ShowVerse from "./ShowVerse";

const HomeScreen = () => {
  const [verses, setVerses] = useState<Verse[]>();

  useEffect(() => {
    const data = getRandomVerses(); // Fetch your verses
    setVerses(data);
  }, []);

  if (!verses) return <Text>No Data</Text>;

  return (
      <FlatList
        data={verses}
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ShowVerse verse={item} />}
      />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  content: {
    backgroundColor: "yellow",
    height: 200,
    width: 200,
  },
});

export default HomeScreen;
