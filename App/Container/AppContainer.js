
import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import LoginView from '../View/LoginView'
import PhoneLogin from '../View/PhoneLogin'
import Home from '../View/Home'

// App 主页面
const MainNavigator = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
},{
  initialRouteName: 'Home',
})

//使用 createSwitchNavigator 创建分组导航
const RootNavigator = createSwitchNavigator({
  Main: MainNavigator,
  LoginView: LoginView,
  PhoneLogin: PhoneLogin
  }, {
  navigationOptions: {
    header: null,
  },
  initialRouteName: 'Main',
});



export default createAppContainer(RootNavigator);
