import {View, Text, TextInput, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import MyTextInput from '../../components/MyTextInput';

export default function ClientSkipSettings() {
  const [cost, setCost] = useState(5);
  const [numSkipsAllowed, setNumSkipsAllowed] = useState(2);
  const [minPartySize, setMinPartySize] = useState(2);
  const [maxPartySize, setMaxPartySize] = useState(4);
  const [refundOnCancel, setRefundOnCancel] = useState(false);
  return (
    <View>
      <Text>Skip settings</Text>
      <MyTextInput setting={cost} setter={setCost} label={'Cost'} />
      <MyTextInput
        setting={numSkipsAllowed}
        setter={setNumSkipsAllowed}
        label={'Skips allowed in queue'}
      />
      <MyTextInput
        setting={minPartySize}
        setter={setMinPartySize}
        label={'Min Party Size'}
      />
      <MyTextInput
        setting={maxPartySize}
        setter={setMaxPartySize}
        label={'Max Party Size'}
      />
      <Text>Late / Cancel Policy</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text>Refund On Cancel?</Text>
        <Switch
          onValueChange={() => {
            setRefundOnCancel(!refundOnCancel);
          }}
          value={refundOnCancel}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
