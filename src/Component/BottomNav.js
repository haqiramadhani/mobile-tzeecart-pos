import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base';
import {Home, Product, Category, Purchase, Report} from '../Screens';

const BottomNav = createBottomTabNavigator({
  Home,
  Product,
  Category,
  Purchase,
  Report,
},{
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

export default BottomNav;
