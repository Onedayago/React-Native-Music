
import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import LoginView from '../View/LoginView'

// App 主页面
// const MainNavigator = createStackNavigator({
//
// },{
//   initialRouteName: '',
// })

//使用 createSwitchNavigator 创建分组导航
const RootNavigator = createSwitchNavigator({
  LoginView: LoginView
  }, {
  navigationOptions: {
    header: null,
  },
  initialRouteName: 'LoginView',
});



export default createAppContainer(RootNavigator);
