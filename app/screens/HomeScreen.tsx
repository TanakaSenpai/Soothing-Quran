import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { getRandomVerses } from "../api/verses";
import { Verse } from "../datas/verses";
import ShowVerse from "../components/ShowVerse";

const HomeScreen = () => {
  const [verses, setVerses] = useState<Verse[]>();

  useEffect(() => {
    const data = getRandomVerses();
    setVerses(data);
  }, []);

  if (!verses) return;

  return (
    <FlatList
      data={verses}
      pagingEnabled
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <ShowVerse verse={item} />}
    />
  );
};

export default HomeScreen;
