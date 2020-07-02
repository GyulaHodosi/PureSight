import React, { useState } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Picker,
} from "react-native";

export default function CategorySelect({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("Computers");
  const [selectedSubCategory, setSelectedSubCategory] = useState("Monitor");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>What are you looking for?</Text>
      <Text style={styles.pickerTitle}>Category:</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCategory(itemValue)
          }
        >
          <Picker.Item label="Computers" value="computers" />
          <Picker.Item label="Electronics" value="electronics" />
          <Picker.Item label="Televisions" value="televisions" />
        </Picker>
      </View>
      <Text style={styles.pickerTitle}>Sub Category:</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedSubCategory}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedSubCategory(itemValue)
          }
        >
          <Picker.Item label="Monitor" value="monitor" />
          <Picker.Item label="Graphics Card" value="graphicsCard" />
          <Picker.Item label="CPU" value="cpu" />
        </Picker>
      </View>
      <Text style={styles.pickerTitle}>Price in $USD:</Text>
      <View style={styles.slider}>
        <MultiSlider
          sliderLength={320}
          values={[500]}
          min={120}
          max={1640}
          enableLabel={true}
        ></MultiSlider>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Result")}
      >
        <Text style={styles.buttonText}>Find it!</Text>
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
    marginBottom: "10%",
    textAlign: "center",
    fontSize: 30,
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
  picker: {
    borderRadius: 10,
    width: "90%",
    color: "black",
    backgroundColor: "#fff",
    marginBottom: "5%",
  },
  pickerTitle: {
    color: "#fff",
    fontSize: 17,
    marginBottom: "2%",
  },
  slider: {
    alignItems: "center",
    width: "90%",
    marginTop: "10%",
  },
});
