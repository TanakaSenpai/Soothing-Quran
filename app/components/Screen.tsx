import React from "react";
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  ViewStyle,
  Dimensions
} from "react-native";
import Constants from "expo-constants";

const height = Dimensions.get("window").height;
const Screen = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: Constants.statusBarHeight,
  }
});

export default Screen;
