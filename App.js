import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "./assets/styles/colors";
import Constants from "expo-constants";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.ScrollView}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("./assets/img/imdb.jpg")}
          />
        </View>
        <View style={styles.topPart}>
          <Text style={[styles.white, styles.title]}> Interstellar </Text>
          <View style={styles.line}>
            <Text style={styles.LightGrey}>2014</Text>
            <Text style={styles.LightGrey}>PG-13</Text>
            <Text style={styles.LightGrey}>2h 49min</Text>
            <Text style={styles.LightGrey}>Adventure,Drama,Sci-Fi </Text>
          </View>
          <View style={styles.coverView}>
            <Image
              style={styles.coverImage}
              source={require("./assets/img/film.jpg")}
            />
            <View style={styles.coverRight}>
              <Text style={styles.white}>
                Dans un proche futur, la Terre est devenue hostile pour l'homme.
                Cooper est un pilote, recyclé en agriculteur, qui vit avec son
                fils et sa fille dans la ferme familiale. Lorsqu'une force qu'il
                ne peut expliquer lui indique les coordonnées d'une division
                secrète de la NASA, il est alors embarqué dans une expédition
                pour sauver l'humanité.
              </Text>
              <TouchableOpacity style={styles.buttonAdd}>
                <Text style={styles.white}>+ ADD TO WATCHLIST </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.iconView}>
            <View style={styles.iconBlock}>
              <Entypo name="star" size={24} color="yellow" />
              <Text style={styles.white}>8.6/10</Text>
              <Text style={styles.LightGrey}>1.1 M</Text>
            </View>

            <View style={styles.iconBlock2}>
              <EvilIcons name="star" size={24} color="lightgrey" />
              <Text style={styles.white}>RATE THIS</Text>
            </View>

            <View style={styles.iconBlock3}>
              <Text style={styles.white}>74</Text>
              <Text style={styles.white}>Metascore</Text>
              <Text style={styles.LightGrey}>46 critic reviews</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomPart}>
          <Text style={[styles.white, styles.title]}>Top Billed Cast</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.carrouselBlock}>
              <Image
                style={styles.imageCarrousel}
                source={require("./assets/img/matthew.jpg")}
              />
              <View>
                <Text numberOfLines={1} style={styles.white}>
                  Matthew McConaughey
                </Text>
                <Text style={styles.LightGrey}>Joseph Cooper</Text>
              </View>
            </View>
            <View style={styles.carrouselBlock}>
              <Image
                style={styles.imageCarrousel}
                source={require("./assets/img/anne.jpg")}
              />
              <View>
                <Text numberOfLines={1} style={styles.white}>
                  Anne Hataway
                </Text>
                <Text style={styles.LightGrey}>Amélia Brand</Text>
              </View>
            </View>
            <View style={styles.carrouselBlock}>
              <Image
                style={styles.imageCarrousel}
                source={require("./assets/img/jessica.jpg")}
              />
              <View>
                <Text numberOfLines={1} style={styles.white}>
                  Jessica Chastain
                </Text>
                <Text style={styles.LightGrey}>Murphy Cooper</Text>
              </View>
            </View>
            <View style={styles.carrouselBlock}>
              <Image
                style={styles.imageCarrousel}
                source={require("./assets/img/mackenzie.jpg")}
              />
              <View>
                <Text numberOfLines={1} style={styles.white}>
                  Mackenzie Foy
                </Text>
                <Text style={styles.LightGrey}>
                  Murphy Cooper (Young 10 Year)
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  white: {
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    height: 60,
    backgroundColor: colors.grey,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  logo: {
    height: 50,
    width: 100,
  },
  topPart: {
    backgroundColor: colors.darkGrey,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "300",
  },
  LightGrey: {
    color: colors.lightGrey,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "93%",
    marginBottom: 20,
    marginTop: 20,
  },
  coverRight: {
    width: "69%",
  },

  coverImage: {
    height: 200,
    width: 100,
    marginRight: 10,
  },
  coverView: {
    flexDirection: "row",
  },
  buttonAdd: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  iconBlock: {
    alignItems: "center",
    width: 50,
  },

  iconBlock2: {
    alignItems: "center",
  },

  iconBlock3: {
    alignItems: "center",
    height: 30,

    justifyContent: "center",
  },

  iconView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  bottomPart: {
    backgroundColor: colors.darkGrey,
    padding: 20,
    marginTop: 20,
  },

  carrouselBlock: {
    borderColor: "red",
    borderWidth: 2,
    height: 250,
    width: 150,
    marginRight: 10,
  },
  imageCarrousel: {
    width: "100%",
    height: "80%",
  },
});
