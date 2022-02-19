import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function HeaderTabs({activeTab, setActiveTab}) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        text="Skip Now"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Make Resso"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = props => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab == props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
      marginTop: 10,
    }}
    onPress={() => props.setActiveTab(props.text)}>
    <Text
      style={{
        color: props.activeTab == props.text ? 'white' : 'black',
        fontSize: 15,
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
