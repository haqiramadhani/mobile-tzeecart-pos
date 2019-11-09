import React from 'react';
import {View, TouchableOpacity} from "react-native";
import {Icon} from "native-base";
import {Badge} from "react-native-elements";
import {connect} from 'react-redux';

const Cart = (props) => {
  return (
    <View style={{
      paddingTop: 25,
      paddingRight: 30,
      position: 'relative',
    }}>
      <TouchableOpacity onPress={()=>{props.toCart()}}>
        <Icon name={'cart'}/>
        <Badge value={props.total} badgeStyle={{
          position: 'absolute',
          top: -35,
          right: -10,
        }}/>
      </TouchableOpacity>
    </View>
  )
};

const mapStateToProps = (state) => {
  console.log('Ini state cart => ', state.cart.listCart);
  return {
    total: state.cart.totalItem,
  }
};

export default connect(mapStateToProps)(Cart);
