import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import TabNavigator from "./app/navigation/TabNavigator";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
