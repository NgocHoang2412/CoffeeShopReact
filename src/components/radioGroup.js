import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
function RadioButton(props) {
  const onPress = () => props.onPressHandler(props.index);
  console.log(props);
  return (
    <TouchableOpacity style={props.styles.menu} onPress={onPress}>
      <Text style={props.styles.text}>{props.radioText}</Text>
    </TouchableOpacity>
  );
}
function RadioGroup(props) {
  return props.items.map((item, index) => (
    <RadioButton
      radioText={item.title}
      isChecked={props.selectedIndex === index}
      styles={
        props.selectedIndex === index
          ? props.checkedStyle
          : props.unCheckedStyle
      }
      onPressHandler={props.onChange}
      index={index}
      key={index}
    />
  ));
}
export default RadioGroup;
