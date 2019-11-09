import React, {useEffect} from 'react';
import {View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {getProduct} from '../Redux/Actions/product';
import {getCategory} from '../Redux/Actions/category';
import {addToCart} from "../Redux/Actions/cart";
import {connect} from 'react-redux';
import StatusBar from "../Component/StatusBar";
import {Search, Cart, Sort, Card} from '../Component/Home';

const Home = (props) => {
  const handleAddToCart = (data) => {
    if (data.qty > 0) {props.dispatch(addToCart({
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      subtotal: data.price,
      max: data.qty,
      qty: 1,
    }))}
  };

  useEffect(()=>{
    props.dispatch(getProduct({
      per_page: 12,
      page: 1
    }));
    props.dispatch(getCategory({}))
  },[]);
  // AsyncStorage.clear(()=>{}).then(() => props.navigation.navigate('StackAuth'));
  return (
    <View>
      {/*===== Set status bar color =====*/}
      <StatusBar/>
      {/*======= Search & Cart Bar =======*/}
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Search/>
        </View>
        <View>
          <Cart toCart={()=>props.navigation.navigate('Cart')}/>
        </View>
      </View>
      {/*========= Sort & Order =========*/}
      <Sort/>
      {/*=========== Content ===========*/}
      <View style={{height: '80%'}}>
        <ScrollView style={{
          marginTop: 15,
          paddingHorizontal: 20,
        }}>
          <FlatList
            data={props.listProducts}
            renderItem={(item) => (
              <View style={{ width: '30%', flexDirection: 'column', margin: '2%' }}>
                <TouchableOpacity onPress={()=>{handleAddToCart(item.item)}}><Card name={item.item.name} image={item.item.image}/></TouchableOpacity>
              </View>
            )}
            numColumns={3}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
      </View>
    </View>
  )
};

const mapStateToProps = state => {
  return {
    listProducts: state.product.listProducts.products,
  }
};

export default connect(mapStateToProps)(Home);
