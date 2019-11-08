import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {Icon} from 'native-base';
import {searchProduct} from "../../Redux/Actions/product";
import {connect} from "react-redux";


const Search = (props) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (keyword !== '') {
      props.dispatch(searchProduct({
        q: keyword,
        per_page: 12,
        page: 1,
      }));
    }
  };
  // useEffect(()=>{
  // },[keyword]);

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
        value={keyword}
        onChangeText={(text) => {setKeyword(text)}}
        clearTextOnFocus
        returnKeyType={"search"}
        onSubmitEditing={()=>{handleSearch()}}
      />
      <Icon name={'search'} style={{
        position: 'absolute',
        top: 25,
        left: 30,
      }}/>
    </View>
  )
};

export default connect()(Search);
