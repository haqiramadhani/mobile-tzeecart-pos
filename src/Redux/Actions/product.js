import axios from 'axios';
import {AsyncStorage} from "react-native";

let token;
AsyncStorage.getItem('token', ()=>{}).then(jwt=>{
  token = jwt
});

export const getProduct = (data) => {
  return {
    type: 'GET_PRODUCT',
    payload: axios.get('https://tzeecart-pos.herokuapp.com/product',{params: data, headers: {Authorization: token}})
  };
};

export const searchProduct = (data) => {
  return {
    type: 'SEARCH_PRODUCT',
    payload: axios.get('https://tzeecart-pos.herokuapp.com/product/search',{params: data, headers: {Authorization: token}})
  };
};

export const postProduct = (data) => {
  return {
    type: 'POST_PRODUCT',
    payload: axios.post('https://tzeecart-pos.herokuapp.com/product', data, {headers: {Authorization: token}})
  };
};

export const updateProduct = (id, data) => {
  return {
    type: 'UPDATE_PRODUCT',
    payload: axios.put('https://tzeecart-pos.herokuapp.com/product/' + id, data, {headers: {Authorization: token}})
  };
};

export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: axios.delete('https://tzeecart-pos.herokuapp.com/product/' + id, {headers: {Authorization: token}})
  };
};
