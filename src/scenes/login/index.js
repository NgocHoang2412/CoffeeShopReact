import React, {useState} from 'react'
import { StyleSheet, View, Text, Alert, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

function LoginScreen({ navigation }) {
  const [isLogin,setIsLogin] = useState(false);
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");

  //const userState = useSelector(state => state.user);
  const dispacth = useDispatch();
  
  function onPressLogin() {
   
    setIsLogin(true);
    navigation.navigate('HomeContainer',{
      userName : userName,
    });
    console.log("You login this page with username = " + userName + " and password = "+ password);

    dispacth({type : 'USERNAME',
              userName : userName,
    });
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
        value={userName}
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
