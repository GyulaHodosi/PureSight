import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Welcome to</Text>
      <Image style={styles.logo} source={require("./assets/logo.png")} />
      <Text style={styles.logoText}>PureSight</Text>
      <Text style={styles.textBasic}>
        {" "}
        Where you can find the perfect product that fits your personal needs.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CategorySelect")}
      >
        <Text style={styles.buttonText}>Find my product!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#383B40",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoText: {
    color: "#0BCFCE",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  button: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: "#0BCFCE",
    marginLeft: "25%",
    marginRight: "25%",
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  textTitle: {
    color: "#fff",
    marginBottom: "10%",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto",
  },
  textBasic: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    marginTop: "20%",
  },
});
