import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as C from '../shared/constants';
export default function AddCircle(props) {
  const styles = StyleSheet.create({
    rect: {
      width: 23,
      height: 23,
      borderRadius: 23,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: C.COLORS.primary,
    },
    lineHor: {
      width: 15,
      height: 1,
      borderWidth: 0.5,
      borderColor: C.COLORS.primary,
      position: 'absolute',
      padding: 0,
      marginTop: 10,
      marginLeft: 3,
    },
    lineVer: {
      width: 1,
      height: 15,
      borderWidth: 0.5,
      borderColor: C.COLORS.primary,
      position: 'absolute',
      padding: 0,
      marginTop: 3,
      marginLeft: 10,
    },
  });
  return (
    <View style={[styles.rect, {marginRight: props.marginRight}]}>
      <View style={styles.lineHor} />
      <View style={styles.lineVer} />
    </View>
  );
}
