import React from 'react';
import {ScrollView} from 'react-native';
import Item from './item';
export default function RowItem(props) {
  return (
    <ScrollView horizontal={true}>
      {props.items.map((item, index) => (
        <Item
          item={item}
          itemLeftSpace={props.itemLeftSpace}
          itemTopSpace={props.itemTopSpace}
          itemWidth={props.itemWidth}
          itemHeight={props.itemHeight}
          textFontSize={props.textFontSize}
          textMarginTop={props.textMarginTop}
          textMarginLeft={props.textMarginLeft}
          borderColor={props.borderColor}
          textColor={props.textColor}
          bgColor={props.bgColor}
          key={index}
        />
      ))}
    </ScrollView>
  );
}
