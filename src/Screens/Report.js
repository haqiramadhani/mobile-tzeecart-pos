import React, {useEffect, useState} from 'react';
import {AsyncStorage, ScrollView, Text, TouchableOpacity, View} from "react-native";
import StatusBar from "../Component/StatusBar";
import {Body, Header, ListItem, Right, Title} from "native-base";
import axios from 'axios';

const Report = () => {
  const [token, setToken] = useState('');
  const [listSales, setListSales] = useState([]);

  useEffect(()=>{
    AsyncStorage.getItem('token', ()=>{}).then(jwt=>{
      setToken(jwt)
    });
  },[]);

  useEffect(()=> {
    if (token !== '') {
      axios.get('https://tzeecart-pos.herokuapp.com/sale', {headers: {Authorization: token}})
        .then(response => {
          setListSales(response.data.results);
        })
    }
  },[token]);

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
          <Title>Sales Report</Title>
        </Body>
      </Header>
      {/* ======== End Header ======== */}
      <ScrollView>
        {listSales.map(item => (
          <TouchableOpacity key={item.id}>
            <View style={{
              // alignItems: 'center',
              backgroundColor: '#f7f7f7',
              // justifyContent: 'center',
              borderWidth: 1
            }}>
              <ListItem avatar>
                <Body>
                  <Text>{item.invoice}</Text>
                  <Text>{item.customer}</Text>
                </Body>
                <Right>
                  <Text note>Total :</Text>
                  <Text note>Rp {item.total}</Text>
                </Right>
              </ListItem>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
};

export default Report;
