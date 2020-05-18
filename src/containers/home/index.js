import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OrderScreen from '../../scenes/order/index';
import * as C from '../../shared/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; //Platform.OS === 'web'
import { useSelector, useDispatch } from 'react-redux';
let BarIcon = {};
if (Platform.OS === 'web') {
  BarIcon = MaterialCommunityIcons;//Platform.OS === 'web'
} else {
  BarIcon = Icon;
}

function CartScreen() {
  const cartState = useSelector(state => state.cart.item);
  const dispacth = useDispatch();
   let totalMoney = 0;
  function onRemoveCartItem(itemIndex){
    console.log("onRemoveCartItem");
    dispacth({type : 'REMOVE_TO_CART',
              itemIndex : itemIndex,
          });
  }

  return (
    <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'left', padding: 20}}>
      <h1 style={{color:"green", paddingLeft:140}}>Cart!</h1>
      {cartState.map((cart,index) => (
        totalMoney += (cart.price*cart.num),
        <div key={index} >
          <li>Order {index + 1} </li>
          <h3>{cart.name} price: {cart.price} quantity : {cart.num}</h3>
          <button onClick = {function(){onRemoveCartItem(index)}}>Remove</button>
          <h2></h2>
        </div>
      ))}
      <h1>Total Payment : {totalMoney}</h1>
    </View>
  );
}
function OrderPayScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>OrderPayScreen!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
function HomeContainer() {
    return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: C.COLORS.textSelected,
        inactiveTintColor: C.COLORS.textUnselected,
        labelStyle: {
          fontSize: C.UI.normalFontSize,
          margin: 0,
          padding: 0,
        },
        style: {
          padding: 0,
          height: C.UI.bottomBarH,
          backgroundColor: C.COLORS.bgWhite,
          borderTopWidth:0,
        },
      }}>
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color, size}) => (
            <BarIcon name="playlist-edit" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Giỏ hàng',
          tabBarIcon: ({color, size}) => (
            <BarIcon name="cart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderPay"
        component={OrderPayScreen}
        options={{
          tabBarLabel: 'Tính tiền',
          tabBarIcon: ({color, size}) => (
            <BarIcon name="currency-usd" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default HomeContainer;
