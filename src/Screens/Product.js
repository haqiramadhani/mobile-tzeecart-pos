import React from 'react';
import {View} from 'react-native';
import { ListItem, Text, Left, Body, Right, Thumbnail, Button, Icon } from 'native-base';
import { SwipeRow } from 'react-native-swipe-list-view';
import {connect} from 'react-redux';
import StatusBar from "../Component/StatusBar";

const Product = (props) => {
  return (
    <View style={{
      flex: 1,
    }}>
      <StatusBar/>
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
            <Button transparent onPress={()=>alert('edit')}><Icon name={'create'} style={{
              color: 'blue',
            }}/></Button>
            <Button transparent onPress={()=>alert('delete')}><Icon name={'trash'} style={{
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
      <Button transparent style={{
        position: 'absolute',
        fontSize: 20,
        borderRadius: 25,
        bottom: 15,
        right: 15,
      }}><Icon name={'add'}/></Button>
    </View>
  )
};

const mapStateToProps = state => {
  return {
    listProducts: state.product.listProducts.products
  }
};

export default connect(mapStateToProps)(Product);
