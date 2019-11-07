import product from './product';
import auth from './auth';
import cart from './cart';
import {combineReducers} from "redux";

export default combineReducers({
  product,
  auth,
  cart,
})
