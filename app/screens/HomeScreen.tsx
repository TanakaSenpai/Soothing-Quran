import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";

import Screen from "../components/Screen";
import { getRandomVerse } from "../api/verses";
import { Verse } from "../datas/verses";

const { height } = Dimensions.get("window");

const HomeScreen = () => {
  const [verse, setVerse] = useState<Verse>();
  useEffect(() => {
    const verse = getRandomVerse();
    setVerse(verse);
  }, []);
  if (!verse) return;
  return (
    <Screen>
      <ImageBackground
        source={require("../assets/bg.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={true}
            style={styles.scrollViewBackground}
          >
            <Text style={styles.quranVerse}>{verse.arabic}</Text>
            <Text style={styles.translation}>{verse.translation}</Text>
          </ScrollView>

          <Text style={styles.reference}>{verse.reference}</Text>
        </View>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: height * 0.51,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-start",
    maxHeight: 230,
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    flexGrow: 1,
    justifyContent: "center",
  },
  scrollViewBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Adds a transparent background for visual feedback
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  quranVerse: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "YourArabicFont",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  translation: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    fontFamily: "Poppins",
    marginTop: 10,
  },
  reference: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
    fontStyle: "italic",
  },
});

export default HomeScreen;
