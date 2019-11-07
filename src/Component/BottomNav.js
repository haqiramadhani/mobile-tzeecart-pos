import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base';

//Content
import Home from '../Screens/Home';
import Product from '../Screens/Product';
import Category from '../Screens/Category';
import Purchase from '../Screens/Purchase';
import Report from '../Screens/Report';

const TabNavigator = createBottomTabNavigator({
  Home,
  Product,
  Category,
  Purchase,
  Report,
  // Order: {
  //   screen: Order,
  //   navigationOptions: {
  //     tabBarLabel: 'Order'
  //   }
  // },
  // DataProduct: {
  //   screen: DataProduct,
  //   navigationOptions: {
  //     tabBarLabel: 'Product',
  //   }
  // },
  // DataCategory: {
  //   screen: DataCategory,
  //   navigationOptions: {
  //     tabBarLabel: 'Category',
  //   }
  // },
  // History: {
  //   screen: History,
  //   navigationOptions: {
  //     tabBarLabel: 'History',
  //   }
  // },
},{
  //router config
  initialRouteName: 'Home',
  order: ['Home','Product','Category','Purchase', 'Report'],
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({focused}) => {
      const { routeName } = navigation.state;
      let iconProperty;

      if (routeName === 'Order') {
        iconProperty = focused ? {name: 'pricetags', size: 27, color: 'green'} : {name: 'pricetags', size: 22, color: 'black'};
      } else if (routeName === 'Product') {
        iconProperty = focused ? {name: 'logo-buffer', size: 27, color: 'green'} : {name: 'logo-buffer', size: 22, color: 'black'};
      } else if (routeName === 'Category') {
        iconProperty = focused ? {name: 'folder', size: 27, color: 'green'} : {name: 'folder', size: 22, color: 'black'};
      } else if (routeName === 'Purchase') {
        iconProperty = focused ? {name: 'cash', size: 27, color: 'green'} : {name: 'cash', size: 22, color: 'black'};
      } else {
        iconProperty = focused ? {name: 'paper', size: 27, color: 'green'} : {name: 'paper', size: 22, color: 'black'};
      }

      return <Icon name={iconProperty.name} style={{fontSize: iconProperty.size, color: iconProperty.color}}/>;
    },
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'grey',
    },
  }),
});

const BottomNav = createAppContainer(TabNavigator);
export default BottomNav;
