import React from 'react';
import {View} from 'react-native';
import { ListItem, Text, Left, Body, Thumbnail, Button, Icon } from 'native-base';
import { SwipeRow } from 'react-native-swipe-list-view';
import {connect} from 'react-redux';
import StatusBar from "../Component/StatusBar";

const Category = (props) => {
  console.log(props);
  return (
    <View style={{
      flex: 1,
    }}>
      <StatusBar/>
      {props.listProducts.map(category => (
        <SwipeRow leftOpenValue={75} rightOpenValue={-75} key={category.id}>
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
                <Thumbnail source={{ uri: category.image }} />
              </Left>
              <Body>
                <Text>{category.name}</Text>
                <Text note>{category.description}</Text>
              </Body>
            </ListItem>
          </View>
        </SwipeRow>
      ))}
      <Button style={{
        position: 'absolute',
        fontSize: 20,
        borderRadius: 25,
        bottom: 15,
        right: 15,
        backgroundColor: '#0193B7',
      }}><Icon name={'add'} style={{
        color: 'white',
      }}/></Button>
    </View>
  )
};

const mapStateToProps = state => {
  return {
    listProducts: state.category.listCategories
  }
};

export default connect(mapStateToProps)(Category);
