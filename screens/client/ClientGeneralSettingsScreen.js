import {View, Text, Switch, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function ClientGeneralSettingsScreen() {
  const [autoCancel, setAutoCancel] = useState(false);
  const [waitTimer, setWaitTimer] = useState(15);
  console.log(waitTimer, typeof waitTimer);
  return (
    <View>
      <Text>Client General Settings</Text>
      <View style={{flexDirection: 'row'}}>
        <Switch
          onValueChange={() => {
            setAutoCancel(!autoCancel);
          }}
          value={autoCancel}
        />
        <Text>Auto Cancel</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{borderWidth: 1, width: '50%'}}
          onChangeText={value => {
            setWaitTimer(Number(value));
          }}
          value={waitTimer.toString()}
        />
        <Text>Wait Time</Text>
      </View>
    </View>
  );
}
