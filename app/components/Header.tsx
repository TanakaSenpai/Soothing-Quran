import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Header = ({ category }: { category: string }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <MaterialCommunityIcons
        name="arrow-left"
        color="#f0f0f0"
        size={30}
        style={styles.backButton}
      />
      <Text style={styles.headerText}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    marginRight: 10,
  },
  headerText: {
    color: "#f0f0f0",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
