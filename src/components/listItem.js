import React from 'react';
import {SafeAreaView, Dimensions} from 'react-native';
import * as C from '../shared/constants';
import {ScaleW, ScaleH} from '../shared/ratio';
import {FlatList} from 'react-native-gesture-handler';
import RowItem from './rowItem';
const _ = require('lodash');
const screenW = Dimensions.get('window').width;
let itemWidth = ScaleW(152);
let itemHeight = ScaleH(280);
const itemRatio = itemWidth / itemHeight;
const minSpace = ScaleW(10);
const maxSpace = ScaleW(16);
const numberItem = parseInt(screenW / (itemWidth + minSpace));
let leftSpace = (screenW - itemWidth * numberItem) / (numberItem + 1);

//in this case: set space = maxSpace and auto increase item width
if (leftSpace > maxSpace) {
  const extendWidth =
    (screenW - maxSpace * (numberItem + 1)) / numberItem - itemWidth;
  itemWidth = itemWidth + extendWidth;
  itemHeight = itemWidth / itemRatio;
  leftSpace = (screenW - itemWidth * numberItem) / (numberItem + 1);
}
const topSpace = ScaleH(leftSpace);
export default function ListItem(props) {
  //array 1D --> 2D
  const items = _.chunk(props.items, numberItem);
  const rowItems = items.map((item, index) => {
    return {
      id: index,
      item: item,
    };
  });
  return (
    <SafeAreaView style={props.style}>
      <FlatList
        data={rowItems}
        renderItem={({item}) => (
          <RowItem
            items={item.item}
            itemLeftSpace={leftSpace}
            itemTopSpace={topSpace}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            textFontSize={C.UI.normalFontSize}
            textMarginTop={ScaleH(6)}
            textMarginLeft={ScaleH(6)}
            borderColor={C.COLORS.itemBorderColor}
            textColor={C.COLORS.textNormal}
            bgColor={C.COLORS.bgWhite}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}
