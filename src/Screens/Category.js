import React from 'react';
import {ScrollView, View} from 'react-native';
import {ListItem, Text, Left, Body, Thumbnail, Button, Icon, Header, Title} from 'native-base';
import { SwipeRow } from 'react-native-swipe-list-view';
import {connect} from 'react-redux';
import StatusBar from "../Component/StatusBar";
import {deleteCategory} from "../Redux/Actions/category";

const Category = (props) => {
  const handleDelete = id => {
    props.dispatch(deleteCategory(id))
      .then(response => {
        if (response.value.data.status === 200) {
          alert(response.value.data.message);
          props.navigation.navigate('Category');
        } else {
          alert(response.value.data.message);
        }
      });
  };

  return (
    <View style={{
      flex: 1,
    }}>
      <StatusBar/>
      {/* ========== Header ========== */}
      <Header style={{
        backgroundColor: 'green',
      }}>
        <Body style={{
          alignItems: 'center',
        }}>
          <Title>Category Manager</Title>
        </Body>
      </Header>
      {/* ======== End Header ======== */}
      <ScrollView>
      {props.listCategories.map(category => (
        <SwipeRow leftOpenValue={75} rightOpenValue={-75} key={category.id}>
          <View style={{
            alignItems: 'center',
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
            <Button transparent onPress={()=>props.navigation.navigate('EditCategory', {category})}><Icon name={'create'} style={{
              color: 'blue',
            }}/></Button>
            <Button transparent onPress={()=>handleDelete(category.id)}><Icon name={'trash'} style={{
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
      </ScrollView>
      <Button onPress={()=>props.navigation.navigate('AddCategory')} style={{
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
    listCategories: state.category.listCategories
  }
};

export default connect(mapStateToProps)(Category);
