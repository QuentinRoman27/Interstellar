import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import colors from "./assets/styles/colors";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.ScrollView}>
        <View style={styles.header}>
          <Image style={require("./assets/img/imdb.png")} />
        </View>
        <View style={styles.topPart}></View>
        <View style={styles.bottomPart}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    height: 60,
    backgroundColor: colors.grey,
    paddingHorizontal: 20,
  },
});
