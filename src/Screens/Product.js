import React from 'react';
import {ScrollView, View} from 'react-native';
import { ListItem, Text, Left, Body, Right, Thumbnail, Button, Icon, Header, Title} from 'native-base';
import { SwipeRow } from 'react-native-swipe-list-view';
import {connect} from 'react-redux';
import StatusBar from "../Component/StatusBar";
import {deleteProduct} from "../Redux/Actions/product";

const Product = (props) => {
  const handleDelete = id => {
    props.dispatch(deleteProduct(id))
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
    <View style={{
      flex: 1,
    }}>
      <StatusBar/>
      {/* ========== Header ========== */}
      <Header style={{
        backgroundColor: 'green',
      }}>
        <Body style={{
          alignItems: 'center',
        }}>
          <Title>Product Manager</Title>
        </Body>
      </Header>
      {/* ======== End Header ======== */}
      <ScrollView>
      {props.listProducts.map(product => (
        <SwipeRow leftOpenValue={75} rightOpenValue={-75} key={product.id}>
          <View style={{
            alignItems: 'center',
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
            <Button transparent onPress={()=>props.navigation.navigate('EditProduct', {product})}><Icon name={'create'} style={{
              color: 'blue',
            }}/></Button>
            <Button transparent onPress={()=>handleDelete(product.id)}><Icon name={'trash'} style={{
              color: 'red',
            }}/></Button>
          </View>
          <View style={{
            // alignItems: 'center',
            backgroundColor: '#f7f7f7',
            // justifyContent: 'center',
            borderWidth: 1
          }}>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: product.image }} />
              </Left>
              <Body>
                <Text>{product.name} ({product.qty} pcs)</Text>
                <Text note>Code {product.code}</Text>
                <Text note>{product.category}</Text>
              </Body>
              <Right>
                <Text note>Rp {product.cost}</Text>
                <Text note/>
                <Text note>Rp {product.price}</Text>
              </Right>
            </ListItem>
          </View>
        </SwipeRow>
      ))}
      </ScrollView>
      <Button onPress={()=>props.navigation.navigate('AddProduct')} style={{
        position: 'absolute',
        fontSize: 20,
        borderRadius: 25,
        bottom: 15,
        right: 15,
        backgroundColor: '#0193B7',
      }}><Icon name={'add'} style={{
        color: 'white',
      }}/></Button>
    </View>
  )
};

const mapStateToProps = state => {
  return {
    listProducts: state.product.listProducts.products
  }
};

export default connect(mapStateToProps)(Product);
