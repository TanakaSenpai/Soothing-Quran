import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context"

import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
