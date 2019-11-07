import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {Login, Register} from './Screens';
import BottomNav from './Component/BottomNav';

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

// const StackHome = createSwitchNavigator (
//   {
//     Home,
//   },
//   {
//     initialRouteName: 'Home',
//     headerMode: 'none',
//   }
// );

const Router = createSwitchNavigator(
  {
    StackAuth,
    BottomNav,
  },
  {
    initialRouteName: 'StackAuth',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
