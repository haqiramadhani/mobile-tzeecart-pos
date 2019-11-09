import React, {useState} from 'react';
import {Text, ScrollView} from "react-native";
import StatusBar from "../Component/StatusBar";
import {Body, Button, Form, Header, Input, Item, Label, Title, Picker, Icon } from "native-base";
import {connect} from 'react-redux';
import {updateProduct} from '../Redux/Actions/product'

const EditProduct = props => {
  const [data, setData] = useState({
    code: props.navigation.state.params.product.code,
    name: props.navigation.state.params.product.name,
    description: props.navigation.state.params.product.description,
    category_id: props.navigation.state.params.product.category_id,
    image: props.navigation.state.params.product.image,
    cost: String(props.navigation.state.params.product.cost),
    price: String(props.navigation.state.params.product.price),
  });

  let inputs = {};

  const focusTheField = (id) => {
    inputs[id]._root.focus()
  };

  const handleEditProduct = () => {
    props.dispatch(updateProduct(props.navigation.state.params.product.id,data))
      .then(response => {
        if (response.value.data.status === 200) {
          alert(response.value.data.message);
          props.navigation.navigate('Product');
        } else {
          alert(response.value.data.message);
        }
      });
  };

  return (
    <ScrollView>
      <StatusBar/>
      {/* ========== Header ========== */}
      <Header style={{
        backgroundColor: 'green',
      }}>
        <Body style={{
          alignItems: 'center',
        }}>
          <Title>Edit Product</Title>
        </Body>
      </Header>
      {/* ======== End Header ======== */}
      <Form style={{
        // marginTop: 5,
        paddingLeft: 10,
        paddingRight: 30,
      }}>
        <Item floatingLabel>
          <Label>
            <Text style={{
              color: 'green',
              // marginBottom: 5,
              fontSize: 14,
            }}>Code / SKU</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, code: text})}}
            value={data.code}
            style={{
              color: 'green',
              // marginBottom: 5,
              fontSize: 14,
            }}
            returnKeyType={"next"}
            blurOnSubmit={ false }
            onSubmitEditing={() => { focusTheField('name'); }}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={{
              color: 'green',
              // marginBottom: 5,
              fontSize: 14,
            }}>Name</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, name: text})}}
            value={data.name}
            style={{
              color: 'green',
              // marginBottom: 5,
              fontSize: 14,
            }}
            returnKeyType={"next"}
            getRef={input => { inputs['name'] = input }}
            onSubmitEditing={() => { focusTheField('description')}}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={{
              color: 'green',
              // marginBottom: 5,
              fontSize: 14,
            }}>Description</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, description: text})}}
            value={data.description}
            style={{
              color: 'green',
              // marginBottom: 5,
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
              // marginBottom: 5,
              fontSize: 14,
            }}>Image URL</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, image: text})}}
            value={data.image}
            style={{
              color: 'green',
              // marginBottom: 5,
              fontSize: 14,
            }}
            returnKeyType={"next"}
            getRef={input => { inputs['image'] = input }}
            onSubmitEditing={() => { focusTheField('cost')}}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={{
              color: 'green',
              // marginBottom: 5,
              fontSize: 14,
            }}>Cost</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, cost: text})}}
            value={data.cost}
            style={{
              color: 'green',
              // marginBottom: 5,
              fontSize: 14,
            }}
            returnKeyType={"next"}
            getRef={input => { inputs['cost'] = input }}
            onSubmitEditing={() => { focusTheField('price')}}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={{
              color: 'green',
              // marginBottom: 5,
              fontSize: 14,
            }}>Price</Text>
          </Label>
          <Input
            onChangeText={(text) => {setData({...data, price: text})}}
            value={data.price}
            style={{
              color: 'green',
              // marginBottom: 5,
              fontSize: 14,
            }}
            returnKeyType={"next"}
            getRef={input => { inputs['price'] = input }}
            onSubmitEditing={() => { handleEditProduct() }}
          />
        </Item>
        {/* ============================================= */}
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          style={{
            color: 'green',
            // marginBottom: 5,
            // fontSize: 14,
            marginLeft: 10,
            marginTop: 5,
          }}
          placeholder="Select category"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={data.category_id}
          onValueChange={(value)=>{alert(data.category_id);setData({...data, category_id: value})}}
        >
          {props.listCategories.map(item => (
            <Picker.Item key={item.id} label={item.name} value={item.id} />
          ))}
        </Picker>
      </Form>
      <Button style={{
        backgroundColor: 'green',
        marginTop: 30,
        paddingTop: 10,
        marginLeft: 40,
        marginRight: 40,
      }} onPress={()=>{handleEditProduct()}} title={''} block rounded>
        <Text style={{
          color: 'white',
        }}>Save Changes</Text>
      </Button>
    </ScrollView>
  )
};

const mapStateToProps = state => {
  return {
    listCategories: state.category.listCategories
  }
};

export default connect(mapStateToProps)(EditProduct);
