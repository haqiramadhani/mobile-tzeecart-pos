import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {Icon} from 'native-base';

const Sort = () => {
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
        <TouchableOpacity><Text style={{paddingHorizontal: 5, backgroundColor: '#b4c1d8', borderRadius: 10, marginRight: 5}}>Default</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{paddingHorizontal: 5, backgroundColor: '#b4c1d8', borderRadius: 10, marginRight: 5}}>Name</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{paddingHorizontal: 5, backgroundColor: '#b4c1d8', borderRadius: 10, marginRight: 5}}>Category</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{paddingHorizontal: 5, backgroundColor: '#b4c1d8', borderRadius: 10, marginRight: 5}}>Date</Text></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}><Icon name={'arrow-dropdown-circle'} style={{fontSize: 20, marginRight: 5}}/><Text>Asc</Text></TouchableOpacity>
        {/*<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}><Icon name={'arrow-dropup-circle'} fontSize='13'/><Text>Descending</Text></TouchableOpacity>*/}
      </View>
    </View>
  )
};

export default Sort;
