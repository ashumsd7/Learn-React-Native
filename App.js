// import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={( styles.styleLine,styles.text)}>React on Native 💙</Text>
      <Text style={styles.styleLine}>Style this line</Text>
      <Button title="Register" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff3",

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    borderColor: "green",
    borderWidth:1,
    padding:10
  },
  styleLine: { margin: 16, borderWidth: 1, borderColor: "green", padding: 10 },
});
