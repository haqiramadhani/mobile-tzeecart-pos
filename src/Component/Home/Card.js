import React from 'react';
import {View, Text, Image} from "react-native";

const Card = (props) => {
  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 2,
      paddingBottom: 20,
    }}>
      <View>
        <View style={{
          height: 100,
          borderRadius: 5,
        }}>
          <Image
            source={{
              uri: props.image,
              cache: 'only-if-cached',
            }}
            style={{
              height: '85%',
              width: '100%',
              resizeMode: 'stretch',
              borderRadius: 5,
            }}
          />
        </View>
        <Text style={{
          // backgroundColor: 'black',
          // color: 'white',
          marginTop: -20,
          fontSize: 13,
          textAlign: 'center',
          color: '#1c1c1c',
        }}>{props.name}</Text>
      </View>
    </View>
  )
};

export default Card;
