import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import {getProduct} from "../../Redux/Actions/product";

const Sort = (props) => {
  const [sort_by, setSort] = useState('id');
  const [order, setOrder] = useState('ascending');
  useEffect(()=>{
    props.dispatch(getProduct({
      per_page: 12,
      page: 1,
      sort_by,
      order,
    }));
  },[sort_by, order]);

  return (
    <View style={{
      flexDirection: 'row',
      paddingTop: 15,
      paddingHorizontal: 20,
      justifyContent: 'space-between',
    }}>
      <View style={{
        flexDirection: 'row',
      }}>
        {/*<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}><Icon name={'ios-funnel'} fontSize='13'/><Text>Default</Text></TouchableOpacity>*/}
        {/*<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}><Icon name={'ios-funnel'} fontSize='13'/><Text>Name</Text></TouchableOpacity>*/}
        {/*<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}><Icon name={'ios-funnel'} fontSize='13'/><Text>Category</Text></TouchableOpacity>*/}
        {/*<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}><Icon name={'ios-funnel'} fontSize='13'/><Text>Date</Text></TouchableOpacity>*/}
        <TouchableOpacity onPress={()=>{setSort('id')}}><Text style={{color: 'white',paddingHorizontal: 5, backgroundColor: '#706F71', borderRadius: 10, marginRight: 5}}>Default</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setSort('name')}}><Text style={{color: 'white',paddingHorizontal: 5, backgroundColor: '#706F71', borderRadius: 10, marginRight: 5}}>Name</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setSort('category')}}><Text style={{color: 'white',paddingHorizontal: 5, backgroundColor: '#706F71', borderRadius: 10, marginRight: 5}}>Category</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setSort('updated')}}><Text style={{color: 'white',paddingHorizontal: 5, backgroundColor: '#706F71', borderRadius: 10, marginRight: 5}}>Date</Text></TouchableOpacity>
      </View>
      <View>
        {(order === 'ascending') ? (
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={()=>{setOrder('descending')}}><Icon name={'arrow-dropdown-circle'} style={{fontSize: 20, marginRight: 5}}/><Text>Asc</Text></TouchableOpacity>
        ) : (
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={()=>{setOrder('ascending')}}><Icon name={'arrow-dropup-circle'} style={{fontSize: 20, marginRight: 5}}/><Text>Desc</Text></TouchableOpacity>
        )}
      </View>
    </View>
  )
};

export default connect()(Sort);
