import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./src/views/Home/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop:50,
    backgroundColor: "rgba(7,26,93,255)",
   flex:1,
  },
});

