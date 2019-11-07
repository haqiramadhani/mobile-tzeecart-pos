import React from 'react';
import {View, TextInput} from 'react-native';
import {Icon} from 'native-base';

const Search = () => {
  return (
    <View style={{
      position: 'relative',
      paddingTop: 15,
      paddingHorizontal: 20,
    }}>
      <TextInput
        placeholder={'Looking for something?'}
        style={{
          borderRadius: 25,
          borderWidth: 1,
          borderColor: '#e8e8e8',
          height: 40,
          fontSize: 16,
          paddingLeft: 45,
          paddingRight: 20,
        }}
      />
      <Icon name={'search'} style={{
        position: 'absolute',
        top: 25,
        left: 30,
      }}/>
    </View>
  )
};

export default Search;
