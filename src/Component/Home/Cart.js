import React from 'react';
import {View} from "react-native";
import {Icon} from "native-base";
import {Badge} from "react-native-elements";
import {connect} from 'react-redux';

const Cart = (props) => {
  console.log('Ini props total => ', props);
  return (
    <View style={{
      paddingTop: 25,
      paddingRight: 30,
      position: 'relative',
    }}>
      <Icon name={'cart'}/>
      <Badge value={props.total} badgeStyle={{
        position: 'absolute',
        top: -35,
        right: -10,
      }}/>
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
