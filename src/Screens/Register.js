import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Item, Input, Form, Label, Text, Button} from 'native-base';
import bgImage from '../../assets/bg-register.png';
import {connect} from "react-redux";
import {register} from '../Redux/Actions/auth';

const Register = (props) => {
  const [data, setData] = useState({
    name: '',
    username: '',
    email: '',
    telp: '',
    password: '',
  });
  let inputs = {};

  const focusTheField = (id) => {
    inputs[id]._root.focus()
  };

  const handleRegister = () => {
    props.dispatch(register(data))
      .then(response => {
        if (response.value.data.status === 200) {
          alert(response.value.data.message);
        } else {
          alert(response.value.data.message);
        }
      })
      .catch(error => alert(error.value.data.message));
  };

  return (
    <View style={styles.container}>
      <Image source={bgImage} style={styles.containerImage}/>
      <View style={styles.logo}>
      </View>
      <Form style={styles.loginForm}>
        <Item floatingLabel>
          <Label>
            <Text style={styles.input}>Full name</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, name: text})}}
            value={data.name}
            style={styles.input}
            returnKeyType={"next"}
            onSubmitEditing={() => { focusTheField('username'); }}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={styles.input}>Username</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, username: text})}}
            value={data.username}
            style={styles.input}
            returnKeyType={"next"}
            getRef={input => { inputs['username'] = input }}
            onSubmitEditing={() => { focusTheField('email'); }}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={styles.input}>Email</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, email: text})}}
            value={data.email}
            style={styles.input}
            returnKeyType={"next"}
            getRef={input => { inputs['email'] = input }}
            onSubmitEditing={() => { focusTheField('telp'); }}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={styles.input}>Phone</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, telp: text})}}
            value={data.telp}
            style={styles.input}
            returnKeyType={"next"}
            getRef={input => { inputs['telp'] = input }}
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
            onSubmitEditing={() => { handleRegister() }}
          />
        </Item>
      </Form>
      <Button style={styles.buttonRegister} onPress={()=>{handleRegister()}} title={''} block rounded>
        <Text>Register</Text>
      </Button>
      {/*<Button style={styles.buttonLogin} onPress={()=>{}} title={''} block rounded>*/}
      {/*  <Text>Login</Text>*/}
      {/*</Button>*/}
    </View>
  )
};

export default connect()(Register);

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
    marginTop: -95,
    paddingLeft: 10,
    paddingRight: 30,
  },
  input: {
    color: 'white',
    marginBottom: 6,
    fontSize: 14,
  },
  buttonLogin: {
    marginTop: 30,
    paddingTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonRegister: {
    backgroundColor: 'blue',
    marginTop: 40,
    paddingTop: 10,
    marginLeft: 40,
    marginRight: 40,
  }
});
