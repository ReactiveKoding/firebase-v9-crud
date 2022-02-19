import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";

const data = [
  {
    id: 1,
    name: "Jim",
    partySize: 3,
    contactType: "cell",
    contact: "4165214521",
  },
  {
    id: 2,
    name: "Jill",
    partySize: 2,
    contactType: "email",
    contact: "jill@gmail.com",
  },
  {
    id: 3,
    name: "Jeff",
    partySize: 4,
    contactType: "email",
    contact: "jeff@jeff.com",
  },
];

const ClientHomeScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [waitList, setWaitList] = useState(data);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  const removeParty = (partyId) => {
    console.log(partyId);
    const waitListHolder = waitList;
    const newWaitList = waitListHolder.filter((item) => item.id != partyId);
    console.log(newWaitList);
    setWaitList(newWaitList);
  };

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View style={{ flexDirection: "row" }}>
        {/* <Text style={[styles.partySize, textColor]}>{item.partySize} - </Text>
        <Text style={[styles.name, textColor]}>{item.name}</Text> */}
        <Menu>
          <MenuTrigger
            customStyles={styles.text}
            text={item.partySize + " - " + item.name}
          ></MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => removeParty(item.id)}>
              <Text style={{ color: "red" }}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert(`Notified`)} disabled={false} text="Ready" />
          </MenuOptions>
        </Menu>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Text>Client Home</Text>
      <View style={{ flexDirection: "row" }}>
        {/* left side list */}
        <View style={{ width: "50%" }}>
          {/* probably use scrollview instead */}
          <FlatList
            data={waitList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
        {/* Right side controls */}
        <View style={{ width: "50%" }}>
          <Button title="Add" onPress={() => {}} />
          <Button
            title="General Settings"
            onPress={() => {
              navigation.navigate("ClientGeneralSettings");
            }}
          />
          <Button
            title="Skip Settings"
            onPress={() => {
              navigation.navigate("ClientSkipSettings");
            }}
          />
          <Button title="Add" onPress={() => {}} />
        </View>
      </View>
    </>
  );
};

export default ClientHomeScreen;

const styles = StyleSheet.create({
  partySize: { fontSize: 20 },
  // text: {triggerText: {fontSize: 30, alignSelf: 'stretch'}},
});
