import React from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";

import { Verse } from "../../datas/verses";

const height = Dimensions.get("window").height;

const ShowVerse = ({verse}: {verse: Verse}) => {

  return (
      <View style={styles.view}>
        <ImageBackground
          source={require("../../assets/bg.png")}
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
              <Text style={styles.translation}>"{verse.translation}"</Text>
            </ScrollView>
            <Text style={styles.reference}>{verse.reference}</Text>
          </View>
        </ImageBackground>
      </View>
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
  bgImage: {
    flex: 1,
    height: height - Constants.statusBarHeight
  },
  view: {
    flex: 1,
    width: "100%",
    height: "100%"
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
    color: "yellow",
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
    color: "gray",
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
    fontStyle: "italic",
  },
});

export default ShowVerse;
