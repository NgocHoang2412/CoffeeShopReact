import React, {useState} from 'react'
import { StyleSheet, View, Text, Alert, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as authService from '../../shared/services/auth.service';

function LoginScreen({ navigation }) {
  const [isLogin,setIsLogin] = useState(false);
  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const dispacth = useDispatch();
  
  async function onPressLogin() {
    let response = await authService.login({username, password});
    let itemsData = await authService.getItems();
    var itemsService = itemsData.data;
    let categoriesData = await authService.getCategories();
    var categoriesService = categoriesData.data;
    
    if(response === true){
      setIsLogin(true);
      navigation.navigate('HomeContainer',{
        userName : username,
        itemsData : itemsService,
        categoriesData : categoriesService,
      });
      console.log("You login this page with username = " + username + " and password = "+ password);
      console.log("You login  itemsService= "+ itemsService);

      dispacth({type : 'USERNAME',
               userName : username,
      });
    }
  }
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>
        Please Login !!!
      </Text>
	  <TextInput
        placeholder="username"
        onChange={(event) => setUserName(event.nativeEvent.text)}
        style={styles.formInput}
        value={username}
      />
    <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChange={(event) => setPassword(event.nativeEvent.text)}
        style={styles.formInput}
        value={password}
      />
    <Button
        title = {isLogin ? "Logout" : "Login"}
        onPress = {onPressLogin}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "stretch"
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  formInput: {
    height: 36,
    padding: 10,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5,
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 8,
    color: "#555555"
  },
  
});

export default LoginScreen;
