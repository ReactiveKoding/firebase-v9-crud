import { View, Text } from "react-native";
import React from "react";

export default function PodcastEpisode({ podcast, key }) {
  return (
    <View key={key}>
      <Text>{podcast.trackName}</Text>
    </View>
  );
}
