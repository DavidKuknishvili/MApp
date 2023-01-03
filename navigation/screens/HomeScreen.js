import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import Swipe from "../../components/Swipe";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainConatiner}>
      <LinearGradient colors={["#D9434350", "#1A1A1D", "#1A1A1D"]}>
        <Swipe />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: "#1A1A1D",
  },
  profile: {
    width: 46,
    height: 46,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#A8ABB1",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: "#fff",
    height: 50,
    flex: 1,
  },
  linearInput: {
    height: 50,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
  categoryLinear: {
    padding: 36,
    paddingBottom: 25,
    paddingTop: 25,
    borderRadius: 25,
  },
  images: {
    height: 250,
  },
});
