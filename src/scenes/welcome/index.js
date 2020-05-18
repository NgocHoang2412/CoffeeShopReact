import React from 'react'
import { View, Text } from 'react-native';
import style from './style';
function WelcomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={style.circle}><Text>Hello</Text></View>
    </View>
  );
}
export default WelcomeScreen;

