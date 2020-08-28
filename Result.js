import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Linking,
  Modal,
} from "react-native";
import {
  productIndex,
  previousProductIndex,
  nextProductIndex,
} from "./globals";

export default function Result({ route, navigation }) {
  const results = route.params;
  const [product, setProduct] = useState(results[productIndex]);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  function nextProduct() {
    if (productIndex + 1 > results.length - 1) {
      alert("There are no more products to show!");
    } else {
      nextProductIndex();
      setProduct(results[productIndex]);
    }
  }

  function previousProduct() {
    if (productIndex - 1 < 0) {
      alert("There are no more products to show!");
    } else {
      previousProductIndex();
      setProduct(results[productIndex]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Your product:</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.img }}></Image>
      </View>
      <Text style={styles.productName}>
        {product.brand} {product.model}
      </Text>
      <Text style={styles.productName}>${product.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.buttonDetails}
        onPress={() => openModal()}
      >
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonCheaper}
          onPress={() => previousProduct()}
        >
          <Text style={styles.buttonText}>Find cheaper!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBetter}
          onPress={() => nextProduct()}
        >
          <Text style={styles.buttonText}>Find better!</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonBuy}
        onPress={() => {
          Linking.openURL(product.link);
        }}
      >
        <Text style={styles.buttonText}>Buy!</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>{product.description}</Text>
          <Text style={styles.modalText}></Text>
          {Object.entries(product).map(([key, v]) => {
            if (key != "img" && key != "link" && key != "description")
              return (
                <View key={key}>
                  <Text style={styles.modalText}>
                    {capitalize(key)} : {v}
                  </Text>
                </View>
              );
          })}
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    borderWidth: 1,
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
  buttonClose: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: "#0BCFCE",
    marginRight: "25%",
    marginLeft: "25%",
    marginTop: "70%",
    marginBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  modal: {
    flex: 1,
    padding: "5%",
    paddingTop: "20%",
    justifyContent: "center",
  },
  modalText: {
    marginBottom: "2%",
  },
});
