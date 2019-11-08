import axios from 'axios';
import {AsyncStorage} from "react-native";

let token;
AsyncStorage.getItem('token', ()=>{}).then(jwt=>{
  token = jwt
});

export const getCategory = (data) => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get('https://tzeecart-pos.herokuapp.com/category',{params: data, headers: {Authorization: token}})
  };
};

export const postCategory = (data) => {
  return {
    type: 'POST_CATEGORY',
    payload: axios.post('https://tzeecart-pos.herokuapp.com/category', data, {headers: {Authorization: token}})
  };
};

export const updateCategory = (id, data) => {
  return {
    type: 'UPDATE_CATEGORY',
    payload: axios.put('https://tzeecart-pos.herokuapp.com/category/' + id, data, {headers: {Authorization: token}})
  };
};

export const deleteCategory = (id) => {
  return {
    type: 'DELETE_CATEGORY',
    payload: axios.delete('https://tzeecart-pos.herokuapp.com/category/' + id, {headers: {Authorization: token}})
  };
};
