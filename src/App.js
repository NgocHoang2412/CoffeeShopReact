import 'react-native-gesture-handler';
import * as React from 'react';
import RootStack from './Navigator';
import {NavigationContainer} from '@react-navigation/native';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
  }
}
