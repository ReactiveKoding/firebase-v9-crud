import { View, Text } from "react-native";
import React from "react";
import PodcastEpisode from "./PodcastEpisode";
import SoundPlayer from "react-native-sound-player";

export default function PodcastList({ podcasts }) {
  // if (podcasts) {
  //   const trackUrl = `${podcasts.results[1].episodeUrl.split(".mp3")[0]}.mp3`;
  //   console.log(typeof trackUrl);
  //   try {
  //     SoundPlayer.playUrl(trackUrl);
  //   } catch (error) {
  //     console.log("cannot play ", error);
  //   }
  // }
  SoundPlayer.playSoundFile("chime", "mp3");

  return (
    <View style={{ marginTop: 50 }}>
      {Object.keys(podcasts.results)
        .slice(1)
        .map((i) => (
          <PodcastEpisode key={i} podcast={podcasts.results[i]} />
        ))}
    </View>
  );
}
