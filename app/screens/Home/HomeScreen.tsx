import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import Constants from "expo-constants";

import { getRandomVerses } from "../../api/verses";
import { Verse } from "../../datas/verses";
import ShowVerse from "./ShowVerse";
import Screen from "../../components/Screen";

const { height } = Dimensions.get("window");

const HomeScreen = () => {
  const [verses, setVerses] = useState<Verse[]>();
  useEffect(() => {
    const data = getRandomVerses();
    setVerses(data);
  }, []);
  if (!verses) return <Text>No Data</Text>;
  return (
      <Screen>
        <SwiperFlatList
          style={styles.container}
          vertical={true}
          data={verses}
          keyExtractor={(item, index) => `verse-${index}`}
          renderItem={({ item }) => <ShowVerse verse={item} />}
        />
      </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default HomeScreen;
