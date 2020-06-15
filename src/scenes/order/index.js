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

export default class OrderScreen extends PureComponent {
  
  constructor(props) {
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
              items={this.props.categoriesData}
              selectedIndex={this.state.selectedIndex}
              onChange={this.onChange}
              checkedStyle={checkedStyle}
              unCheckedStyle={unCheckedStyle}
            />
          </ScrollView>
        </SafeAreaView>
        <ListItem style={styles.bodyContainer} items={this.props.itemsData} />
      </View>
    );
  }
}
