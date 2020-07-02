import React from "react";
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Result() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Your product:</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./assets/monitor.jpg")}
        ></Image>
      </View>
      <Text style={styles.productName}>Dell SE2417HGX</Text>
      <Text style={styles.productName}>$290</Text>
      <TouchableOpacity
        style={styles.buttonDetails}
        onPress={() => alert("Details")}
      >
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonCheaper}
          onPress={() => alert("Details")}
        >
          <Text style={styles.buttonText}>Find cheaper!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBetter}
          onPress={() => alert("Details")}
        >
          <Text style={styles.buttonText}>Find better!</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonBuy}
        onPress={() => alert("Details")}
      >
        <Text style={styles.buttonText}>Buy!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#383B40",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    color: "#fff",
    marginBottom: "5%",
    textAlign: "center",
    fontSize: 25,
    marginTop: "5%",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    aspectRatio: 1.25,
  },
  imageContainer: {
    width: "90%",
    height: "40%",
    borderRadius: 10,
    borderColor: "#0BCFCE",
    backgroundColor: "#fff",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  productName: {
    color: "#fff",
    fontSize: 16,
    marginBottom: "5%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  buttonContainer: {
    marginBottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  buttonDetails: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: "#0BCFCE",
    marginBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  buttonBuy: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: "#0BCFCE",
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  buttonCheaper: {
    width: "47.5%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#f3658c",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBetter: {
    width: "47.5%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#50e15a",
    alignItems: "center",
    justifyContent: "center",
  },
});
