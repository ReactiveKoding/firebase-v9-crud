import { View } from "react-native";
import React from "react";
import RestItem from "./RestItem";

export default function RestItems({ restData }) {
  return (
    <>
      {restData.map((rest, index) => (
        <View key={index}>
          <RestItem key={index} rest={rest} />
        </View>
      ))}
    </>
  );
}
