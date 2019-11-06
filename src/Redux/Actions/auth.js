import axios from 'axios';

export const register = (data) => {
  return {
    type: 'REGISTER',
    payload: axios.post('https://tzeecart-pos.herokuapp.com/user/register', data)
  };
};

export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios.post('https://tzeecart-pos.herokuapp.com/user/login', data)
  };
};
