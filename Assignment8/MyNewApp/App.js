import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wassup</Text>
      <Image
        source={{
          uri: "https://frankfurt.apollo.olxcdn.com/v1/files/6l8ywr313om6-KZ/image",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>Хирос Джёрни</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: 400,
  },
  text: {
    color: "white",
  },
});
