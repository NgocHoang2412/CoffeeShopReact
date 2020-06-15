import React, {useState}  from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Platform, Button } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/AntDesign';
import { AntDesign } from '@expo/vector-icons'; //Platform.OS === 'web'
import { useSelector, useDispatch } from 'react-redux';
let ItemIcon = {};
if (Platform.OS === 'web') {
  ItemIcon = AntDesign;//Platform.OS === 'web'
} else {
  ItemIcon = Icon;
}

const imageWith = 80;
const imageHeight = 80;
function ItemScreen({ navigation, route }) {
  const { itemId } = route.params;
  const { itemName } = route.params;
  const { itemPrice } = route.params;
  const { itemUnit } = route.params;
  const { itemImageURL } = route.params;
  const { itemSize } = route.params;
  const { itemDescription } = route.params;

  const [isSelectedHeart,setIsSelectedHeart] = useState(false);
  const [numberItemBuy,setNumberItemBuy] = useState(1);

  const userState = useSelector(state => state.user);
  const dispacth = useDispatch();

  const itemAdd = {
    id : itemId,
    name : itemName,
    price : itemPrice,
    unit : itemUnit,
    num : numberItemBuy,
  };
  var radio_props = [
    {label: 'Medium : +' + itemSize.Medium + " " + itemUnit, value: 0 },
    {label: 'Big : +' + itemSize.Big + " " + itemUnit, value: 1 }
  ];
  const [sizeItem,setSizeItem] = useState("Medium");
  
  return (
    
    <View style={styles.container}>
      <h1>Welcome, {userState} </h1>
      <View style={styles.header}>
        <Image
          style={styles.itemImage}
          source={require('../../assets/images' + itemImageURL) }
        />
        <View style={styles.titleHeader}>
          <Text style={{ marginLeft: 10, justifyContent: 'flex-start',fontSize: 30 }}>{itemName}</Text>
          <Text style={{ marginLeft: 10, justifyContent: 'flex-start',fontSize: 20 }}>
            Price : {itemPrice} {itemUnit}
          </Text>
          <View style={{marginLeft: 10, flexDirection:'row',alignItems:"center"}}>
            <ItemIcon.Button
              backgroundColor="transparent"
              size={20} 
              name={isSelectedHeart?"heart":"hearto"}
              color={isSelectedHeart?"red":""}
              onPress={()=>{setIsSelectedHeart(!isSelectedHeart)}}
              underlayColor="transparent"
            />
            <Text style={{ marginLeft: 2, justifyContent: 'flex-start',fontSize: 20 }}>
              Yeu Thich
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.boder}>
        <ScrollView>
        <Text style={{flex: 1, justifyContent: 'left',fontSize: 50 }}>Choose size</Text>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          buttonColor={'#fdb561'}
          selectedButtonColor={'#fdb561'}
          onPress={(value) => {setSizeItem({value:value})}}
        />
        <Text style={{flex: 1, justifyContent: 'left',fontSize: 30 }}>{itemDescription}</Text>
        </ScrollView>       
      </View>

      <View style={styles.bottom}>
        <ItemIcon.Button
          backgroundColor="transparent"
          size={40} 
          name={numberItemBuy>1?"minuscircle":"minuscircleo"}
          color={numberItemBuy>1?"red":""}
          onPress={()=>{if(numberItemBuy > 1) setNumberItemBuy((numberItemBuy-1))}}
          underlayColor="transparent"
        />
        <Text style={{ justifyContent: 'center',fontSize: 40 }} >{numberItemBuy}</Text>
        <ItemIcon.Button
          backgroundColor="transparent"
          size={40} 
          name="pluscircle"
          color="orange"
          onPress={()=>{setNumberItemBuy((numberItemBuy+1))}}
          underlayColor="transparent"
        />
        <Button 
          color='orange'
          //title = {parseInt(itemPrice)*numberItemBuy} 
          title="ORDER"
          onPress = {()=>{console.log('Buy item : ' + numberItemBuy + "  price : "+ parseInt(itemPrice));
          navigation.navigate("HomeContainer");
          dispacth({type : 'ADD_TO_CART',
               item : itemAdd,
          });
        }}
          underlayColor="transparent"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.5,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    //margin: 50,
    marginHorizontal : 40,
    marginVertical: 80,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    flex: 0.2,
    flexDirection:'row',
    justifyContent: "center",
    alignItems:"center",
  },
  boder: {
    flex: 0.6,
    justifyContent: "left",
    alignItems: "left",
  },
  bottom: {
    flex: 0.2,
    flexDirection:'row',
    justifyContent: "flex-start",
    alignItems: "center",
  },
  itemImage: {
    width: imageWith,
    height: imageHeight,
    marginLeft : 5,
  },
  titleHeader: {
    alignItems: "flex-start",
  },
  buttonPrice: {
    backgroundColor: "red",
    marginRight: 20,
    alignItems: "center",
    fontSize: 30,
  },
});
export default ItemScreen;
