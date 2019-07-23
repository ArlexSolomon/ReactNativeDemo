/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import store from './src/server/store/index';
import React, { Component } from 'react';

import Login from './src/client/page/login'
import Home from './src/client/page/home'
import Discovery from './src/client/page/discovery'
import Profile from './src/client/page/profile'
import About from './src/client/page/about'

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  },
  Discovery: {
    screen: Discovery
  },
},
  {
    initialRouteName: 'Home',
    order: ['Home', 'Discovery', 'Profile'],
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: 'skyblue',
      inactiveTintColor: 'skyblue',
      inactiveBackgroundColor: 'white',
      labelStyle: {
        fontSize: 12,
      },
    }
  }
);

const AppStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: () => null
    }
  },
  Index: {
    screen: BottomTabNavigator,
    navigationOptions: {
      header: () => null
    }
  },
  About: {
    screen: About
  },
});

const AppContainer = createAppContainer(AppStackNavigator)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
