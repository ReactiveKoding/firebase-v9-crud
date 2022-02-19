import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SwitchSelector = ({options, selectedFilter, setSelectedFilter}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.container}>
        {options.map((option, index) => (
          <TouchableOpacity
            style={styles.toggleButton}
            key={index}
            onPress={() => {
              setSelectedFilter(option.value);
            }}>
            <Text
              style={[
                styles.buttonText,
                {
                  backgroundColor:
                    selectedFilter === option.value ? 'blue' : 'green',
                },
              ]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SwitchSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    height: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  toggleButton: {
    width: '30%',
  },
  buttonText: {
    width: '100%',
    paddingVertical: 8,
    textAlign: 'center',
    color: 'white',
  },
});
