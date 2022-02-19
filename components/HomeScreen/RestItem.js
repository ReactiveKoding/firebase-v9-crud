import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";

import Icon from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

const rests = [
  {
    name: "BBQ Western",
    image:
      "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow=",
    rating: 4.5,
    waitParties: 8,
    waitCurrent: 35,
    waitPrice: 12,
  },
  {
    name: "Vegan Delight",
    image: "https://roamingvegans.com/wp-content/uploads/2020/11/raw-love-tulum-1024x768.jpg",
    rating: 4.8,
    waitParties: 8,
    waitCurrent: 55,
    waitPrice: 8,
  },
  {
    name: "Shi in Sushi",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2018%2F01%2Fsustainable-sushi-bamboo-interior-FT-BLOG0118.jpg",
    rating: 4.5,
    waitParties: 8,
    waitCurrent: 35,
    waitPrice: 21,
  },
];

export default function RestItem({ rest }) {
  return (
    <>
      <View>
        <RestImage
          name={rest.data.name}
          image={rest.data.image}
          rating={rest.data.rating}
          waitParties={rest.data.current.waitParties}
          waitCurrent={rest.data.current.waitCurrent}
          price={rest.data.current.waitPrice}
        />
      </View>
    </>
  );
}

const RestImage = (props) => (
  <View style={styles.container}>
    <ImageBackground source={{ uri: props.image }} resizeMethod="resize" style={{ height: 180 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.4, y: 0 }}
        colors={["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"]}
        style={styles.linearGradient}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text>{props.name}</Text>
            <Text>{props.rating}</Text>
          </View>
          <View>
            <Text>
              <Image source={require("../../assets/icons/human-queue.png")} color="black" />
              {props.waitParties}
            </Text>
            <Text>
              <Icon name="timer" size={30} color="black" />
              {props.waitCurrent}
            </Text>
            <Text>
              <Icon name="local-offer" size={30} color="black" />

              {props.price}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
