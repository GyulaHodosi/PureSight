import React, { useState } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import CustomSliderMarkerLeft from "@ptomasroos/react-native-multi-slider";
import CustomSliderMarkerRight from "@ptomasroos/react-native-multi-slider";
import { setProductIndex } from "./globals";
import { categories } from "./categories";
import { products } from "./productsdb";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Picker,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function CategorySelect({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("Computers");
  const [selectedSubCategory, setSelectedSubCategory] = useState("Monitor");
  const [keyWord, setKeyWord] = useState("");
  const [multiSliderValue, setMultiSliderValue] = useState([250, 2500]);
  const multiSliderValuesChange = (values) => setMultiSliderValue(values);

  function navigateToResult() {
    var results = selectProducts();
    if (results.length == 0) {
      alert("Sorry, we couldn't find a product like that!");
    } else {
      setProductIndex(Math.ceil((results.length - 1) / 2));
      navigation.navigate("Result", results);
    }
  }

  function selectProducts() {
    var results;
    results = products.filter((p) => {
      return (
        p.category === selectedSubCategory &&
        p.price > multiSliderValue[0] &&
        p.price < multiSliderValue[1]
      );
    });

    if (keyWord != "") {
      results = filterByKeyWord(results, keyWord);
    }

    results = results.sort((a, b) => (a.price > b.price ? 1 : -1));
    return results;
  }

  function filterByKeyWord(unFilteredList, keyWord) {
    var filteredList;
    filteredList = unFilteredList.filter((i) => {
      return i.description.includes(keyWord);
    });
    return filteredList;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>What are you looking for?</Text>
      <Text style={styles.pickerTitle}>Category:</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          {Object.entries(categories).map(([key]) => {
            return <Picker.Item key={key} label={key} value={key} />;
          })}
        </Picker>
      </View>
      <Text style={styles.pickerTitle}>Sub Category:</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedSubCategory}
          onValueChange={(itemValue) => setSelectedSubCategory(itemValue)}
        >
          {categories[selectedCategory].map((x) => {
            return <Picker.Item key={x} label={x} value={x} />;
          })}
        </Picker>
      </View>
      <Text style={styles.pickerTitle}>Keyword:</Text>
      <TextInput
        style={styles.picker}
        onChangeText={(keyword) => setKeyWord(keyword)}
      ></TextInput>
      <Text style={styles.pickerTitle}>Price in $USD:</Text>
      <View style={styles.slider}>
        <MultiSlider
          selectedStyle={{ backgroundColor: "#0BCFCE" }}
          unselectedStyle={{
            backgroundColor: "white",
          }}
          touchDimensions={{
            height: 0,
            width: 0,
            borderRadius: 15,
            slipDisplacement: 200,
          }}
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={320}
          onValuesChange={multiSliderValuesChange}
          min={0}
          max={3000}
          step={10}
          allowOverlap
          snapped
          enableLabel={true}
        ></MultiSlider>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToResult()}
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
    height: "7%",
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
