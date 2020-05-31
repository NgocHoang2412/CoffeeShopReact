import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
// You can import from local files
import RadioGroup from '../../components/radioGroup';
import * as C from '../../shared/constants';
import ListItem from '../../components/listItem';
import * as authService from '../../shared/services/auth.service';

let itemsService;
async function onLoadAllItems() {
  itemsService = await authService.getItems();
  console.log("items get = " + JSON.stringify(itemsService));
} 

export default class OrderScreen extends PureComponent {
  data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Phổ biến',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Cà phê',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Sinh tố',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Món khác',
    },
  ];
  items = [
    {
      id: '1',
      name: 'Cà phê đen',
      price: 29000,
      unit: 'đ',
    },
    {
      id: '2',
      name: 'Cà phê sữa tươi',
      price: 35000,
      unit: 'đ',
    },
    {
      id: '3',
      name: 'Cà phê ý',
      price: 40000,
      unit: 'đ',
    },
    {
      id: '4',
      name: 'Cà phê mỹ',
      price: 38000,
      unit: 'đ',
    },
    {
      id: '1',
      name: 'Cà phê đen',
      price: 29000,
      unit: 'đ',
    },
    {
      id: '2',
      name: 'Cà phê sữa',
      price: 35000,
      unit: 'đ',
    },
    {
      id: '3',
      name: 'Cà phê ý',
      price: 40000,
      unit: 'đ',
    },
    {
      id: '4',
      name: 'Cà phê mỹ',
      price: 38000,
      unit: 'đ',
    },
  ];

  constructor(props) {
    onLoadAllItems();
    super(props);
    this.state = {selectedIndex: 0};
  }
  onChange = selectedIndex => {
    this.setState({selectedIndex: selectedIndex});
  };

  render() {
    const checkedStyle = StyleSheet.create({
      menu: {
        justifyContent: 'center',
        backgroundColor: C.COLORS.bgWhite,
        paddingHorizontal: 14,
        borderBottomWidth: 1,
        borderBottomColor: C.COLORS.primary,
        marginHorizontal: 2,
      },
      text: {
        fontFamily: 'Roboto',
        fontSize: C.UI.normalFontSize,
        color: C.COLORS.textSelected,
      },
    });
    const unCheckedStyle = StyleSheet.create({
      menu: {
        justifyContent: 'center',
        backgroundColor: C.COLORS.bgWhite,
        paddingHorizontal: 14,
        borderBottomWidth: 1,
        borderBottomColor: C.COLORS.bgWhite,
        marginHorizontal: 2,
      },
      text: {
        fontFamily: 'Roboto',
        fontSize: C.UI.normalFontSize,
        color: C.COLORS.textUnselected,
      },
    });
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: C.COLORS.bgGrey,
        // marginTop: StatusBar.currentHeight,
      },
      headerMenu: {
        height: C.UI.headerBarH,
        flexDirection: 'row',
        backgroundColor: C.COLORS.bgWhite,
        borderBottomWidth: 1,
        borderBottomColor: C.COLORS.bgWhite,
      },
      bodyContainer: {
        height:
          C.UI.screenH -
          C.UI.headerBarH -
          C.UI.bottomBarH -
          C.UI.statusBarH -
          1,
        backgroundColor: C.COLORS.bgGrey,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: C.COLORS.bgGrey,
      },
    });
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.headerMenu}>
          <ScrollView horizontal={true}>
            <RadioGroup
              items={this.data}
              selectedIndex={this.state.selectedIndex}
              onChange={this.onChange}
              checkedStyle={checkedStyle}
              unCheckedStyle={unCheckedStyle}
            />
          </ScrollView>
        </SafeAreaView>
        <ListItem style={styles.bodyContainer} items={this.items} />
      </View>
    );
  }
}
