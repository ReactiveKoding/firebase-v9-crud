import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import HeaderTabs from "../components/HomeScreen/HeaderTabs";
import SearchBar from "../components/HomeScreen/SearchBar";
import FilterOptions from "../components/HomeScreen/FilterOptions";
import RestItems from "../components/HomeScreen/RestItems";

import { db } from "../firebase";
import { collection, doc, getDoc, getDocs, onSnapshot, query } from "firebase/firestore";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("Skip Now");
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    const getRestData = async () => {
      const q = query(collection(db, "clients"));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const dataHolder = [];
        querySnapshot.forEach((doc) => {
          dataHolder.push({ id: doc.id, data: doc.data() });
        });
        setRestData(dataHolder);
      });
    };

    getRestData();
  }, []);

  return (
    <View style={{ backgroundColor: "#eee", flex: 1 }}>
      <View>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <FilterOptions />
        <RestItems restData={restData} />
      </ScrollView>

      {/* <BottomTabs /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
