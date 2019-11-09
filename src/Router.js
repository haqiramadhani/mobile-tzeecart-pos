import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {Login, Register} from './Screens';
import BottomNav from './Component/BottomNav';
import {Cart, EditProduct, EditCategory, AddProduct, AddCategory} from '../src/Screens';

const StackAuth = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);

export const StackHome = createStackNavigator(
  {
    BottomNav,
    Cart,
    EditProduct,
    EditCategory,
    AddProduct,
    AddCategory,
  },
  {
    initialRouteName: 'BottomNav',
    headerMode: 'none',
  }
);

const Router = createSwitchNavigator(
  {
    StackAuth,
    StackHome,
  },
  {
    initialRouteName: 'StackAuth',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
