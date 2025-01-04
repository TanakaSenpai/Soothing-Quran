import React from "react";
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  ViewStyle
} from "react-native";
import Constants from "expo-constants";
import { View } from "react-native";

const Screen = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
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
