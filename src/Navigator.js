import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import HomeContainer from './containers/home/index';
import LoginScreen from './scenes/login/index';
import ItemScreen from './scenes/item/index';

const Stack = createStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeContainer"
        component={HomeContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{
          title: 'Buy Item',
          headerShown: true,
          cardStyle: {
            backgroundColor: 'transparent',
            //opacity: 0.5,
            shadowColor: 'black',
            shadowOffset: { width: 50, height: 50 }, 
            shadowOpacity: 0.5, 
            shadowRadius: 5, 
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
