import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, TouchableOpacity, AsyncStorage} from "react-native";
import {Body, Button, Header, Icon, Left, ListItem, Right, Thumbnail, Title} from "native-base";
import {connect} from 'react-redux';
import {plusCartQty, minusCartQty, cleatListCart} from "../Redux/Actions/cart";
import axios from 'axios';

const Cart = props => {
  const [token, setToken] = useState('');

  useEffect(()=>{
    AsyncStorage.getItem('token', ()=>{}).then(jwt=>{
      setToken(jwt)
    });
  },[]);

  const handleMinus = item => {
    props.dispatch(minusCartQty(item));
  };

  const handlePlus = item => {
    props.dispatch(plusCartQty(item));
  };

  const handleCheckout = () => {
    const data = {
      customer: 'Walk-in Customer',
      detail: JSON.stringify(props.listCart.map(item => {return {product_id: item.id, qty: Number(item.qty), subtotal: item.subtotal}})),
      total: props.total
    };

    console.log(token);

    axios.post('https://tzeecart-pos.herokuapp.com/sale', data, {headers: {Authorization: token}})
      .then(response => {
        if (response.data.status === 200) {
          alert(response.data.message);
          handleCancel();
          props.navigation.navigate('Home');
        } else {
          alert(response.data.message)
        }
      })
  };

  const handleCancel = () => {
    props.dispatch(cleatListCart())
  };

  return (
    <View>
      {/* ========== Header ========== */}
      <Header style={{
        backgroundColor: 'green',
      }}>
        <Body style={{
          alignItems: 'center',
        }}>
          <Title>Cart</Title>
        </Body>
      </Header>
      {/* ======== End Header ======== */}
      <ScrollView style={{
        height: '75%',
      }}>
        {props.listCart.map(item => (
          <TouchableOpacity key={item.id}>
            <View style={{
              // alignItems: 'center',
              backgroundColor: '#f7f7f7',
              // justifyContent: 'center',
              borderWidth: 1
            }}>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: item.image }} />
                </Left>
                <Body>
                  <Text>{item.name} ({item.qty} pcs)</Text>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                    <TouchableOpacity onPress={()=>handleMinus(item)} style={{
                      paddingHorizontal: 15,
                    }}>
                      <Icon name={'remove-circle-outline'} style={{
                        color: 'red',
                      }}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handlePlus(item)} style={{
                      paddingHorizontal: 15,
                    }}>
                      <Icon name={'ios-add-circle-outline'} style={{
                        color: 'green',
                      }}/>
                    </TouchableOpacity>
                  </View>
                </Body>
                <Right>
                  <Text note>Subtotal :</Text>
                  <Text note>Rp {item.subtotal}</Text>
                </Right>
              </ListItem>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button onPress={()=>handleCheckout()} style={{
        // flex: 1,
        justifyContent: 'center',
        backgroundColor: '#5FBA7D',
      }}>
        <Text style={{
          color: 'white',
        }}>Checkout | Rp {props.total}</Text>
      </Button>
      <Button onPress={()=>handleCancel()} style={{
        // flex: 1,
        justifyContent: 'center',
        backgroundColor: '#62B0DF',
        marginTop: 13,
      }}>
        <Text style={{
          color: 'white',
        }}>Cancel</Text>
      </Button>
    </View>
  )
};

const mapStateToProps = state => {
  return {
    listCart: state.cart.listCart,
    total: state.cart.totalPrice,
  }
};

export default connect(mapStateToProps)(Cart);
