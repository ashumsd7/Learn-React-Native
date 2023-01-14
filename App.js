// import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Type your goal"/>
        <Button title="add goal"/>
      </View>
      <View>
        <Text>Your goals list</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
  },
  styleLine: { margin: 16, borderWidth: 1, borderColor: "green", padding: 10 },
});
