import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddCircle from './addCircle';
import {ScaleH} from '../shared/ratio';

export default function Item(props) {
  const imageHeight = props.itemHeight * 0.6;
  const rectContentHeight = props.itemHeight - imageHeight;
  const lineWidth = ScaleH(0.5);
  const styles = StyleSheet.create({
    rectItem: {
      marginLeft: props.itemLeftSpace,
      marginTop: props.itemTopSpace,
      width: props.itemWidth,
      height: props.itemHeight,
      borderRadius: 8,
      backgroundColor: props.bgColor,
      overflow: 'hidden',
    },
    itemImage: {
      width: props.itemWidth,
      height: imageHeight,
    },
    rectContent: {
      width: props.itemWidth,
      height: rectContentHeight,
    },
    rectChild1: {
      width: props.itemWidth,
      height: rectContentHeight / 2,
      flexDirection: 'row',
      alignItems: 'center',
    },
    rectChild2: {
      flexDirection: 'row',
      width: props.itemWidth,
      height: rectContentHeight / 2,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: lineWidth,
      borderTopColor: props.borderColor,
    },

    textLine1: {
      fontFamily: 'Roboto Medium',
      fontSize: props.textFontSize,
      marginTop: props.textMarginTop,
      marginLeft: props.textMarginLeft,
      color: props.textColor,
    },
    textLine2: {
      fontFamily: 'Roboto Medium',
      fontSize: props.textFontSize,
      marginLeft: props.textMarginLeft,
      color: props.textColor,
    },
  });
  const navigation = useNavigation();
  
  function GoToOrderItem(){
    console.log('GoToOrderScreen ');
    navigation.navigate('ItemScreen',{
      itemId: props.item.id,
      itemName: props.item.name,
      itemPrice: props.item.price,
      itemUnit: props.item.unit,
    });
    
  }

  return (
    <View 
      onStartShouldSetResponder={GoToOrderItem}
      style={styles.rectItem}
    >
      {/* <Image source={{uri: 'asset:/images/cafeda.png'}} style={{width: 40, height: 40}} /> */}
      {/* <WebImage source={require('../../assets/images/cafeda.png')} style={{width: 80, height: 80}}/> */}
      <Image
        style={styles.itemImage}
        // source={{
        //   uri:
        //     'https://res.cloudinary.com/vianey/image/upload/v1586581266/cafeda.jpg',
        // }}
        source={require('../assets/images/caphe_den.jpg') }
      />
      <View style={styles.rectContent}>
        <View style={styles.rectChild1}>
          <Text style={styles.textLine1}>{props.item.name}</Text>
        </View>
        <View style={styles.rectChild2}>
          <Text style={styles.textLine2}>{`${props.item.price} ${
            props.item.unit
          }`}</Text>
          <AddCircle marginRight={props.textMarginLeft} />
          {/* <Icon name="plus-circle-outline" color={colors.orange} size={30} style={{marginRight: ScaleW(6)}}/> */}
        </View>
      </View>
    </View>
  );
  
  

}
