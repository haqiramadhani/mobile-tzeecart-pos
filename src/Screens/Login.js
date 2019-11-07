import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, AsyncStorage} from 'react-native';
import {Item, Input, Form, Label, Text, Button} from 'native-base';
import bgImage from '../../assets/bg-login.png';
import {login} from "../Redux/Actions/auth";
import {connect} from "react-redux";

const Login = (props) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  let inputs = {};

  const focusTheField = (id) => {
    inputs[id]._root.focus()
  };

  const handleLogin = () => {
    props.dispatch(login(data))
      .then(response => {
        if (response.value.data.status === 200) {
          AsyncStorage.setItem('token', response.value.data.results.token, () => {});
          AsyncStorage.setItem('user', response.value.data.results.username, () => {});
          alert(response.value.data.message);
          props.navigation.navigate('BottomNav');
        } else {
          alert(response.value.data.message);
        }
      })
      .catch(error => alert(error.value.data.message));
  };

  useEffect(()=>{
    AsyncStorage.getItem('token', () => {}).then((token) => {if (token !== null) props.navigation.navigate('BottomNav')});
  },[]);

  return (
    <View style={styles.container}>
      <Image source={bgImage} style={styles.containerImage}/>
      <View style={styles.logo}>
      </View>
      <Form style={styles.loginForm}>
        <Item floatingLabel>
          <Label>
            <Text style={styles.input}>Username</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, username: text})}}
            value={data.username}
            style={styles.input}
            returnKeyType={"next"}
            blurOnSubmit={ false }
            onSubmitEditing={() => { focusTheField('password'); }}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={styles.input}>Password</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, password: text})}}
            value={data.password}
            style={styles.input}
            secureTextEntry={true}
            returnKeyType={"go"}
            getRef={input => { inputs['password'] = input }}
            onSubmitEditing={() => { handleLogin() }}
          />
        </Item>
      </Form>
      <Button style={styles.buttonLogin} onPress={()=>{handleLogin()}} title={''} block rounded>
        <Text>Login</Text>
      </Button>
      <Button style={styles.buttonRegister} onPress={()=>{props.navigation.navigate('Register')}} title={''} block rounded>
        <Text>Register</Text>
      </Button>
    </View>
  )
};

export default connect()(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  logo: {
    marginTop: 70,
    marginBottom: 80,
    alignItems: 'center',
  },
  loginForm: {
    marginTop: -30,
    paddingLeft: 10,
    paddingRight: 30,
  },
  input: {
    color: 'white',
    marginBottom: 6,
    fontSize: 14,
  },
  buttonLogin: {
    backgroundColor: 'blue',
    marginTop: 120,
    paddingTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonRegister: {
    backgroundColor: 'pink',
    marginTop: 30,
    paddingTop: 10,
    marginLeft: 40,
    marginRight: 40,
  }
});
