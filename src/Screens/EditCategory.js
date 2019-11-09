import React, {useState} from 'react';
import {Text, View} from "react-native";
import StatusBar from "../Component/StatusBar";
import {Body, Button, Form, Header, Input, Item, Label, Title} from "native-base";
import {connect} from 'react-redux';
import {updateCategory} from '../Redux/Actions/category'

const EditCategory = props => {
  const [data, setData] = useState({
    name: props.navigation.state.params.category.name,
    description: props.navigation.state.params.category.description,
    image: props.navigation.state.params.category.image,
  });

  let inputs = {};

  const focusTheField = (id) => {
    inputs[id]._root.focus()
  };

  const handleEditCategory = () => {
    props.dispatch(updateCategory(props.navigation.state.params.category.id, data))
      .then(response => {
        if (response.value.data.status === 200) {
          alert(response.value.data.message);
          props.navigation.navigate('Category');
        } else {
          alert(response.value.data.message);
        }
      });
  };

  return (
    <View>
      <StatusBar/>
      {/* ========== Header ========== */}
      <Header style={{
        backgroundColor: 'green',
      }}>
        <Body style={{
          alignItems: 'center',
        }}>
          <Title>Edit Category</Title>
        </Body>
      </Header>
      {/* ======== End Header ======== */}
      <Form style={{
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 30,
      }}>
        <Item floatingLabel>
          <Label>
            <Text style={{
              color: 'green',
              marginBottom: 6,
              fontSize: 14,
            }}>Name</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, name: text})}}
            value={data.name}
            style={{
              color: 'green',
              marginBottom: 6,
              fontSize: 14,
            }}
            returnKeyType={"next"}
            blurOnSubmit={ false }
            onSubmitEditing={() => { focusTheField('description'); }}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={{
              color: 'green',
              marginBottom: 6,
              fontSize: 14,
            }}>Description</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, description: text})}}
            value={data.description}
            style={{
              color: 'green',
              marginBottom: 6,
              fontSize: 14,
            }}
            returnKeyType={"next"}
            getRef={input => { inputs['description'] = input }}
            onSubmitEditing={() => { focusTheField('image')}}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={{
              color: 'green',
              marginBottom: 6,
              fontSize: 14,
            }}>Image</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, image: text})}}
            value={data.image}
            style={{
              color: 'green',
              marginBottom: 6,
              fontSize: 14,
            }}
            returnKeyType={"go"}
            getRef={input => { inputs['image'] = input }}
            onSubmitEditing={() => { handleEditCategory() }}
          />
        </Item>
      </Form>
      <Button style={{
        backgroundColor: 'green',
        marginTop: 120,
        paddingTop: 10,
        marginLeft: 40,
        marginRight: 40,
      }} onPress={()=>{handleEditCategory()}} title={''} block rounded>
        <Text style={{
          color: 'white',
        }}>Save Changes</Text>
      </Button>
    </View>
  )
};

export default connect()(EditCategory);
