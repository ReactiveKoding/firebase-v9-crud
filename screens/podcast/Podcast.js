import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PodcastList from "./components/PodcastList";

const XMLParser = require("react-xml-parser");

const REVERSEPROXY_URL = "https://secret-beyond-79263.herokuapp.com/"; // Custom reverse proxy
const APPLE_PODCAST_URL = "https://itunes.apple.com/";

const BASE_URL = String(REVERSEPROXY_URL + APPLE_PODCAST_URL);

const HOME_SCREEN_PODCAST_COLLECTION_IDS =
  "278981407,863897795,1191775648,582272991,1200361736,1322200189,1379959217,998568017,1081244497,1062418176,1334878780,316045799,480486345,265307784,643055307,1057255460,1077418457,268213039,1258635512,169078375";

const HOMESCREEN_API_URL = String(`${BASE_URL}lookup?id=${HOME_SCREEN_PODCAST_COLLECTION_IDS}`);

export default function Podcast() {
  const [podcasts, setPodcasts] = useState();

  const getPodcasts = async () => {
    const response = await axios.get(
      "https://itunes.apple.com/lookup?id=290783428&media=podcast&entity=podcastEpisode&limit=2"
    );

    return response.data;
  };

  useEffect(() => {
    const fetchAPI = async () => {
      getPodcasts()
        .then((data) => {
          setPodcasts(data);
        })
        .catch((err) => console.log(err));
    };

    fetchAPI();

    return () => {};
  }, []);

  return <View>{podcasts && <PodcastList podcasts={podcasts} />}</View>;
}
