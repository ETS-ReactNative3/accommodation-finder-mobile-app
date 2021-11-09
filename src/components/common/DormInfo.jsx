import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import InfoList from "./InfoList";

const DormInfo = (props) => {
  const backPressed = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bilgiler</Text>
      <FlatList
        data={[
          { icon: "info", key: "Tipi" },
          { icon: "try", key: "Fiyat Bilgisi(Aylık)" },
          { icon: "cutlery", key: "Yemek Bilgisi" },
          { icon: "phone", key: "Telefon Numarası" },
          { icon: "map-marker", key: "Adresi" },
          { icon: "plus", key: "Diğer Bilgiler" },
        ]}
        renderItem={({ item, index }) => (
          <InfoList itm={item} dorm={props.dr} ind={index} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    textAlign: "left",
    margin: 15,
    marginBottom: 5,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    paddingLeft: 20,
    fontSize: 18,
    height: 44,
  },
});

export default DormInfo;
