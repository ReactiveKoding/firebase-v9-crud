import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const MyTextInput = ({setting, setter, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{label}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={value => {
          setter(Number(value));
        }}
        value={setting.toString()}
      />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    width: '30%',
    height: 30,
    paddingTop: 0,
    paddingBottom: 0,
  },

  textLabel: {fontSize: 20, marginRight: 10},
});
