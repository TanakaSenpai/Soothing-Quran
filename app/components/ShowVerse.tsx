import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { loadAsync } from "expo-font";

import { Verse } from "../datas/verses";
import Header from "./Header";

const height = Dimensions.get("window").height;

const ShowVerse = ({
  verse,
  showHeader = false,
}: {
  verse: Verse;
  showHeader?: boolean;
}) => {
  const bottomTabHeight = useBottomTabBarHeight();
  const screenHeight = Dimensions.get("window").height;
  const itemHeight = screenHeight - Constants.statusBarHeight - bottomTabHeight;

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadAsync({
      AmiriQuran: require('../assets/fonts/AmiriQuran.ttf'),
      AmiriRegular: require('../assets/fonts/AmiriRegular.ttf')
    }).then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[styles.view, { height: itemHeight }]}>
      <ImageBackground
        source={require("../assets/bg.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        {showHeader && (
          <Header category={verse.category} />
        )}
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={true}
            style={styles.scrollViewBackground}
          >
            <Text style={styles.quranVerse}>{verse.arabic}</Text>
            <Text style={styles.translation}>"{verse.translation}"</Text>
          </ScrollView>
          <Text style={styles.reference}>{verse.reference}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    position: "absolute",
    top: height * 0.48,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-start",
    maxHeight: 230,
  },
  bgImage: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexGrow: 1,
    justifyContent: "center",
  },
  scrollViewBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  quranVerse: {
    color: "#FFF8E7",
    fontSize: 26,
    textAlign: "center",
    fontFamily: "AmiriQuran",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  translation: {
    color: "#E0E0E0",
    fontSize: 17,
    textAlign: "center",
    fontFamily: "Poppins",
    marginTop: 10,
  },
  reference: {
    color: "#D1A875",
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
    fontStyle: "italic",
  }
});

export default ShowVerse;
