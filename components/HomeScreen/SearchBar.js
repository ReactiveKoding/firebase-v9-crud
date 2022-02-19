import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import SearchButton from './SearchButton';
import ClearButton from './ClearButton';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="city/area"></TextInput>
      <View style={styles.buttonsContainer}>
        <SearchButton />
        <ClearButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 17,
  },
});
